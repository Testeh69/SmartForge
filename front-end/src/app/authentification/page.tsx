'use client';
import LoginForm from "../ui/Forms/LoginForm";
import Image from "next/image";




const AuthPage = () => {
  
   


    return (
        <div className=" flex flex-col items-center justify-center overflow-hidden min-h-screen px-4 sm:px-6 lg:px-8 space-y-4 overflow-hidden">
            <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                    <h1 className="text-huge font-bold bg-gradient-to-r from-smartforge-red via-orange-500 to-smartforge-jaune bg-clip-text text-transparent animate-gradient-glow">
                        SmartForge
                    </h1>
                    <Image 
                        src="/logo/smartforgelogo.png"
                        width={190}
                        height={190}
                        alt="smart-forge logo"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
                <LoginForm />
            </div>
        </div>
    )
} 

export default AuthPage;