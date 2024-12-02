use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use actix_cors::Cors;
mod authentification;
use authentification::auth::{AuthData, AuthAnswer, generate_secret_key, generate_token};



async fn login(auth_data: web::Json<AuthData>)->impl Responder{
  
    let secret_key = generate_secret_key();
    let token = generate_token( &secret_key, &auth_data.username);
    let _answer : AuthAnswer = AuthAnswer{
        answer: true,
        token : token,
    };
    
    println!("Token Jnt  généré{:?}",_answer.token);
    HttpResponse::Ok().json(_answer) // Envoie la réponse JSON
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(Cors::default().allow_any_origin().allow_any_method().allow_any_header())
            .route("/auth", web::post().to(login))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}