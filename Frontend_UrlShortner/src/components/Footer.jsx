const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center mt-auto">
      &copy; {new Date().getFullYear()} URL Shortener. All rights reserved.
    </footer>
  );
};

export default Footer;
