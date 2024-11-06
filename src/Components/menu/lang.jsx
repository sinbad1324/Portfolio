// import React from "react";
import { useLangContext } from "../../hooks/useLangContext";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IoLanguage } from "react-icons/io5";
import { FR, US, DE, IT } from 'country-flag-icons/react/3x2';
const LangsList = [
    { lg: "FR", comp: FR, title: "French" },
    { lg: "EN", comp: US, title: "English" },
    { lg: "AL", comp: DE, title: "German" },
    { lg: "IT", comp: IT, title: "Italian" },
]

const LangDropdownMenu = () => {
    // eslint-disable-next-line no-unused-vars
    // const [urlsChecked, setUrlsChecked] = React.useState(false);
    // const [person, setPerson] = React.useState("pedro");
    const { toggleLang } = useLangContext();
    return (
        <DropdownMenu.Root >
            <DropdownMenu.Trigger asChild >
                <button
                    className="inline-flex mr-1 size-6 items-center justify-center rounded-md bg-transparent text-l-blue-12 dark:text-d-blue-12  shadow-[0_2px_5px]  outline-none shadow-l-vert-9 hover:shadow-l-blue-10 dark:hover:shadow-d-blue-10  dark:shadow-d-blue-9 hover:bg-l-blue-4 dark:hover:bg-d-blue-4  "
                    aria-label=""
                >
                    <IoLanguage />

                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal >
                <DropdownMenu.Content
                    className="Content z-50  min-w-[100px] rounded-md  bg-l-blue-4   text-l-blue-12   dark:bg-d-blue-4 p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                    sideOffset={5}
                >
                    {
                        LangsList.map((value) => (
                            <DropdownMenu.Item key={value.lg} onClick={() => {
                                toggleLang(value.lg);
                            }} className="  group dark:text-d-blue-12  hover:bg-l-blue-5 dark:hover:bg-d-blue-5  hover:text-l-blue-12 dark:hover:text-d-blue-12  relative flex  h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none  outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-l-blue-5 data-[disabled]:text-mauve8 data-[highlighted]:text-l-blue-12">
                                <value.comp title={value.title} className="size-4 " />
                                <div className="ml-auto pl-4     ">
                                    {value.lg}
                                </div>
                            </DropdownMenu.Item>
                        ))
                    }
                </DropdownMenu.Content>
            </DropdownMenu.Portal>

        </DropdownMenu.Root>
    );
};

export default LangDropdownMenu;