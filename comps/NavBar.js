import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { useRouter } from "next/router";

const menu = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Work", path: "/work" },
  { title: "Vlog", path: "/vlog" },
  { title: "Contact", path: "/contact" },
];

const NavBar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {menu.map((item, index) => {
        return (
          <Link key={index} href={item.path}>
            <a
              className={`${styles.link} ${
                router.pathname === item.path ? styles.linkActive : null
              }`}
            >
              {item.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
