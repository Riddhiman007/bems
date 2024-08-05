use serde::{Deserialize, Serialize};

#[napi(string_enum)]
pub enum ExamType {
    FA1,
    SA1,
    FA2,
    SA2,
}

#[derive(Serialize, Deserialize, Eq, PartialEq, Hash)]
#[napi(string_enum)]
pub enum Subject {
    English,
    Hindi,
    Marathi,
    SST,
    Science,
    Mathematics,
    Computer,
}

impl AsRef<str> for Subject {
    fn as_ref(&self) -> &str {
        match self {
            Subject::Computer => "Computer",
            Subject::Mathematics => "Mathematics",
            Subject::English => "English",
            Subject::Science => "Science",
            Subject::Hindi => "Hindi",
            Subject::SST => "SST",
            Subject::Marathi => "Marathi"
        }
    }
}