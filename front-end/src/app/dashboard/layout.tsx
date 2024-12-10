import Link from "next/link";
import Image from "next/image";




export default function MenuLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  const OptionMenu:string[] = [
    "Import",
    "Home",
    "Cleaning",
    "Graphs",
    "ML"
  ];

  const OptionMenuPicture:string[] = [
    "/menu/import.svg",
    "/menu/home.svg",
    "/menu/clean.svg",
    "/menu/graphs.svg",
    "/menu/ml.svg"
  ];
 
  return (
    <div className="flex flex-row w-[100%] ">
      <div className="w-[15%] flex items-center justify-center">
      <nav className="flex flex-col items-center bg-gradient-to-tr from-smartforge-red to-orange-500 border h-[90%] w-[100%] border-gray-900 rounded-lg justify-evenly shadow-lg shadow-orange-500/50">
          <div className="flex flex-col items-center">
            <Image 
                  src = "/logo/smartforgelogo.png"
                  width = {200}
                  height = {200}
                  alt = "smart-forge logo"
            />
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-xxl py-2">SmartForge</h1>
              <h3 className="text-m py-2"><i>Analyze, Forge, Test, Fail, Forge Again, Test Smarter !</i></h3>
            </div>
          </div>
          {OptionMenu.map((option, index) => (
            <Link key={index} href={`/dashboard/${option}`}
            className="text-xl py-4 w-[98%] rounded-md flex flex-rows 
              items-center justify-evenly text-center font-bold 
              transition duration-300 ease-in-out 
              hover:bg-smartforge-yellow hover:border 
              hover:shadow-lg hover:shadow-orange-500/50"
            >   
            <Image
              aria-hidden
              src={OptionMenuPicture[index]}
              alt="fileicon"
              width={40}
              height={40}
              className="filter invert"
            />
            {option}
              
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center justify-center w-[85%]">
          {children}
      </div>
    </div>
  );
}