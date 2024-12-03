use std::fs;
use serde::{Deserialize, Serialize};
use rand::{RngCore, rngs::OsRng};
use hex;
use jsonwebtoken::{encode, Header, EncodingKey};
use chrono::Utc;


#[derive(Deserialize, Serialize, Debug, Clone)] 
pub struct AuthData {
    pub username: String,
    pub password: String,
    pub token: Option<String>,
    pub token_timestamp: Option<i64>,
}

#[derive(Deserialize, Serialize)] 
pub struct AuthAnswer {
    pub answer: bool,
    pub token: Option<String>,
}


#[derive(Deserialize, Serialize)] 
pub struct AnswerTokenValidation {
    pub answer: bool,
    pub username: Option<String>,
}

#[derive(Serialize)]
struct Claims {
    username: String, 
    exp: usize, //time stamp for expiration of the token  
}

pub fn generate_secret_key() -> String{
    let mut secret_key = vec![0u8;32];
    OsRng.fill_bytes(&mut secret_key);
    let hex_string: String = hex::encode(&secret_key);
    return hex_string;
}



pub fn generate_token(secret_key:&str, username:&str) -> String{
    let claims = Claims{
        username: username.to_string(),
        exp: 10000000000,
    };
    let encoding_key = EncodingKey::from_secret(secret_key.as_bytes());
    let token = encode(&Header::default(),&claims, &encoding_key).unwrap();
    return token
}



pub fn verify_account(username:&str, password:&str)-> bool{
    let json_data = fs::read_to_string("account.json").expect("Unable to access the file");
    let user:AuthData = serde_json::from_str(&json_data).expect("Json file was not well formated");

    if username == user.username && password == user.password{
        return true;
    }
    else{
        return false;
    }

}


pub fn push_secret_key(secret_key:&str, timestamp:i64){
    let json_data = fs::read_to_string("account.json").expect("failed to load the json file");
    let mut user: AuthData = serde_json::from_str(&json_data).expect("failed to acces the data inside");
    user.token = Some(secret_key.to_string());
    user.token_timestamp = Some(timestamp);
    let updated_json = serde_json::to_string_pretty(&user).expect("Failed to serialize updated AuthData");
    fs::write("account.json", updated_json).expect("Failed to write updated data to JSON");

}



pub fn secret_key_validation(secret_key:&str) ->bool{
    let string_secret_key = secret_key.to_string();
    let json_data = fs::read_to_string("account.json").expect("failed to load the json file");
    let user: AuthData = serde_json::from_str(&json_data).expect("failed to acces the data inside");
    let timestamp_now: i64 = Utc::now().timestamp();
    let token = Some(user.token).unwrap().unwrap();
    let timestamp_token = Some(user.token_timestamp).unwrap().unwrap();
    let difference = timestamp_now - timestamp_token;
    println!("{difference}");
    if token == string_secret_key{
        if difference < 500{
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }

}