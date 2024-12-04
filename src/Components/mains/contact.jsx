import en from "../../data/lang/en/lang.json";
import { getCurrentLang } from '../../data/getCurrentLang'
import { useLangContext } from '../../hooks/useLangContext'
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";
import { RocketIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Line } from "../line";

const navEN = en.Header.nav;
const url = "http://localhost:3000/mail"

function AnimatedCheckIcon({className}) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#00967d"
        className={className}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4 }}
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }
export const Contact = () => {
    const CurrentContextLang = useLangContext();
    const currentLang = getCurrentLang(CurrentContextLang.Lang);
    const contactLang = currentLang.Main.Contact;
    const NavList = currentLang.Header.nav;

    const [loadingmail , setloadingmail] = useState(false);
    const [Loaded , setLoaded] = useState(false);

    const form = useRef()
    const onSubmit = (event) => {
        event.preventDefault()
        setloadingmail(true);
        // eslint-disable-next-line no-unused-vars
        const formData = new FormData(form.current);
        fetch(url, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: formData.get("name"), mail: formData.get("email"), message: formData.get("message") })
        }).then(response => response.json()).then(response => {
            console.log(response)
            if (response && response.message && response.message.Message == "OK") {
                setloadingmail(false);
                setLoaded(true)
                setTimeout(()=>{
                    setLoaded(false)
                } , 1000)
            }
        })
    }

    return (
        <>
            <div className={" fixed top-24 z-[500] left-[45%]"}>
                    <img src="./spin.svg" alt="loading spin" className={"bg-transparent size-24"+loadingmail == true ? "block" : "hidden"}/>
                    <div className={"w-40 h-14 rounded-md border  p-3 border-d-vert-8 bg-d-blue-3 flex flex-row items-center justify-between"+ Loaded==true?"block":"hidden"}>
                            <AnimatedCheckIcon className="text-d-vert-10 size-11"/>
                            <p className="text-d-vert-11">Accepted</p>
                    </div>
            </div>
            <div
                className="  w-full h-full row-start-5 row-end-6 flex  md:justify-start justify-center  items-center  md:items-start flex-col mt-16 gap-10 "
            >
                <div
                    id={navEN[4]}
                    className=" ml-5 hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
                >
                    {NavList[4]}.
                </div>

                <div className=" w-full h-fit flex flex-col md:flex-row justify-center  items-start md:justify-start text-l-blue-11 dark:text-d-vert-11 gap-10 bg-transparent p-10">
                    <div className="md:w-1/2  w-full flex flex-col justify-start items-start pl-28" >
                        <h2 className=" text-clamp-5 md:text-6xl font-bold"> {contactLang.title} </h2>
                        <p className="text-clamp-1 md:text-xl font-bold mt-4">
                            <span className="text-l-blue-12 dark:text-d-vert-12" >{contactLang.Acroche.mes1+" "}</span>{contactLang.Acroche.mes12 + " "}
                            <span className="text-l-blue-12 dark:text-d-vert-12" >   {contactLang.Acroche.mes2} </span>{contactLang.Acroche.mes22}
                        </p>
                    </div>
                    <form ref={form} className="md:w-1/2  w-full  h-full flex flex-col justify-center items-center gap-3">
                        <div className="flex flex-col md:w-1/2  w-3/4  gap-1">
                            <label htmlFor="name">Name:</label>
                            <input id="name" name="name" className="w-full h-12 border-2  border-l-blue-6 dark:border-d-blue-5 bg-l-blue-5 rounded-sm outline-none dark:bg-d-blue-2 pl-5" type="text" required placeholder="Name..." />
                        </div>
                        <div className="flex flex-col md:w-1/2  w-3/4 gap-1">
                            <label htmlFor="mail">E-Mail:</label>
                            <input id="mail" name="email" className="w-full h-12 border-2  border-l-blue-6 dark:border-d-blue-5 bg-l-blue-5 rounded-sm outline-none dark:bg-d-blue-2 pl-5" type="email" required placeholder="Mail..." />
                        </div>
                        <div className="flex flex-col md:w-1/2  w-3/4 gap-1">
                            <label htmlFor="Message">Message:</label>
                            <textarea id="Message" name="message" className="w-full min-h-20 border-2  border-l-blue-6 dark:border-d-blue-5 bg-l-blue-5 rounded-sm outline-none dark:bg-d-blue-2 p-3" required placeholder="Message..." ></textarea>
                        </div>
                        <div className="flex md:flex-row justify-between md:w-1/2 md:gap-0 gap-5  w-3/4 flex-col ">
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <EnvelopeClosedIcon className="text-l-vert-11  dark:text-d-vert-11" />
                                <a className="hover:underline text-sm md:text-md text-l-vert-12 dark:text-d-vert-12 " href="mailto:mohammad.izdpn@eduge.ch">mohammad.izdpn@eduge.ch</a>
                            </div>
                            <motion.button
                                className="flex flex-row gap-2 font-bold text-xl justify-center items-center md:text-lg text-d-vert-12 rounded-sm dark:text-l-vert-12 bg-d-blue-3 dark:bg-white p-2 hover:bg-l-blue-4 hover:text-l-blue-11 hover:dark:bg-d-blue-3 hover:dark:text-d-vert-11 "
                                type="submit"
                                whileHover={{ scale: 1.2, transition: { type: "tween", duration: .1 } }}
                                whileTap={{ scale: 0.7, transition: { type: "spring", stiffness: 50, damping: 5, duration: .1 } }}
                                onClick={onSubmit}
                            >
                                {contactLang.submit+" !"}  <RocketIcon className="size-6 text-d-vert-12 dark:text-l-vert-12 hover:dark:text-d-vert-11 " />
                            </motion.button>
                        </div>
                    </form>
                </div>
                <Line />
            </div >
        </>
    )
}

// Hit us up