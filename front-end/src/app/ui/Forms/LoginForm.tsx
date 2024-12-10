'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';



const LoginForm = () => {
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();





  useEffect(() => {

    const token:string|null =  localStorage.getItem("auth_token");


    const SubmitToken = async (token:string) => {
      try {
        const response = await fetch('http://localhost:8080/auth/token', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({"username": "null", "password": "null", "token": token})})
          const data = await response.json();
          console.log(data)
          if (data.answer === true){
            router.push('/dashboard/Import');
          }
          else{
            localStorage.clear();
          }
        }catch (error) {
      console.error('Error:', error);
      return null;
    }}
    if (token){
    SubmitToken(token);
  }
  
  }, [router]);

 
  const SubmitAuth = async (username:string, password:string) => {
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"username": username, "password": password})})
        const data = await response.json();
        if (data.answer === true){
          console.log("authentification");
          console.log(data.token);
          console.log("lol")
          localStorage.setItem("auth_token", data.token);
          router.push('/dashboard/Import');
        }
      }catch (error) {
    console.error('Error:', error);
    return null;
  }}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    SubmitAuth(username, password)


  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="Username" className="block text-gray-700">Nom utilisateur</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-gray-400 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg focus: shadow-orange-500/50 transition-shadow duration-[500ms] ease-in-out"
              placeholder="Entrez votre username"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-gray-500 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg focus: shadow-orange-500/50 transition-shadow duration-[500ms] ease-in-out"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-center mb-4">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="bg-gradient-to-tr from-smartforge-red via-orange-500 to-smartforge-yellow rounded-2xl w-full h-14 shadow-lg hover:shadow-lg hover:shadow-orange-500/50 transition-shadow duration-[500ms] ease-in-out"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
