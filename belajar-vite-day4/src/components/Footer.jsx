const Footer = () => {
  return (
    <div>
      <footer id="footer" className="bg-blue-500 text-white py-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-bold">&copy; 2025 TeamOne. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="font-bold hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="font-bold hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="font-bold hover:text-white">
              Contact
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="font-bold">
              Facebook
            </a>
            <a href="#" className="font-bold">
              Twitter
            </a>
            <a href="#" className="font-bold">
              Instagram
            </a>
            <a href="#" className="font-bold">
              Linkedin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
