import React from "react";

import MainNavigation from "./mainNavigation";
import styles from "./layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
