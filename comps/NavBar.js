import React, { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/vlog">
        <a>Vlog</a>
      </Link>
      <Link href="/resume">
        <a>Resume</a>
      </Link>
    </nav>
  );
};

export default NavBar;
