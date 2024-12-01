import Image from "next/image";

const MainPage = () => {



    return (
        <div className="flex items-center justify-center space-x-4">
            <div className="space-y-2">            
                <h1 className="text-huge font-bold bg-gradient-to-r from-smartforge-red via-orange-500 to-smartforge-yellow bg-clip-text text-transparent">SmartForge</h1>
                <div className="flex items-center justify-center" >
                    <h2 className="text-xxl animate-cursor"><i>Analyze, Forge, Test, Fail, Forge Again, Test Smarter !</i></h2>
                </div>
                    <div className="flex items-center space-x-6">
                    <button className="border border-solid border-gray-300 flex items-center justify-center space-x-6 rounded-2xl w-40 h-14 hover:bg-gradient-to-tr from-smartforge-red via-orange-500 to-smartforge-yellow hover:border-transparent hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all duration-[500ms]">
                        <p className="text-l">Doc</p>
                        <Image
                            aria-hidden
                            src="/file.svg"
                            alt="fileicon"
                            width={30}
                            height={30}
                            className="filter invert"
                        />
                    </button>
                    <button className="bg-gradient-to-tr from-smartforge-red via-orange-500 to-smartforge-yellow rounded-2xl w-40 h-14 shadow-lg shadow-orange-500/50 hover:animate-pulse" >
                        <p className="text-l">Sign In →</p>
                    </button>
                </div>
            </div>
            <Image 
                src = "/logo/smartforgelogo.png"
                width = {600}
                height = {600}
                alt = "smart-forge logo"
            />
        </div>
    )
} 


export default MainPage; 
