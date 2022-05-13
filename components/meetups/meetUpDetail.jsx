import React from "react";
import Image from "next/image";

import styles from "./meetUpDetail.module.css";

function MeetUpDetail({ image, title, address, description }) {
  const myLoader = ({ src }) => {
    return image;
  };

  return (
    <section className={styles.detail}>
      <Image
        loader={myLoader}
        src={image}
        alt={title}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
        unoptimized
      />

      <h1>{title}</h1>

      <address>{address}</address>

      <p>{description}</p>
    </section>
  );
}

export default MeetUpDetail;
