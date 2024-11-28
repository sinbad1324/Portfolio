import { PlusIcon } from "@radix-ui/react-icons"
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";
// eslint-disable-next-line react/prop-types
export const SkillBtns = ({ title, icon }) => {

    const Rayon = 150;
    const textTarget = useRef()
    const resqueFrames = useRef();
    useEffect(() => {
        document.body.addEventListener("mouseover", HoverHandle);
    }, [])

    function HoverHandle(event) {
        const element = textTarget.current

        const mouseX = event.clientX
        const mouseY = event.clientY
        const elementRect = element.getBoundingClientRect()

        let newPos = {
            x: mouseX - elementRect.x,
            y: mouseY - elementRect.y
        }

        if (newPos.x >= 1000 || newPos.y >= 1000) {
            newPos = {
                x: 2000,
                y: 2000
            }
        }

        if (resqueFrames.current) {
            cancelAnimationFrame(resqueFrames.current)
        }
        resqueFrames.current = requestAnimationFrame(() => {
            element.style.WebkitMaskImage = `radial-gradient(${Rayon}px at ${newPos.x}px ${newPos.y}px, white, transparent)`
            element.style.maskImage = `radial-gradient(${Rayon}px  at ${newPos.x}px ${newPos.y}px, white, transparent)`
            element.innerText = melanger()
        })



    }

    function melanger() {
        let text = "12345678990qwetzuioiplkjhgfddasyxcvbnnmQWERTZUIOPLKJHGFDDASrtzuioiplkjtzuioiplkjhgfddasyxcvbnnmQWERTZUIOPLKJHGFDDAShgfddasyxcvbnnmQWERTZUIOPtzuioiplkjhgfddasyxcvbnnmQWERTZUgfddasyxcvbnnmQWERTZUIOPtzuioiplkjhgfddasyxcvbnnmQWERTZUgfddasyxcvbnnmQWERTZUIOPtzuioiplkjhgfddasyxcvbnnmQWERTZUIOPLKJHGFDDASLKJHGFDDASYXCVVBNM"
        let array = text.split("");

        for (let i = 0; i < array.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }

        return array.join("")
    }
    return (
        <a
            href=""
            className={`border-2 relative  cursor-pointer border-l-vert-10 dark:border-d-vert-10 h-[20vw] w-[30vw] min-w-[120px] min-h-[30px]  max-w-[320px] max-h-[220px]`} >
            <PlusIcon className="  absolute -top-[.94rem] -left-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
            <PlusIcon className="  absolute -top-[.94rem]  -right-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
            <PlusIcon className="  absolute -bottom-[.94rem]  -right-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
            <PlusIcon className="  absolute -bottom-[.94rem]  -left-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
            <div className="group h-full w-full flex justify-start md:justify-center items-center" >

                <div className=" absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2   z-40 w-1/2 h-1/2 bg-transparent gap-5 flex flex-col justify-center items-center">
                    <h2 className="text-l-vert-11 z-20 dark:text-d-vert-11 flex justify-center items-center w-full   text-clamp-1  font-extrabold  " >{title}</h2>
                    <img src={icon} alt={title} className="w-[30%] h-auto min-w-4 max-w-12 z-20 mt-1" />

                    <div className={" group-hover:opacity-100 opacity-0 absolute  left-0  w-full h-[200%] max-h-[150px]  rounded-full blur-sm bg-l-blue-3/[.8] dark:bg-d-blue-3/[.8]"} >

                    </div>
                </div>
                <div
                    className=" pointer-events-none absolute  top-[5%] left-[5%] w-[90%] h-[90%]   bg-transparent rounded-xl  flex flex-col justify-center items-center">
                    <p ref={textTarget} style={{
                        WebkitMaskImage: `radial-gradient(${Rayon}px at2000px 2000px, white, transparent)`,
                        maskImage: `radial-gradient(${Rayon}px at  200px 2000px, white, transparent)`
                    }}

                        className="rounded-xl group-hover:opacity-100  bg-gradient-to-r from-l-vert-9 dark:from-d-vert-9 dark:to-d-blue-9  inset-0 to-l-blue-9 hover:opacity-0  backdrop-blur-xl transition duration-500 mix-blend-overlay break-all overflow-hidden absolute top-0 left-0 text-md   w-full h-full  text-l-vert-12 dark:text-d-vert-12">
                        weflwefknwekfnwekfnkwenfkewnfkwenfkwenfkewnfkewnfkwnfkewnfkewnfkewnfkwenfkewnfkwenfkwenfkwenf12j1e13
                        weflwefknwekfnwekfnkwenfkewnfkwenfkwenfkewnfkewnfkwnfkewnfkewnfkewnfkwenfkewnfkwenfkwenfkwenf12j1e13
                    </p>

                </div>
            </div>
        </a >
    )

}