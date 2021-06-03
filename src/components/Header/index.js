import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-around bg-purple-400">
      <div>
        <Link href="https://google.com.br">New link</Link>
        <Link href="https://google.com.br">New link</Link>
        <Link href="https://google.com.br">New link</Link>
        <Link href="https://google.com.br">New link</Link>
      </div>
      <div>
        <Link href="https://google.com.br">New link</Link>
        <Link href="https://google.com.br">New link</Link>
        <Link href="https://google.com.br">New link</Link>
        <Link href="https://google.com.br">New link</Link>
      </div>
    </header>
  );
};

export default Header;
