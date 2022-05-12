import React from "react";

import Card from "../ui/card";
import styles from "./meetUpItem.module.css";

function MeetUpItem(props) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>

        <div className={styles.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
