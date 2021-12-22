import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../styles/Menu.module.css';

const MyDropdown = () => {
  return (
    <>
      {/* DROPDOWN NAV MENU */}
      <div className={styles.container}>
        {/* MENU LIBRARY IMPORT */}
        <Menu>
          <Menu.Button className={styles.menu}>
            <MenuIcon />
          </Menu.Button>
          {/* MENU ITEMS */}
          <div className={styles.border}>
            <Menu.Items className={styles.menuItems}>
              <Menu.Item>
                {({ active }) => (
                  <Link href='/'>
                    <a id={styles.item} className={`${active}`}>
                      Home
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href='/about'>
                    <a className={`${active}`}>About</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href='/work'>
                    <a className={`${active}`}>Work</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href='/contact'>
                    <a id={styles.item2} className={`${active}`}>
                      Contact
                    </a>
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default MyDropdown;
