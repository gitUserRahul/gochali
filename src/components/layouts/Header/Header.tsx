import React from "react";
import Container from "@/Container";
import Link from "next/link";

const Header = () => {
  return (
    //main navbar

    <>
      <header>
        <Container>
          <Link href="/">Logo</Link>
        </Container>
      </header>
    </>
  );
};

export default Header;
