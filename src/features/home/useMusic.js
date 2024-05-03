import { useQuery } from "@tanstack/react-query";
import { getMusic } from "../../services/MusicApi";

export default function useMusic(){
    const{data,isLoading}=useQuery({
        queryKey:["music"],
        queryFn:getMusic
    })
    return{data,isLoading}
}