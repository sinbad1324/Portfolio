import en from "../../data/lang/en/lang.json";
import { getCurrentLang } from '../../data/getCurrentLang'
import { useLangContext } from '../../hooks/useLangContext'

import { useEffect, useState, useRef } from "react";
import { Line } from "../line";
//import pentagon from "../assets/pentagon"
const navEN = en.Header.nav;
let paragraph = "web"
// eslint-disable-next-line react/prop-types
export const About = () => {
    const params = new URLSearchParams(window.location.search).get("settings")
    if (params && params.toLowerCase() == "roblox") paragraph = "roblox"
    
    const CurrentContextLang = useLangContext();
    const currentLang = getCurrentLang(CurrentContextLang.Lang);
    const AboutLang = currentLang.Main.About;
    const NavList = currentLang.Header.nav;


    const [show, setShow] = useState(false);
    const About = useRef();
    const AboutDiv = useRef();
    useEffect(() => {
        const obs = new IntersectionObserver(
            (enteris) => {
                enteris.filter((item) => {
                    if (item.isIntersecting && item.target == About.current) {
                        setShow(true);
                    } else {
                        setShow(false);
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
        return () => {
            obs.disconnect();
        };
    }, []);

    return (
        <div className="bg-transparent w-full h-full row-start-2 row-end-3 flex flex-col justify-around items-center">
            <div
                ref={AboutDiv}
                className="  flex md:flex-row  md:justify-between justify-center  items-center  md:items-start flex-col-reverse "
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
                            {NavList[1]}.

                        </div>
                    </div>
                    <div className="w-full lg:text-xl text-lg font-light text-l-blue-12 dark:text-d-blue-12 h-fit flex flex-col  items-start justify-center lg:gap-5 gap-3 ">

                        {AboutLang.p[paragraph].map((v, i) => {
                            console.log(paragraph)
                            return (
                                <div key={i} className="w-full h-fit overflow-hidden max-h-[200px] ">
                                    <p
                                        className={`relative ${show == true ? "animate-YApear" : "animate-Ydispear"
                                            }`}
                                    >
                                        {v}
                                    </p>
                                </div>
                            )
                        })}


                    </div>
                    <div className="w-full md:pr-8  h-fit  flex items-center justify-center  md:items-end  md:justify-end">
                        <a
                            id={navEN[1]}
                            className="active:animate-click hover:scale-110 hover:rounded-xl ease-in duration-75  transition-all  cursor-pointer w-24 h-12 flex justify-center items-center rounded-lg  bg-l-blue-7 dark:bg-d-blue-4 text-xl text-l-blue-12 dark:text-d-blue-12 border  border-d-blue-3 dark:border-d-blue-10 "
                        >
                            {AboutLang.CV}
                        </a>
                    </div>
                </div>
            </div>
            <Line />
        </div>
    )
}