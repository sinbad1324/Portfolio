import { useRef, useEffect } from "react";
import en from "../data/lang/en/lang.json"
//import pentagon from "../assets/pentagon"

export default function Main() {

    const textEditorRef = useRef();
    const About = useRef();

    const IsRenderRef = useRef(false);
    const navEN = en.Header.nav

    const NameText = "Izadpanah Mohammad";
    const KeyText = [
        "Web Developper",
        "Roblox Studio Developer",
    ]
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
                    await sleep(toWait)
                }

                await sleep(toWait * 10)
                for (let t = cur.length; t > 0; t--) {
                    textEditorRef.current.innerText = cur.substring(0, t - 1);
                    await sleep(toWait)
                }
                await sleep(toWait * 4)

                if (currenText >= KeyText.length - 1) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    currenText = 0;
                } else {
                    currenText++;
                }
            }
        }
        writeLine();
    }, [])


    const options = {
        rootMargin: "0px",
        threshold: 1.0,
    };

    // eslint-disable-next-line no-unused-vars
    const obs = new IntersectionObserver((enteris, observe) => {

        enteris.filter((item) => {
            if (item.isIntersecting) {
                alert("wfwfwefwefwef")

            }
        })

    }, options)
    obs.observe(About.current)

    return (<main className=" z-0 rootMain row-start-2 row-end-3 ">
        <div id={navEN[0]} className="sticky z-0 w-full h-full row-start-1 row-end-2 bg-transparent mt-1  ">
            <div className=" w-full h-full lg:h-28 lg:pl-56  lg:top-[40%] relative flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-10  " >


                <div className=" w-[70%] h-auto  relative   rotate-90 flex justify-start items-start mask overflow-hidden min-w-[100px] min-h-[100px] max-w-[200px] max-h-[200px] lg:max-w-[500px] lg:max-h-[500px]  max rounded-full  ">
                    <img className="   -rotate-90 cursor-pointer hover:blur-[2px] hover:scale-125  transition-all bg-cover bg-center bg-transparent" src="https://th.bing.com/th/id/OIP.Wgq_Y1ai2-c2OVM6uP7WUgAAAA?rs=1&pid=ImgDetMain" alt="Profile face" />
                </div>

                <div className="text-l-12   pl-5 md:pl-0   font-extrabold flex flex-col justify-center items-center lg:items-start gap-4 ">
                    <h1 className="hover:contrast-100 text-6xl d-TextShadow text-l-blue-12  dark:text-d-blue-12" >
                        {NameText}
                    </h1>
                    <div className="h-10 flex flex-row  d-TextShadow">
                        <h2 className="text-5xl   text-l-vert-11  dark:text-d-vert-12 " ref={textEditorRef} ></h2>
                        <div className="text-5xl text-l-blue-12 dark:text-d-blue-12 ">|</div>
                    </div>
                </div>
            </div>
        </div>

        <div ref={About} className=" bg-transparent w-full h-full row-start-2 row-end-3 flex flex-row justify-around items-start " >
            <div className="h-[70vh] min-h-[550px] w-[600px]  bg-transparen  rounded-xl  overflow-hidden shadow-md  " >
                <img className=" bg-cover bg-center bg-transparent " src="https://wallpapercave.com/wp/wp9023490.jpg" alt="" />
            </div>
            <div className="h-[70vh] w-[45%]   rounded-lg  flex flex-col justify-start items-start gap-6   " >
                <div className="w-full h-fit p-10">
                    <div id={navEN[1]} className=" hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 ">
                        {navEN[1]}.
                    </div>
                </div>

                <div className="w-2/3 text-xl font-light text-l-blue-12 dark:text-d-blue-12 h-fit flex flex-col  items-start justify-center gap-5 ">
                    <div className="w-full h-fit overflow-hidden max-h-[200px] " >
                        <p className="   relative active:animate-YApear ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis, expedita doloremque eos ab sequi labore voluptatibus dolore voluptatem. Dolores cum cupiditate optio ea reiciendis veniam officia maxime sunt consequatur?
                        </p>
                    </div>

                    <div className="w-full h-fit overflow-hidden max-h-[200px] " >
                        <p className="relative ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis, expedita doloremque eos ab sequi labore voluptatibus dolore voluptatem. Dolores cum cupiditate optio ea reiciendis veniam officia maxime sunt consequatur?
                        </p>
                    </div>

                    <div className="w-full h-fit overflow-hidden max-h-[200px] " >
                        <p className="relative ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis, expedita doloremque eos ab sequi labore voluptatibus dolore voluptatem. Dolores cum cupiditate optio ea reiciendis veniam officia maxime sunt consequatur?
                        </p>
                    </div>
                </div>

                <div className="w-2/3 h-fit  flex  items-end  justify-end">
                    <a id={navEN[1]} className="mr-5 active:animate-click hover:scale-110 hover:rounded-xl ease-in duration-75  transition-all  cursor-pointer w-24 h-12 flex justify-center items-center rounded-lg  bg-l-blue-7 dark:bg-d-blue-4 text-xl text-l-blue-12 dark:text-d-blue-12 border  border-d-blue-3 dark:border-d-blue-10 ">
                        MyCV
                    </a>
                </div>
            </div>
        </div>

    </main>)
}