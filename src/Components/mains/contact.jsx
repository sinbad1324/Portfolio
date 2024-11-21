import en from "../../data/lang/en/lang.json";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";

const navEN = en.Header.nav;

export const Contact=() =>{

    return (
        <>
            <div className="w-full h-fit flex flex-row justify-center items-center md:justify-start">
                <div
                    id={navEN[4]}
                    className=" ml-5 hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
                >
                    {navEN[4]}.
                </div>

                <div className="w-full h-fit flex flex-row justify-center items-center md:justify-start text-l-blue-11 dark:text-d-vert-11">
                    <div > 
                        <h1 className="text-6xl font-bold">Avez vous besoin daide</h1>
                        <p className="text-xl font-bold"> wjebfweékjfbwàoefnwàgfbwgfb <span className="text-l-blue-12 dark:text-d-vert-12" >ewdwd</span></p>
                    </div>
                    <div>
                        <form action="">
                            <input type="text"/>
                            <input type="text"/>
                            <textarea name="" id=""></textarea>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}