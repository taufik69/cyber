// import { Button } from "@/components/commoncomponents/Button";
import { Button } from "@/components/commoncomponents/Button";
import { Container } from "@/components/commoncomponents/Container";
import { imageProvider } from "@/public/images/imageProvide";
import Image from "next/image";
import "swiper/css";
import { ImageBox } from "./ImageBox";

export const Banner = () => {
  return (
    <div className=" bg-linear-to-t from-[#211C24] to-[#211C24] h-[66.8vh]">
      <Container>
        <div className="grid grid-cols-2 items-center py-20">
          <div className="flex flex-col  items-start">
            <h2 className="text-[25px] font-normal text-main_white">
              Pro.Beyond.
            </h2>
            <h2 className="text-[96px] font-light text-main_white">
              IPhone 14 Pro
            </h2>
            <p className="text-[16px] font-light text-main_white mb-10">
              Created to change everything for the better. For everyone
            </p>
            <Button className=" text-main_white border cursor-pointer border-main_white px-10 py-2 rounded font-medium">
              Shop Now
            </Button>
          </div>
          <div className="justify-self-center">
            <ImageBox />
          </div>
        </div>
      </Container>
    </div>
  );
};
