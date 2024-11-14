import Header from "./Components/header";
import Main from "./Components/main";
import Footer from "./Components/footer";
import { useState } from "react";
export default function App() {
  const [IsScroll, setIsScroll] = useState(true);
  const scrollHandle = (event) => {
    setIsScroll(event.currentTarget.scrollTop > 0 ? false : true);
  };




  return (
    <>
      <div onScroll={scrollHandle} className=" rootBody bg-[#F2F2F2] dark:bg-d-color  relative overflow-x-hidden overflow-y-auto w-screen h-screen">
        <Header isScroll={IsScroll} />
        <Main />
        <Footer />
      </div>
      <div className="absolute bottom-0 ml-2 mb-2  text-2xl text-white font-bold">
        <span className="md:hidden sm:visible">sm</span>
        <span className="hidden lg:hidden md:block">md</span>
        <span className="hidden xl:hidden lg:block">lg</span>
        <span className="hidden 2xl:hidden xl:block">xl</span>
        <span className="hidden 2xl:block">2xl</span>
      </div>
    </>
  );
}
