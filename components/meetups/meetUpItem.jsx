import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Card from "../ui/card";
import styles from "./meetUpItem.module.css";

function MeetUpItem({ id, image, title, address }) {
  const router = useRouter();

  const myLoader = ({ src }) => {
    return image;
  };

  const showDetailsHandler = async () => {
    await router.push(`/${id}`);
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image
            loader={myLoader}
            src={image}
            alt={title}
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>

        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>

        <div className={styles.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
