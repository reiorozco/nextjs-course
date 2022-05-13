import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Card from "../ui/card";
import styles from "./meetUpItem.module.css";

function MeetUpItem({ id, image, title, address }) {
  const router = useRouter();

  const showDetailsHandler = async () => {
    await router.push(`/${id}`);
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image src={image} alt={title} />
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
