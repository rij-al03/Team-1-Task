const Footer = () => {  
  return (     
    <div>       
      <footer id="footer" className="bg-blue-500 text-white py-12 text-center">         
        <div className="max-w-6xl mx-auto">           
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-4">About Us</h4>
              <p className="text-sm">
                TeamOne is a leading provider of innovative solutions, specializing in technology and design. We aim to provide high-quality products and services to help businesses grow.
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="font-bold hover:text-white">Facebook</a>
                <a href="#" className="font-bold hover:text-white">Twitter</a>
                <a href="#" className="font-bold hover:text-white">Instagram</a>
                <a href="#" className="font-bold hover:text-white">LinkedIn</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4">Stay Updated</h4>
              <p className="text-sm mb-4">Subscribe to our newsletter and get the latest updates directly to your inbox.</p>
              <div className="flex justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 text-gray-800 rounded-l-md"
                />
                <button className="bg-blue-600 px-4 py-2 text-white rounded-r-md hover:bg-blue-700">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-2 border-white pt-4">
            <p className="font-bold">&copy; 2025 TeamOne. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="font-bold">YouTube</a>
              <a href="#" className="font-bold">GitHub</a>
              <a href="#" className="font-bold">Pinterest</a>
            </div>
          </div>
        </div>       
      </footer>     
    </div>   
  ); 
};  

export default Footer;
