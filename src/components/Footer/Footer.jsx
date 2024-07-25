import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  // Get current year for dynamic copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-y">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <Link to="/" className="flex items-center">
          <img
            src="https://i.ibb.co/SRtr0rk/J.png"
            className="mr-3 h-16"
            alt="Logo of your blog"
          />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-4">
              <NavLink
                to="/"
                activeClassName="text-orange-700"
                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:underline"
              >
                Home
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/about"
                activeClassName="text-orange-700"
                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:underline"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="text-orange-700"
                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:underline"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-4">
              <a
                href="https://github.com/JaydeepDebnath"
                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="mb-4">
              <NavLink
                to="/discord"
                activeClassName="text-orange-700"
                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:underline"
              >
                Discord
              </NavLink>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jaydeep-debnath-7aaa83277/"
                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-4">
              <Link to="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center">
        © {currentYear}{' '}
        <a href="https://yourwebsite.com/" className="hover:underline">
          Jaydeep Debnath
        </a>
        . All Rights Reserved.
      </span>
      <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
        <Link to="#" className="text-gray-500 hover:text-gray-900">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Facebook page</span>
        </Link>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
