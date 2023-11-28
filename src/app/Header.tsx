import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        borderBottom: "1px solid black",
      }}
    >
      <h1>
        <Link href="/">Next.js13 Blog</Link>
      </h1>
      <div>
        <nav>
          <Link href="/articles/new">記事を書く</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
