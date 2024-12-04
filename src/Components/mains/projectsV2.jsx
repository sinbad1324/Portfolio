import en from "../../data/lang/en/lang.json";
import { getCurrentLang } from '../../data/getCurrentLang'
import { useLangContext } from '../../hooks/useLangContext'

// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { Line } from "../line";
import { Circle } from "../Icons/circle";
import { Triangle } from "../Icons/triangle";
import { Carre } from "../Icons/carre"
// eslint-disable-next-line no-unused-vars
function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  let randomColor = randomNumber.toString(16);
  return `#${randomColor.padStart(6, 0)}`;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//import { ArrowRight } from "@radix-ui/react-icons"


const Images = [
  Circle,
  Carre,
  Triangle

];
const navEN = en.Header.nav;

let leftCount = 0;
let rightCoun = 0;
const maxForms = 24;
const getRandomPos = (parentSize) => {
  if (Math.random() * 1 <= .5 && leftCount < maxForms / 2) {
    return { left: getRandomArbitrary(5, (parentSize.width / 4) - 50) }
  }
  if (rightCoun < maxForms / 2) {
    return { right: getRandomArbitrary(5, (parentSize.width / 4) - 50) }
  }
  getRandomPos(parentSize)
}

// eslint-disable-next-line no-unused-vars
const CreateForm = ({ ContainerRef, className }) => {
  if (!ContainerRef.current) {
    return;
  }

  const RandomForm = Images[Math.floor(Math.random() * Images.length)];
  const color = generateRandomColor()

  let style = {
    fill: color,
    stroke: color,
    strokeWidth: "0px"
  }
  if (Math.random() * 1 <= .5) {
    style = {
      fill: "none",
      stroke: color,
      strokeWidth: "1px"
    }
  }

  const parentSize = ContainerRef.current.getBoundingClientRect();


  return (
    <div
      className={className}
      style={{ position: "absolute", ...getRandomPos(parentSize), top: getRandomArbitrary(0, parentSize.height - 50) + "px" }}>
      <RandomForm
        style={{ width: "100%", height: "100%", ...style }}
        fill={style.fill}
        stroke={style.stroke}
        strokeWidth={style.strokeWidth}
      />
    </div>
  );
};

// eslint-disable-next-line no-unused-vars
const BlockEle = () => {
  return (
    <div className="group even:dark:text-d-blue-11  even:text-l-blue-11 md:even:ml-36  md:w-[50%] max-w-[800px] w-[95%] h-[95vw] md:h-[50vw] max-h-[500px] bg-[url('https://www.lecomptoirweb.fr/wp-content/uploads/2020/06/d%C3%A9co-bois-1.jpg')] bg-center bg-cover flex justify-end items-end pr-24 pb-24">
      <div className="flex flex-col justify-between items-end gap-2 w-fit h-fit ">
        <h2 className="text-clamp font-extrabold">Project studios maxi</h2>
        <h3 className="text-clamp-1 italic">ewqdqwdqdqwdqwqwd</h3>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { type: "tween", duration: 0.1 },
          }}
          whileTap={{
            scale: 0.8,
            transition: { type: "tween", duration: 0.1 },
          }}
          className="flex flex-row items-center "
        >
          <motion.button className="text-lg font-bold rounded-md bg-gradient-to-r dark:group-even:from-d-blue-5 dark:group-even:to-l-blue-10 group-even:from-d-blue-5 group-even:to-l-blue-7  text-white dark:from-d-vert-5 from-l-vert-10 to-l-vert-5  dark:to-d-vert-10 p-2 pl-5 pr-5">
            Got to see
          </motion.button>
          <GoArrowRight className="  dark:text-d-vert-12  text-l-vert-12  dark:group-even:text-d-blue-12 group-even:text-l-blue-12 block size-8" />
        </motion.div>
      </div>
    </div>
  );
};

export const ProjectsWeb = () => {
  const FormsContainer = useRef()
    const CurrentContextLang = useLangContext();
    const currentLang = getCurrentLang(CurrentContextLang.Lang);
    const NavList = currentLang.Header.nav;
  return (
    <div className=" relative group w-full h-full row-start-4 row-end-5 flex-col ">
      <div className=" absolute  group-hover:blur-sm blur-none top-0 left-0 w-full h-full  hidden md:block  overflow-hidden ">
        <div ref={FormsContainer} className="  relative top-0 left-0 w-full h-full ">
          {Array.from({ length: 25 }, (_, i) => {
            return <CreateForm className="w-16 h-16 hover:scale-110 cursor-pointer" ContainerRef={FormsContainer} key={i} />;
          })}
        </div>
      </div>
      <div className=" relative z-20 bg-transparent felx flex-col  w-full h-full text-l-blue-12 dark:text-d-blue-12">
        <div className="w-full h-fit flex flex-row justify-center items-center md:justify-start">
          <div
            id={navEN[3]}
            className=" ml-5 hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
          >
            {NavList[3]}.
          </div>
        </div>

        <div className=" relative w-full h-full flex flex-col justify-center items-center gap-10  text-l-vert-11 dark:text-d-vert-11">
          <BlockEle />
          <BlockEle />
          <BlockEle />
        </div>
      </div>

      <div className="mt-5">
        <Line />
      </div>
    </div>
  );
};
