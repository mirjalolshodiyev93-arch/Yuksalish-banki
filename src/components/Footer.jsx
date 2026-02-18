export default function Footer() {
  return (
    <footer className= " text-gray-700">
      <div className=" bg-[#081726] max-w-[1400px] m-auto   mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Left Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-yellow-400 rounded-md flex items-center justify-center font-bold text-black">
                A
              </div>
              <h2 className="font-semibold text-lg text-black">
                APEX WORKSPACE
              </h2>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Creating the most advanced workspaces for the creators,
              engineers, and dreamers of the modern era.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
                🌐
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
                🔗
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
                💬
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-black font-semibold mb-5">SHOP</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-black cursor-pointer">Desks</li>
              <li className="hover:text-black cursor-pointer">Chairs</li>
              <li className="hover:text-black cursor-pointer">Storage</li>
              <li className="hover:text-black cursor-pointer">Accessories</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-black font-semibold mb-5">SUPPORT</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-black cursor-pointer">Warranty Info</li>
              <li className="hover:text-black cursor-pointer">Shipping & Returns</li>
              <li className="hover:text-black cursor-pointer">Installation Guide</li>
              <li className="hover:text-black cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-black font-semibold mb-5">NEWSLETTER</h3>
            <p className="text-sm text-gray-500 mb-4">
              Stay updated with our latest releases.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 px-4 rounded-r-md hover:bg-yellow-500 transition">
                ➤
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-14 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-400">
          <p>© 2024 Apex Workspace Inc. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-black cursor-pointer">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer">Terms of Service</span>
            <span className="hover:text-black cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
