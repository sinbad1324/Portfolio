import en from "../../data/lang/en/lang.json";
import { useRef, useEffect } from "react";

const navEN = en.Header.nav;

export const MainHeader = () => {
    const IsRenderRef = useRef(false);
    const textEditorRef = useRef();
    const NameText = "Izadpanah Mohammad";
    const KeyText = ["Web Developper", "Roblox Studio Developer"];
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
                    await sleep(toWait);
                }

                await sleep(toWait * 10);
                for (let t = cur.length; t > 0; t--) {
                    textEditorRef.current.innerText = cur.substring(0, t - 1);
                    await sleep(toWait);
                }
                await sleep(toWait * 4);

                if (currenText >= KeyText.length - 1) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    currenText = 0;
                } else {
                    currenText++;
                }
            }
        };
        writeLine();
    }, []);
    return (
        <div
            id={navEN[0]}
            className="sticky z-0 w-full h-full row-start-1 row-end-2 bg-transparent mt-1  "
        >
            <div className=" w-full h-full lg:h-28 lg:pl-56  lg:top-[40%] relative flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-10   ">
                <div className=" w-[70%]   h-auto  relative   rotate-90 flex justify-start items-start mask overflow-hidden min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px] lg:max-w-[500px] lg:max-h-[500px]  max rounded-full  ">
                    <img
                        className="   -rotate-90 cursor-pointer hover:blur-[2px] hover:scale-125  transition-all bg-cover bg-center bg-transparent"
                        src="https://th.bing.com/th/id/OIP.Wgq_Y1ai2-c2OVM6uP7WUgAAAA?rs=1&pid=ImgDetMain"
                        alt="Profile face"
                    />
                </div>

                <div className="text-l-12   pl-5 md:pl-0   font-extrabold flex flex-col justify-center items-center lg:items-start gap-4 ">
                    <h1 className="hover:contrast-100 md:text-6xl text-3xl  d-TextShadow text-l-blue-12  dark:text-d-blue-12">
                        {NameText}
                    </h1>
                    <div className="h-10 flex flex-row  d-TextShadow">
                        <h2
                            className="md:text-5xl text-2xl   text-l-vert-11  dark:text-d-vert-12 "
                            ref={textEditorRef}
                        ></h2>
                        <div className="md:text-5xl text-2xl text-l-blue-12 dark:text-d-blue-12 ">
                            |
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}