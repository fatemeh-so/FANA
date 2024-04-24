import { MagnifyingGlass ,MusicNotesSimple,User} from "@phosphor-icons/react"
import { House } from "@phosphor-icons/react/dist/ssr"

function BottomBar() {
   
    return (
        <div className="relative">
        <div className=" fixed rounded-[2rem] flex justify-center items-center bg-gray-700 opacity-95  w-[90%] h-[11vh] "> 
           
            <ul  className="flex gap-[4rem]  text-white1" >
                <li ><House size={25} color="#fcfcff" /></li>
                <li><MagnifyingGlass size={25} color="#fcfcff" /></li>
                <li><MusicNotesSimple size={25} color="#fcfcff" /></li>
                <li><User size={25} color="#fcfcff" /></li>
            </ul>
            
        </div></div>
    )
}

export default BottomBar
