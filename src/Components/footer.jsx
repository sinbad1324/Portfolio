import GitHubIcon from "./Icons/github";
import NewIcon from "./Icons/IconConfig";
import DiscordIcon from "./Icons/discord";
import InstaIcon from "./Icons/instagram";
export default function Footer() {
    return (
        <footer className="row-start-3 row-end-4 w-full h-full bg-d-blue-1/5 flex flex-col justify-center items-center gap-5 text-d-vert-12 text-xl">
            <div className=" flex flex-row justify-center items-center gap-5 ">
                <p>&copy;2024-2025</p>
                <p className="font-bold cursor-pointer ">Izadpanah Mohammad</p>
            </div>

            <div className="  hidden sm:flex  items-center justify-start px-4 flex-row-reverse " >
                <NewIcon href="https://github.com/sinbad1324">
                    <GitHubIcon className="size-6  " />
                </NewIcon>
                <NewIcon href="https://discord.gg/xwYfaKEB">
                    <DiscordIcon className="size-6  " />
                </NewIcon>
                <NewIcon href="https://www.instagram.com/">
                    <InstaIcon className="size-6  " />
                </NewIcon>
            </div>
        </footer>
    )
}