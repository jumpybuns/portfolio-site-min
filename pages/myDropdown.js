import { Menu } from "@headlessui/react";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "../styles/Menu.module.css";

function MyDropdown() {
  return (
    <>
      <div className={styles.container}>
        <Menu>
          <Menu.Button>
            <MenuIcon />
          </Menu.Button>
          <Menu.Items className={styles.menuItems}>
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a
                    id={styles.item}
                    className={`${active && "bg-almond-500"}`}
                  >
                    Home
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/about">
                  <a id={styles.item} className={`${active && "bg-blue-500"}`}>
                    About
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/work">
                  <a id={styles.item} className={`${active && "bg-blue-500"}`}>
                    Work
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/contact">
                  <a id={styles.item} className={`${active && "bg-blue-500"}`}>
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
