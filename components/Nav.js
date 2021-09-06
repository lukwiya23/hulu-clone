import requests from "../utils/requests"
import {useRouter} from 'next/router'

function Nav() {
    const router = useRouter()

    return (
        <nav className="relative">
            <div className="last:pr-5 flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-hidden overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, {title, url}])=>(
                    <h2 key={key} onClick={()=> router.push(`/?genre=${key}`)} className="cursor-pointer hover:scale-125 transition duration-100 hover:text-white active:text-red-500">{title}</h2>
                ))}
            </div>

            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"/>
        </nav>
    )
}

export default Nav
