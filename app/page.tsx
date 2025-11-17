import { Banner } from "@/components/Home/Banner/Banner";
import { Categories } from "@/components/Home/Categories/Categories";
import Header from "@/components/Home/Header/Header";
import { HotItem } from "@/components/Home/HotItem/HotItem";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Banner />
      <HotItem />
    </div>
  );
}
