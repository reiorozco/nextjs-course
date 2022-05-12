import React from "react";

import styles from "./meetUpDetail.module.css";

function MeetUpDetail({ image, title, address, description }) {
  return (
    <section className={styles.detail}>
      <img src={image} alt="details meetup" />

      <h1>{title}</h1>

      <address>{address}</address>

      <p>{description}</p>
    </section>
  );
}

export default MeetUpDetail;
