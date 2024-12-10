use serde::{Deserialize, Serialize};


#[derive(Deserialize, Serialize, Debug, Clone)] 
pub struct DocAnswer {
    pub answer:bool,
}