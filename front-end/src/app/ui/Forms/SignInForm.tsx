






const SigninForm = () => {

    return(

        <div className="min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Se Créer</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg focus: shadow-orange-500/50 transition-shadow duration-[500ms] ease-in-out"
                placeholder="Entrez votre email"
                required
              />
            </div>
  
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg focus: shadow-orange-500/50 transition-shadow duration-[500ms] ease-in-out"
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-tr from-smartforge-red via-orange-500 to-smartforge-yellow rounded-2xl w-full h-14 shadow-lg hover:shadow-lg hover:shadow-orange-500/50 transition-shadow duration-[500ms] ease-in-out"            >
              Se Créer
            </button>
          </form>
        </div>
      </div>

    )
} 
export default SigninForm;