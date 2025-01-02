import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex space-x-8">
      {/* Link to Guides page */}
      <Link
        href="/guides"
        className="text-lg font-medium hover:text-blue-500 transition-all"
      >
        Guides
      </Link>

      {/* Link to Syllabi page */}
      <Link
        href="/syllabi"
        className="text-lg font-medium hover:text-blue-500 transition-all"
      >
        Syllabi
      </Link>

      {/* Link to Old Questions page */}
      <Link
        href="/old-questions"
        className="text-lg font-medium hover:text-blue-500 transition-all"
      >
        Old Questions
      </Link>

      {/* Optionally, you can add more links like About, Contact, etc. */}
      {/* <Link href="/about" className="text-lg font-medium hover:text-blue-500 transition-all">
        About
      </Link>
      <Link href="/contact" className="text-lg font-medium hover:text-blue-500 transition-all">
        Contact
      </Link> */}
    </div>
  );
};

export default NavBar;
