import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import en from "../data/lang/en/lang.json";
//import pentagon from "../assets/pentagon"

export default function Main() {
  const textEditorRef = useRef();
  const About = useRef();
  const AboutDiv = useRef();
  const skills = useRef();
  const [show, setShow] = useState(false);
  const [showBtns, setShowBtns] = useState(false);
  const IsRenderRef = useRef(false);
  const navEN = en.Header.nav;

  const buttonVariants = {
    hidden: { scale: 0, rotate: 300 },
    visible: { scale: 1, rotate: 0 },
  };

  const NameText = "Izadpanah Mohammad";
  const KeyText = ["Web Developper", "Roblox Studio Developer"];
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (IsRenderRef.current) return;
    IsRenderRef.current = true;

    let currenText = 0;
    const toWait = 50;
    const writeLine = async () => {
      while (true) {
        let cur = KeyText[currenText];
        for (let t = 0; t < cur.length; t++) {
          textEditorRef.current.innerText = cur.substring(0, t + 1);
          await sleep(toWait);
        }

        await sleep(toWait * 10);
        for (let t = cur.length; t > 0; t--) {
          textEditorRef.current.innerText = cur.substring(0, t - 1);
          await sleep(toWait);
        }
        await sleep(toWait * 4);

        if (currenText >= KeyText.length - 1) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          currenText = 0;
        } else {
          currenText++;
        }
      }
    };
    writeLine();
  }, []);

  //Observe
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    // if (IsRenderRef2.current) return;
    //     IsRenderRef2.current = true;
    const obs = new IntersectionObserver(
      (enteris) => {
        enteris.filter((item) => {
          if (item.isIntersecting && item.target == About.current) {
            setShow(true);
          } else {
            setShow(false);
          }

          if (item.isIntersecting && item.target == skills.current) {
            setShowBtns(true);
          } else {
            setShowBtns(false);
          }
        });
      },
      {
        root: document.body,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (About.current != undefined) {
      obs.observe(About.current);
    }
    if (skills.current != undefined) {
      obs.observe(skills.current);
    }
    return () => {
      obs.disconnect();
    };
  }, []);
  return (
    <main className=" z-0 rootMain row-start-2 row-end-3 ">
      <div
        id={navEN[0]}
        className="sticky z-0 w-full h-full row-start-1 row-end-2 bg-transparent mt-1  "
      >
        <div className=" w-full h-full lg:h-28 lg:pl-56  lg:top-[40%] relative flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-10   ">
          <div className=" w-[70%]   h-auto  relative   rotate-90 flex justify-start items-start mask overflow-hidden min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px] lg:max-w-[500px] lg:max-h-[500px]  max rounded-full  ">
            <img
              className="   -rotate-90 cursor-pointer hover:blur-[2px] hover:scale-125  transition-all bg-cover bg-center bg-transparent"
              src="https://th.bing.com/th/id/OIP.Wgq_Y1ai2-c2OVM6uP7WUgAAAA?rs=1&pid=ImgDetMain"
              alt="Profile face"
            />
          </div>

          <div className="text-l-12   pl-5 md:pl-0   font-extrabold flex flex-col justify-center items-center lg:items-start gap-4 ">
            <h1 className="hover:contrast-100 md:text-6xl text-3xl  d-TextShadow text-l-blue-12  dark:text-d-blue-12">
              {NameText}
            </h1>
            <div className="h-10 flex flex-row  d-TextShadow">
              <h2
                className="md:text-5xl text-2xl   text-l-vert-11  dark:text-d-vert-12 "
                ref={textEditorRef}
              ></h2>
              <div className="md:text-5xl text-2xl text-l-blue-12 dark:text-d-blue-12 ">
                |
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={AboutDiv}
        className=" bg-transparent w-full h-full row-start-2 row-end-3 flex md:flex-row  md:justify-between justify-center  items-center  md:items-start flex-col-reverse "
      >
        <div className="md:w-[40vw] w-full flex  justify-center  items-center ">
          <div
            ref={About}
            className="h-auto md:rounded-xl rounded-md max-h-[700px]  brushmask md:w-[35vw]  w-[70vw] md:mt-0 mt-10 bg-transparent    shadow-md "
          >
            <img
              className="   object-top object-cover bg-transparent max-h-[700px] w-full "
              src="https://wallpapercave.com/wp/wp9023490.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="md:h-auto  md:max-h-[700px] md:w-[55vw]  w-full max-h-[1000px]    bg-transparent pr-6 p-4 overflow-hidden   rounded-lg  flex flex-col   justify-start items-start lg:gap-6  gap-2   ">
          <div className="w-full h-fit mb-4 flex flex-row justify-center items-center md:justify-start  ">
            <div
              id={navEN[1]}
              className=" hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
            >
              {navEN[1]}.
            </div>
          </div>

          <div className="w-full lg:text-xl text-lg font-light text-l-blue-12 dark:text-d-blue-12 h-fit flex flex-col  items-start justify-center lg:gap-5 gap-3 ">
            <div className="w-full h-fit overflow-hidden max-h-[200px] ">
              <p
                className={`relative ${
                  show == true ? "animate-YApear" : "animate-Ydispear"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi perspiciatis, expedita doloremque eos ab sequi labore
                voluptatibus dolore voluptatem. Dolores cum cupiditate optio ea
                reiciendis veniam officia maxime sunt consequatur?
              </p>
            </div>

            <div className="w-full h-fit overflow-hidden max-h-[200px] ">
              <p
                className={`relative ${
                  show == true ? "animate-YApear" : "animate-Ydispear"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi perspiciatis, expedita doloremque eos ab sequi labore
                voluptatibus dolore voluptatem. Dolores cum cupiditate optio ea
                reiciendis veniam officia maxime sunt consequatur?
              </p>
            </div>

            <div className="w-full h-fit overflow-hidden max-h-[200px] ">
              <p
                className={`relative ${
                  show == true ? "animate-YApear" : "animate-Ydispear"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi perspiciatis, expedita doloremque eos ab sequi labore
                voluptatibus dolore voluptatem. Dolores cum cupiditate optio ea
                reiciendis veniam officia maxime sunt consequatur?
              </p>
            </div>
          </div>

          <div className="w-full md:pr-8  h-fit  flex items-center justify-center  md:items-end  md:justify-end">
            <a
              id={navEN[1]}
              className="active:animate-click hover:scale-110 hover:rounded-xl ease-in duration-75  transition-all  cursor-pointer w-24 h-12 flex justify-center items-center rounded-lg  bg-l-blue-7 dark:bg-d-blue-4 text-xl text-l-blue-12 dark:text-d-blue-12 border  border-d-blue-3 dark:border-d-blue-10 "
            >
              MyCV
            </a>
          </div>
        </div>
      </div>

      <div className=" bg-transparent w-full h-full row-start-3 row-end-4 flex md:flex-row-reverse  md:justify-between justify-center  items-center  md:items-start flex-col-reverse ">
        <div className="md:w-[50vw] w-full flex  justify-center  items-center ">
          <div className="ml-5 h-auto md:rounded-xl rounded-md max-h-[700px]   w-full   md:mt-0  mr-10 mt-10 bg-transparent  shadow-md ">
            <video className="rounded-lg w-full h-full" autoPlay muted controls>
              <source
                src="https://i.gyazo.com/a67b13209d916717cd1fe5fed607e937.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="md:h-auto  md:max-h-[700px] md:w-[50vw]  w-full max-h-[1000px]    bg-transparent pr-6 p-4 overflow-hidden   rounded-lg  flex flex-col justify-start items-start lg:gap-6  gap-2   ">
          <div className="w-full h-fit flex flex-row justify-center items-center md:justify-start">
            <div
              ref={skills}
              id={navEN[2]}
              className=" hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
            >
              {navEN[2]}.
            </div>
          </div>
          <div className="w-full h-fit">
            <ul className="w-full flex flex-row md:justify-end justify-center items-center gap-6">
              {[1, 2, 3].map((number) => {
                return (
                  <li key={number}>
                    <motion.button
                      className="hover:rounded-xl   cursor-pointer w-14 h-12 flex justify-center items-center rounded-lg bg-l-blue-5 hover:bg-l-blue-7 dark:bg-d-blue-3 dark:hover:bg-d-blue-4 text-xl text-l-blue-12 dark:text-d-blue-12 border border-d-blue-3 dark:border-d-blue-10"
                      initial="hidden"
                      animate={showBtns ? "visible" : "hidden"}
                      variants={buttonVariants}
                      transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 5,     
                      }}
                      whileHover={{  scale: 1.1 , transition: { duration: .05 }}}
                      whileTap={{ scale: 0.8 , transition: { duration: .1 } }}
                    >
                      P.{number}
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full lg:text-xl text-lg font-light text-l-blue-12 dark:text-d-blue-12 h-fit flex flex-col  items-start justify-center lg:gap-5 gap-3 ">
            <div className="w-full h-fit overflow-hidden max-h-[200px] ">
              <p className="  relative active:animate-YApear ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi perspiciatis, expedita doloremque eos ab sequi labore
                voluptatibus dolore voluptatem. Dolores cum cupiditate optio ea
                reiciendis veniam officia maxime sunt consequatur?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
