// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Main Footer Content */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Gyanpedia</p>
          <p className="text-sm mt-2">
            Your digital learning platform for students
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="/about" className="hover:underline text-sm">
            About
          </a>
          <a href="/contact" className="hover:underline text-sm">
            Contact
          </a>
          <a href="/privacy-policy" className="hover:underline text-sm">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline text-sm">
            Terms of Service
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs mt-4">
          <p>
            &copy; {new Date().getFullYear()} Gyanpedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
