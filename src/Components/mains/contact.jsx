import en from "../../data/lang/en/lang.json";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";
import { RocketIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Line } from "../line";
const navEN = en.Header.nav;

export const Contact = () => {

    return (
        <>
            <div
                className=" bg-transparent w-full h-full row-start-6 row-end-7 flex md:flex-col  md:justify-start justify-center  items-center  md:items-start flex-col-reverse mt-16 gap-10 "
            >
                <div
                    id={navEN[4]}
                    className=" ml-5 hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
                >
                    {navEN[4]}.
                </div>

                <div className="w-full h-fit flex flex-row justify-start items-start md:justify-start text-l-blue-11 dark:text-d-vert-11 gap-10 bg-transparent p-10">
                    <div className="w-1/2 flex flex-col justify-start items-start pl-28" >
                        <h1 className="text-6xl font-bold">Avez vous besoin daide</h1>
                        <p className="text-xl font-bold mt-4"> wjebfweékjfbwàoefnwàgfbwgfb <span className="text-l-blue-12 dark:text-d-vert-12" >ewdwd</span></p>
                    </div>
                    <form className="w-1/2 h-full flex flex-col justify-center items-center gap-3">
                        <div className="flex flex-col w-1/2  gap-1">
                            <label htmlFor="name">Name:</label>
                            <input id="name" className="w-full h-12 border-2  border-l-blue-6 dark:border-d-blue-5 bg-l-blue-5 rounded-sm outline-none dark:bg-d-blue-2 pl-5" type="text" required placeholder="Name..." />
                        </div>
                        <div className="flex flex-col w-1/2  gap-1">
                            <label htmlFor="mail">E-Mail:</label>
                            <input id="mail" className="w-full h-12 border-2  border-l-blue-6 dark:border-d-blue-5 bg-l-blue-5 rounded-sm outline-none dark:bg-d-blue-2 pl-5" type="email" required placeholder="Mail..." />
                        </div>
                        <div className="flex flex-col w-1/2  gap-1">
                            <label htmlFor="Message">Message:</label>
                            <textarea id="Message" className="w-full min-h-20 border-2  border-l-blue-6 dark:border-d-blue-5 bg-l-blue-5 rounded-sm outline-none dark:bg-d-blue-2 p-3" required placeholder="Message..." ></textarea>
                        </div>
                        <div className="flex flex-row justify-between w-1/2">
                            <div className="flex flex-row gap-2">
                                <EnvelopeClosedIcon className="text-l-vert-11 size-6 dark:text-d-vert-11" />
                                <a className="hover:underline  text-l-vert-12 dark:text-d-vert-12 " href="mailto:mohammad.izdpn@eduge.ch">mohammad.izdpn@eduge.ch</a>
                            </div>
                            <motion.button
                                className="flex flex-row gap-2 font-bold text-lg text-d-vert-12 rounded-sm dark:text-l-vert-12 bg-d-blue-3 dark:bg-white p-2 "
                                type="submit"
                                whileHover={{ scale: 1.2, transition: { type: "tween", duration: .1 } }}
                                whileTap={{ scale: 0.7, transition: { type: "spring", stiffness: 50, damping: 5, duration: .1 } }}

                            >
                                Hit us up <RocketIcon className="size-6 text-d-vert-12 dark:text-l-vert-12" />
                            </motion.button>
                        </div>
                    </form>
                </div>

                <Line />
            </div >
        </>
    )
}