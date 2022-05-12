import React from "react";

import MeetupItem from "./meetUpItem";
import styles from "./meetUpList.module.css";

function MeetUpList({ meetUps }) {
  return (
    <ul className={styles.list}>
      {meetUps.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetUpList;
