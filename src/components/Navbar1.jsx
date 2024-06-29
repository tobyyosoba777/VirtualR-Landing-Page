import logo from '../assets/logo.png'
import { navItems } from '../constants';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar1 = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (
    <div>
        <nav className="sticky top-0"></nav>
      
    </div>
  );
}

export default Navbar1;
