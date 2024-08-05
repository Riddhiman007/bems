#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use std::collections::HashMap;

use napi::bindgen_prelude::*;
use napi::bindgen_prelude::ToNapiValue;
use napi::sys::{napi_env, napi_value};
use serde::{Deserialize, Serialize};

use crate::enums::Subject;

mod compute;
mod enums;

#[derive(Serialize, Deserialize, Eq, PartialEq)]
pub struct SubjectMarks(HashMap<Subject, u32>);

impl Clone for SubjectMarks {
  fn clone(&self) -> Self {
    let mut hash_map = HashMap::new();
    self.0.iter().for_each(|(sub, marks)| {
      hash_map.insert(*sub, *marks);
    });
    SubjectMarks(hash_map)
  }
  fn clone_from(&mut self, source: &Self) {
    *self = source.clone();
  }
}

impl FromNapiValue for SubjectMarks {
  unsafe fn from_napi_value(env: napi_env, napi_val: napi_value) -> Result<Self> {
    let string = String::from_napi_value(env, napi_val).expect("Failed to convert");
    Ok(SubjectMarks(serde_json::from_str(string.as_str()).unwrap()))
  }
}

impl ToNapiValue for SubjectMarks {
  unsafe fn to_napi_value(env: napi_env, val: Self) -> Result<napi_value> {
    let res = serde_json::to_string(&val).unwrap();
    Ok(String::to_napi_value(env, res).unwrap())
  }

}

#[napi]
fn calculate_total_marks(
  #[napi(ts_arg_type = "Record<Subject, number>")]mut all_subject_marks: SubjectMarks,
  exclude_subjects: Vec<Subject>,
) -> u32 {
  let mut tot_marks = 0;
  exclude_subjects.iter().for_each(|sub| {
    all_subject_marks.0.remove_entry(sub);
  });

  all_subject_marks
    .0
    .iter()
    .for_each(|(_sub, marks)| tot_marks += *marks);
  tot_marks
}

#[napi]
fn calculate_total_marks_per_subject(
  #[napi(ts_arg_type = "Record<Subject, number>")]mut oral_subject_marks: SubjectMarks,
  #[napi(ts_arg_type = "Record<Subject, number>")] mut written_subject_marks: SubjectMarks,
  exclude_subjects: Vec<Subject>) -> HashMap<Subject, u32>{

  exclude_subjects.iter().for_each(|sub| {
    oral_subject_marks.0.remove_entry(sub);
    written_subject_marks.0.remove_entry(sub);
  });

  let mut total_marks_per_subject = HashMap::new();
  written_subject_marks.0.keys().for_each(|sub| {
    let written_subject_marks = *written_subject_marks.0.get(sub).unwrap();
    let oral_subject_marks = *oral_subject_marks.0.get(sub).unwrap();
    total_marks_per_subject.insert(*sub, written_subject_marks + oral_subject_marks);
  });

  total_marks_per_subject
}

#[napi]
fn calculate_fa_percentage(fa_marks: u32, full_marks:u32)->f32{
  ((fa_marks as f32/full_marks as f32)*100.0) as _
}

#[napi]
fn calculate_sa1_percentage(sa1_marks: u32, full_marks:u32, fa1_percentage:u32)->f32{
  ((((sa1_marks as f32/full_marks as f32)*100.0)+fa1_percentage as f32)/2.0) as _
}

#[napi]
fn calculate_sa2_percentage(sa2_marks: u32, full_marks:u32, sa1_percentage:u32)->f32{
  ((((sa2_marks as f32/full_marks as f32)*100.0)+sa1_percentage as f32)/2.0) as _
}

