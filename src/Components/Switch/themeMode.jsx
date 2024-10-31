import { MoonIcon, SunIcon, } from "@radix-ui/react-icons"
import { useState, useEffect } from 'react'
import NewIcon from "../Icons/IconConfig";
export default function ThemeModes() {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const SavedTheme = localStorage.getItem("theme");
        if (SavedTheme != null) {
            const isDark = SavedTheme === "true";
            setTheme(isDark);
            document.body.classList.toggle("dark", isDark);

        } else {
            setTheme(true);
            document.body.classList.add("dark");
        }
    }, [])

    const onClick = () => {
        const newValue = !theme
        setTheme(newValue)
        localStorage.setItem("theme", newValue)
        document.body.classList.toggle("dark", newValue)
    }
    return (
        <NewIcon onClick={onClick}>
            <MoonIcon className=" size-6 hidden dark:block" />
            <SunIcon className=" size-6 dark:hidden block" />
        </NewIcon>
        // <div className="  p-2 flex justify-center items-center rounded-lg hover:bg-black/15 dark:hover:bg-white/15 w-fit  " >
        //     <button onClick={onClick} className="w-fit flex justify-center items-center">

        //     </button>
        // </div>
    )

}
