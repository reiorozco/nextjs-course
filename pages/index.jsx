// our-domain.com/

import React from "react";
import Link from "next/link";

function HomePage(props) {
  return (
    <div>
      <h1>Hello, this is the Home page.</h1>

      <Link href="/news">
        <a>Go to news</a>
      </Link>
    </div>
  );
}

export default HomePage;
