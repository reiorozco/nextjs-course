// our-domain.com/news

import React from "react";
import Link from "next/link";

function NewsPage(props) {
  return (
    <div>
      <h1>The News Page</h1>

      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            <a>Next.js is a great framework</a>
          </Link>
        </li>

        <li>
          <Link href="/news/something-else">
            <a>Something else</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NewsPage;
