import React, { useState, lazy, Suspense } from "react";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";

const NavLinks = lazy(() => import("./NavLinks "));

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-center border-b-2 border-maroon-900">
      <div className="container w-[95%] h-[20%] flex items-center justify-between">
        <Logo />

        <div className="hidden md:block">
          <nav className="hi">
            <ul className="flex justify-between items-center">
              <Suspense fallback={<div>Loading NavLinks...</div>}>
                <NavLinks />
              </Suspense>
            </ul>
          </nav>
        </div>

        <div className="md:hidden">
          <button
            className="text-black-500 font-bold no-underline mr-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          {menuOpen && (
            <Suspense fallback={<div>Loading NavLinks...</div>}>
              <NavLinks setMenuOpen={setMenuOpen} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
