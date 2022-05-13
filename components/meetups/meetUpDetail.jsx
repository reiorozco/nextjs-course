import React from "react";
import Image from "next/image";

import styles from "./meetUpDetail.module.css";

function MeetUpDetail({ image, title, address, description }) {
  return (
    <section className={styles.detail}>
      <Image src={image} alt="details meetup" />

      <h1>{title}</h1>

      <address>{address}</address>

      <p>{description}</p>
    </section>
  );
}

export default MeetUpDetail;
