import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-green-500 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2023 H4ck3r Portfolio. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            FB
          </Link>
          <Link
            href="https://facebook.com/page"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            FB Page
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
