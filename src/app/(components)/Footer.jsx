import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-black py-10 px-10 font-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4">About Us</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Customer Service</h2>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-emerald-300 duration-200 ease-in transition">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-emerald-300 duration-200 ease-in transition">Returns</Link></li>
            <li><Link href="#" className="hover:text-emerald-300 duration-200 ease-in transition">Shipping</Link></li>
            <li><Link href="#" className=" hover:text-emerald-300 duration-200 ease-in transition">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li><Link href="#" className="hover:text-emerald-300 duration-200 ease-in transition">Facebook</Link></li>
            <li><Link href="#" className="hover:text-emerald-300 duration-200 ease-in transition">Twitter</Link></li>
            <li><Link href="#" className="hover:text-emerald-300 duration-200 ease-in transition">Instagram</Link></li>
            <li><Link href="#" className="hover:text-emerald-300 duration-200 ease-in transition">LinkedIn</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Subscribe</h2>
          <form>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 mb-4 text-gray-900"
            />
            <button type="submit" className="bg-emerald-400 hover:bg-emerald-600 text-white w-full py-2">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        &copy; 2024 Your E-commerce Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
