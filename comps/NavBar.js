import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>Ethan Pierce</h2>
      </div>
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
