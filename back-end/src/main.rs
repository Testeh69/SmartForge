use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use actix_cors::Cors;
use chrono::Utc;
mod authentification;
use authentification::auth::{generate_secret_key, generate_token, push_secret_key, secret_key_validation, verify_account, AnswerTokenValidation, AuthAnswer, AuthData};




async fn secret_key_checking(secret_key:web::Json<AuthData>) -> impl Responder{
    let secret_key: String = secret_key.token.clone().unwrap();  
    let validation = secret_key_validation(&secret_key);
    let answer_token_validation: AnswerTokenValidation;
    if validation {
        answer_token_validation = AnswerTokenValidation {
            answer: true,
            username: Some("admin".to_string()),
    }} else{
        answer_token_validation = AnswerTokenValidation {
            answer: false,
            username:None,
            }
        };
    HttpResponse::Ok().json(answer_token_validation)

}

async fn login(auth_data: web::Json<AuthData>)->impl Responder{

    let username = auth_data.username.clone();
    let password: String = auth_data.password.clone();
    let answer = verify_account(&username, &password);
    let answer_server:AuthAnswer;
    if answer{
        let secret_key = generate_secret_key();
        let token = generate_token( &secret_key, &auth_data.username);
        let token_in_json = token.clone();
        answer_server = AuthAnswer{
            answer: true,
            token : Some(token),
        };
        let timestamp: i64 = Utc::now().timestamp(); 

        push_secret_key(&token_in_json, timestamp);

    }
    else{
        answer_server  = AuthAnswer{
            answer: false,
            token:None,
        };

    }
    HttpResponse::Ok().json(answer_server) // Envoie la réponse JSON
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(Cors::default().allow_any_origin().allow_any_method().allow_any_header())
            .route("/auth/login", web::post().to(login))
            .route("/auth/token", web::post().to(secret_key_checking))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}