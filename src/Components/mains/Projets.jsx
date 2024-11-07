import en from "../../data/lang/en/lang.json";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

//import pentagon from "../assets/pentagon"
const navEN = en.Header.nav;


export const Project = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const skills = useRef();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showBtns, setShowBtns] = useState();
    const buttonVariants = {
        hidden: { scale: 0, rotate: 300 },
        visible: { scale: 1, rotate: 0 },
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
                        id={navEN[3]}
                        className=" hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
                    >
                        {navEN[3]}.
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
                                        whileHover={{ scale: 1.1, transition: { duration: .05 } }}
                                        whileTap={{ scale: 0.8, transition: { duration: .1 } }}
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
    )
}