import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-8 animate-pulse">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl mb-8 text-center">
        Explore my world of code, projects, and digital adventures.
      </p>
      <div className="flex space-x-4">
        <Link
          href="/about"
          className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded"
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded"
        >
          My Projects
        </Link>
      </div>
    </div>
  );
}
