import { PlusIcon } from "@radix-ui/react-icons"
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";

// eslint-disable-next-line react/prop-types
export const SkillBtns = ({ col, row, title ,icon}) => {

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
            className={`border-2 relative  cursor-pointer border-l-vert-10 dark:border-d-vert-10 w-[320px] h-[220px] col-start-${col} col-end-${col + 1} row-start-${row} row-end-${row + 1} `} >
            <PlusIcon className="  absolute -top-[.94rem] -left-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
            <PlusIcon className="  absolute -top-[.94rem]  -right-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
            <PlusIcon className="  absolute -bottom-[.94rem]  -right-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
            <PlusIcon className="  absolute -bottom-[.94rem]  -left-[.94rem] text-l-vert-6 dark:text-d-vert-6 size-7 " />
            <div className="group h-full w-full flex justify-center items-center" >

                <div className=" absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2   z-40 w-1/2 h-1/2 bg-transparent  flex flex-col justify-around items-center">
                    <h2 className="text-l-vert-11 z-20 dark:text-d-vert-11 text-5xl  font-extrabold  " >{title}</h2>
                    <img src={icon} alt={title}  className="size-12 z-20 mt-5" />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="size-12 z-20" viewBox="0 0 48 48">
                        <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                    </svg> */}
                    <div className={" group-hover:opacity-100 opacity-0 absolute  left-0  w-full h-[150px] rounded-full blur-sm bg-l-blue-3/[.8] dark:bg-d-blue-3/[.8]"} >

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