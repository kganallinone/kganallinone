import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside">
          <li>B.S. in Computer Science, Hacker University, 2020</li>
          <li>M.S. in Cybersecurity, Digital Fortress Institute, 2022</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc list-inside">
          <li>Senior Security Engineer, CyberGuard Inc., 2022-Present</li>
          <li>Software Developer, CodeCraft Solutions, 2020-2022</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Penetration Testing</li>
          <li>Network Security</li>
          <li>Web Development</li>
          <li>Python, JavaScript, C++</li>
        </ul>
      </div>
      <Link
        href="/resume.pdf"
        className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded inline-block"
      >
        Download Resume
      </Link>
    </div>
  );
}
