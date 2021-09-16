import { Menu } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "../public/hamburger.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import styles from "../styles/Menu.module.css";

function MyDropdown() {
  return (
    <>
      <div className={styles.container}>
        <Menu>
          <Menu.Button className={styles.menu}>
            <MenuIcon />
          </Menu.Button>
          <Menu.Items className={styles.menuItems}>
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a id={styles.item} className={`${active}`}>
                    Home
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/about">
                  <a id={styles.item} className={`${active}`}>
                    About
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/work">
                  <a id={styles.item} className={`${active}`}>
                    Work
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/contact">
                  <a id={styles.item} className={`${active}`}>
                    Contact
                  </a>
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}

export default MyDropdown;
