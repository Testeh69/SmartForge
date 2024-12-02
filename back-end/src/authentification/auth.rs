use serde::{Deserialize, Serialize};
use rand::{RngCore, rngs::OsRng};
use hex;
use jsonwebtoken::{encode, Header, EncodingKey};

#[derive(Deserialize, Serialize)] 
pub struct AuthData {
    pub username: String,
    pub password: String,
}

#[derive(Deserialize, Serialize)] 
pub struct AuthAnswer {
    pub answer: bool,
    pub token: String,
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
