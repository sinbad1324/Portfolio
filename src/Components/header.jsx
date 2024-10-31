import ThemeModes from "./Switch/themeMode";
import GitHubIcon from "./Icons/github";
import NewIcon from "./Icons/IconConfig";
import DiscordIcon from "./Icons/discord";
import InstaIcon from "./Icons/instagram";
import LangDropdownMenu from "./menu/lang";
import Nav from "./nav";
// eslint-disable-next-line react/prop-types
export default function Header({ isScroll }) {
    // const TimoutRef = useRef();

    const _className = `
    ${isScroll ? "bg-transparent  " : ""} 
     z-2 transition-colors  text-l-vert-11 
     ${!isScroll ? "bg-l-vert-1 dark:bg-d-blue-1 border-b border-l-vert-6" : ""}
       h-max[80px] h-[80px] fixed 
        w-full row-start-1 row-end-2 
        grid 
        grid-rows-none
        sm:grid-cols-4
        grid-cols-3
        justify-center
        items-center
        dark:text-d-vert-11
        text-lg
        p-3
        z-20
        `;

    return (
        <header className={_className}>
            <div className="  font-bold text-4xl justify-center col-start-1 w-full h-full flex items-center  col-end-2  row-start-1 row-end-3 ">
                <h1>SinDev</h1>
            </div>
            <div className="col-start-4  hidden sm:flex col-end-5   row-start-1 row-end-3 w-full h-full  items-center justify-start px-4 flex-row-reverse " >
                <ThemeModes />
                <NewIcon href="https://github.com/sinbad1324">
                    <GitHubIcon className="size-6  " />
                </NewIcon>
                <NewIcon href="https://discord.gg/xwYfaKEB">
                    <DiscordIcon className="size-6  " />
                </NewIcon>
                <NewIcon href="https://www.instagram.com/">
                    <InstaIcon className="size-6  " />
                </NewIcon>
                <LangDropdownMenu />
            </div>
            <Nav />
        </header >
    );
}
