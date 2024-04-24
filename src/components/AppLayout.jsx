import { Outlet } from "react-router-dom"
import BottomBar from "./BottomBar"

function AppLayout() {
    return (
        <div className="text-white1    overflow-y-scroll bg-gradient-to-b from-gray-900 via-gray-900 to-gray900 opacity-[94%] w-[100%] h-[100vh]">
            
            <main className="h-[100vh] w-[100%] " >
                <div className="flex flex-col items-center">
                    
                    <div className="h-[100%] flex flex-col   justify-between w-[90%]  ">
                        <Outlet/>
                        
                         <BottomBar/>
                    </div>
                     
             </div>
             
              
            </main>
        
        </div>
    )
}

export default AppLayout
