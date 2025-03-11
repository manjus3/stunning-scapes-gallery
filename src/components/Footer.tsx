
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">StunningScapes</h3>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Capturing the breathtaking beauty of landscapes from around the world, 
              available as fine art prints for your home or office.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-medium mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio/mountains" className="text-sm hover:underline">Mountains</Link>
              </li>
              <li>
                <Link to="/portfolio/seascapes" className="text-sm hover:underline">Seascapes</Link>
              </li>
              <li>
                <Link to="/portfolio/rivers" className="text-sm hover:underline">Rivers</Link>
              </li>
              <li>
                <Link to="/portfolio/intimate" className="text-sm hover:underline">Intimate</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:underline">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-medium mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Subscribe to receive updates on new collections and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} StunningScapes. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Shipping
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
