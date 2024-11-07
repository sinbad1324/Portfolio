import { PlusIcon } from "@radix-ui/react-icons"
import en from "../../data/lang/en/lang.json";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const navEN = en.Header.nav;

export const Skills = () => {

    return (
        <div className=" bg-transparent w-full h-full row-start-4 row-end-5 flex md:flex-row-reverse  md:justify-between justify-center  items-center  md:items-start flex-col-reverse ">

            <div className="w-full h-fit flex flex-row justify-center items-center md:justify-start">
                <div

                    className=" hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
                >
                    {navEN[2]}.
                </div>
            </div>

            <div className="m-4 w-full h-full grid grid-cols-3 grid-rows-3 justify-center items-center">

                {
                    [1].map((item) => {
                        return (
                            ////+ "row-start-" + (index + 1) + "col-start-" + (index + 2)
                            <div key={item} className={"border-2 relative  border-l-vert-8 dark:border-d-vert-8 w-[320px] h-[200px]"} >
                                <PlusIcon className="  absolute -top-[.94rem] -left-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
                                <PlusIcon className="  absolute -top-[.94rem]  -right-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
                                <PlusIcon className="  absolute -bottom-[.94rem]  -right-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
                                <PlusIcon className="  absolute -bottom-[.94rem]  -left-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
                                <div className="absolute top-0 left-0 w-full h-full bg-transparent flex flex-col justify-around items-center">
                                    <h2 className="text-l-vert-11 dark:text-d-vert-11 text-5xl  font-extrabold  " >React</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="size-12" viewBox="0 0 48 48">
                                        <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                    </svg>
                                </div>
                                <div className="absolute top-5 left-8 w-[80%] h-[80%] rounded-xl  flex flex-col justify-center items-center">
                                    <p className=" break-all overflow-hidden absolute top-0 left-0 text-xl  w-full h-full text-l-vert-12 dark:text-d-vert-12">
                                        weflwefknwekfnwekfnkwenfkewnfkwenfkwenfkewnfkewnfkwnfkewnfkewnfkewnfkwenfkewnfkwenfkwenfkwenf12j1e13
                                        weflwefknwekfnwekfnkwenfkewnfkwenfkwenfkewnfkewnfkwnfkewnfkewnfkewnfkwenfkewnfkwenfkwenfkwenf12j1e13
                                    </p>
                                    <div className="w-[170px] h-[170px] blur-lg rounded-full bg-l-blue-6 dark:bg-d-blue-6  ">

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}