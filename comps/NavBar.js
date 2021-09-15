import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MyDropdown from "../pages/MyDropdown";
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
    <>
      <MyDropdown />
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

        <div className={styles.socials}>
          <Link href={"https://github.com/jumpybuns"} passHref>
            <a target="_blank">
              <GitHubIcon />
            </a>
          </Link>
          <Link href={"mailto:ethanpiercepresents@gmail.com"} passHref>
            <a target="_blank">
              <EmailIcon />
            </a>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ethanpiercepresents/"}
            passHref
          >
            <a target="_blank">
              <LinkedInIcon />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
