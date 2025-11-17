import React from "react";
import { imageProvider } from "@/public/images/imageProvide.js";
import Image from "next/image";
import { Search } from "./Search";
import { Navbar } from "./Navbar";
import { Container } from "@/components/commoncomponents/Container";
const Header = () => {
  return (
    <Container>
      <div className="py-4 grid grid-cols-2 items-center justify-around">
        <div className="grid grid-cols-[20%80%] items-center b ">
          <Image src={imageProvider.logo} width={100} height={30} alt="logo" />
          <Search />
        </div>
        <Navbar />
      </div>
    </Container>
  );
};

export default Header;
