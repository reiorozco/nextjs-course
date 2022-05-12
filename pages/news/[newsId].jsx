// our-domain.com/news/details

import React from "react";
import { useRouter } from "next/router";

function DetailPage(props) {
  const router = useRouter();
  console.log(router);

  const { newsId } = router.query;

  return (
    <div>
      <h1>The Details Page</h1>
      <h3>You are in: {newsId}</h3>
    </div>
  );
}

export default DetailPage;
