import en from "../../data/lang/en/lang.json";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Line } from "../line";
import { div, select } from "framer-motion/client";
import { getCurrentLang } from '../../data/getCurrentLang'
import { useLangContext } from '../../hooks/useLangContext'
//import pentagon from "../assets/pentagon"
const navEN = en.Header.nav;
const allProjects = [
    "VFX",
    "LUA",
    "Blender",
    "UI/UX"
];
const videos = [
    "AnatomicExplosionFunk.mp4",
    "Attack2.mp4",
    "Attacke3.mp4"
]
export const Project = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const skills = useRef();
    const CurrentContextLang = useLangContext();
    const currentLang = getCurrentLang(CurrentContextLang.Lang);
    const NavList = currentLang.Header.nav;
    const projectLang = currentLang.Main.Projectv1;
    const [currentProjects , setCurrentProjects] = useState("Lua");
    const [currenVideo , setCurrentVideo] = useState(1)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showBtns, setShowBtns] = useState();
    const buttonVariants = {
        hidden: { scale: 0, rotate: 300 },
        visible: { scale: 1, rotate: 0 },
        selected: { scale: 1.2, rotate: 0 ,transition: { duration: .1 }},

    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // if (IsRenderRef2.current) return;
        //     IsRenderRef2.current = true;
        const obs = new IntersectionObserver(
            (enteris) => {
                enteris.filter((item) => {


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

        if (skills.current != undefined) {
            obs.observe(skills.current);
        }
        return () => {
            obs.disconnect();
        };
    }, []);

    return (
        <div className="w-full h-auto row-start-4 row-end-5 flex-col justify-between  ">
            <div className="  flex md:flex-row-reverse  md:justify-between justify-center h-full items-center  md:items-start flex-col-reverse ">
                <div className="md:w-[50vw] w-full flex  justify-center  items-center ">
                    <div className="ml-5 h-auto md:rounded-xl rounded-md max-h-[700px]  w-full   md:mt-0  mr-10 mt-10 bg-transparent  shadow-md ">
                       {
                        videos.map((src , index)=>{
                            return  <video style={{display:videos[currenVideo-1] == src ? "block":"none"}} key={"VideoVFX"+index} className="rounded-lg w-full h-full"  autoPlay muted controls >
                            <source
                                src={src}
                                type="video/mp4"
                            />
                        </video>
                        })
                       }
                    </div>
                </div>
                <div className="md:h-auto  md:max-h-[500px] md:w-[50vw]  w-full max-h-[1000px]    bg-transparent pr-6 p-4 overflow-hidden   rounded-lg  flex flex-col justify-start items-start lg:gap-6  gap-2   ">
                    <div className="w-full h-fit flex flex-row justify-center items-center md:justify-start">
                        <div
                            ref={skills}
                            id={navEN[3]}
                            className=" hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
                        >
                            {NavList[3]}.
                        </div>
                    </div>
                    <div className="w-full h-fit">
                        <ul className="w-full flex flex-row md:justify-start justify-start items-center gap-6">
                            {allProjects.map((item , index) => {
                                return (
                                    <li key={index}>
                                        <motion.button
                                            className="hover:rounded-full   cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-l-vert-5 hover:bg-l-vert-7 dark:bg-d-vert-3 dark:hover:bg-d-vert-4 text-[.5rem] font-bold uppercase text-l-vert-12 dark:text-d-vert-12 border border-d-vert-3 dark:border-d-vert-10"
                                            initial="hidden"
                                            animate={showBtns ? currentProjects == item ? "selected" :"visible" : "hidden" }
                                            variants={buttonVariants}
                                            transition={{
                                                type: "spring",
                                                stiffness: 50,
                                                damping: 5,
                                            }}
                                            whileHover={{ scale: 1.1, transition: { duration: .05 } }}
                                            whileTap={{ scale: 0.8, transition: { duration: .1 } }}
                                            onClick={()=>{setCurrentProjects(item)}}
                                        >
                                            {item}
                                        </motion.button>
                                    </li>
                                );
                            })}
                        </ul>
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
                                            whileHover={{ scale: 1.1, transition: { duration: .05 } }}
                                            whileTap={{ scale: 0.8, transition: { duration: .1 } }}
                                            onClick={()=>{setCurrentVideo(number)}}
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
                            <p className="  relative  ">
                                {projectLang.texts[currenVideo-1]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Line />
            </div>
        </div>
    )
}