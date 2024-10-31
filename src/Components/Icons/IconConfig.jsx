/* eslint-disable react/prop-types */

export default function NewIcon({ children, href, ...Args }) {
    return (
        <div {...Args} className="text-l-vert-12 dark:text-d-vert-12 cursor-pointer p-2 flex justify-center items-center rounded-lg hover:bg-black/15 dark:hover:bg-white/15 w-fit  ">
            <a href={href} target="_blank" className="w-fit flex justify-center items-center">
                {children}
            </a>
        </div>
    )
}