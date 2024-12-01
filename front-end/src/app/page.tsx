import Image from "next/image";
import MainPage from "./ui/presentation";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] overflow-hidden items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start overflow-hidden">
        <MainPage />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Made by Testeh69 :</p>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Testeh69/SmartForge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={24}
            height={24}
            className="invert"
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/nicolas-orefice-ab0b5a251/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Linkedin icon"
            width={20}
            height={20}
            className="invert"
          />
          Go to Linkedin →
        </a>
      </footer>
    </div>
  );
}
