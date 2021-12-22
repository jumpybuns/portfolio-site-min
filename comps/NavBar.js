import React from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MyDropdown from '../pages/myDropdown';
import { menu } from '../pages/api/navMenu';
import { useRouter } from 'next/router';

/**
 * NAV MENU
 */

const NavBar = () => {
  const router = useRouter();

  return (
    <>
      {/* DROPDOWN MENU */}
      <MyDropdown />

      {/* MENU ITEMS LIST */}
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
        {/* SOCIAL ICONS */}
        <div className={styles.socials}>
          <Link href={'https://github.com/jumpybuns'} passHref>
            <a target='_blank'>
              <GitHubIcon />
            </a>
          </Link>
          <Link href={'mailto:ethanpiercepresents@gmail.com'} passHref>
            <a target='_blank'>
              <EmailIcon />
            </a>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/ethanpiercepresents/'}
            passHref
          >
            <a target='_blank'>
              <LinkedInIcon />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
