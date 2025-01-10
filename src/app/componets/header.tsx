import Link from 'next/link';
import React from 'react'

function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl text-gray-900">Umama<span className="text-purple-700 font-bold">BLOG</span></span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
      <Link href={''} className="mr-5 hover:text-gray-900">Blog</Link>
      <Link href='/contact' className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <button className="inline-flex  items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-purple-500 hover:text-white font-semibold rounded text-base mt-4 md:mt-0">
      login
    </button>
  </div>
</header>

    </div>
  )
}

export default Header;
