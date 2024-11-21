import { About } from "./mains/About";
import { Project } from "./mains/Projets";
import { MainHeader } from "./mains/mainHeader"
import { Skills } from "./mains/skills"
import { ProjectsWeb } from "./mains/projectsV2";
import { Contact } from "./mains/contact";
//import pentagon from "../assets/pentagon"

export default function Main() {

    //Observe
    // eslint-disable-next-line no-unused-vars

    return (
        <main className=" z-0 rootMain row-start-2 row-end-3 ">

            <MainHeader />
            <About />
            <Skills />
            <Project />
            <ProjectsWeb />
            <Contact/>
        </main>
    );
}
