use std::collections::HashMap;

use napi::{Env, JsNumber, JsObject, Task};

use crate::enums::Subject;
use crate::SubjectMarks;

pub struct CalculateTotalMarks {
    pub all_subject_marks: SubjectMarks,
    pub exclude_subject: Vec<Subject>,
}

#[napi]
impl Task for CalculateTotalMarks {
    type Output = u32;
    type JsValue = JsNumber;

    fn compute(&mut self) -> napi::Result<Self::Output> {
        let mut tot_marks = 0;
        self.exclude_subject.iter().for_each(|sub| {
            self.all_subject_marks.0.remove_entry(sub);
        });
        self
            .all_subject_marks
            .0
            .iter()
            .for_each(|(_sub, marks)| tot_marks += *marks);
        Ok(tot_marks)
    }

    fn resolve(&mut self, env: Env, output: Self::Output) -> napi::Result<Self::JsValue> {
        env.create_uint32(output)
    }
}

pub struct CalculateTotalMarksPerSubject {
    pub oral_subject_marks: SubjectMarks,
    pub written_subject_marks: SubjectMarks,
    pub exclude_subjects: Vec<Subject>,
}

#[napi]
impl Task for CalculateTotalMarksPerSubject {
    type Output = SubjectMarks;
    type JsValue = JsObject;
    fn compute(&mut self) -> napi::Result<Self::Output> {
        self.exclude_subjects.iter().for_each(|sub| {
            self.oral_subject_marks.0.remove_entry(sub);
            self.written_subject_marks.0.remove_entry(sub);
        });

        let mut total_marks_per_subject = HashMap::new();
        self.written_subject_marks.0.keys().for_each(|sub| {
            let written_subject_marks = *self.written_subject_marks.0.get(sub).unwrap();
            let oral_subject_marks = *self.oral_subject_marks.0.get(sub).unwrap();
            total_marks_per_subject.insert(*sub, written_subject_marks + oral_subject_marks);
        });
        Ok(SubjectMarks(total_marks_per_subject))
    }

    fn resolve(&mut self, env: Env, output: Self::Output) -> napi::Result<Self::JsValue> {
        let mut obj = env.create_object().unwrap();
        output.0.iter().for_each(|(sub, marks)| {
            obj.set_property(env.create_string(sub.as_ref()).unwrap(), env.create_uint32(*marks).unwrap()).unwrap();
        });
        Ok(obj)
    }
}
