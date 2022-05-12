import React from "react";
import Link from "next/link";

import styles from "./mainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>All Meetups</a>
            </Link>
          </li>

          <li>
            <Link href="/new-meetup">
              <a>Add New Meetup</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
