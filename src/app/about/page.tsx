import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside">
          <li>
            B.S. in Information Technology, Polytechnic University of the
            Philippines Lopez Campus, 2023
          </li>
          {/* <li>M.S. in Cybersecurity, Digital Fortress Institute, 2022</li> */}
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc list-inside">
          <li>
            Technology Developer & Intern Supervisor & Team Leader, Trifecta
            Soulutions Inc., 2023-Present
          </li>
          <li>
            Developer, Develop &quot;Online Registration System&quot; for 17th
            Phillipine Global Consultation on Child Welfare Services held on
            October 10-12, 2023 at Hilton Manila, Newport Boulevard, Pasay City
            managed by National Authority for Child Care, 2023
          </li>
          <li>Full-Stack Developer Intern, PUP Lopez, 2023</li>
          <li>Developer, Freelance, 2021-Present</li>
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
