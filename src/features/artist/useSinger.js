import { useQuery } from "@tanstack/react-query";
import { getMusic } from "../../services/MusicApi";
import { getSinger } from "../../services/singerApi";

export default function useSinger(){
    const{data,isLoading}=useQuery({
        queryKey:["singer"],
        queryFn:getSinger
    })
    return{data,isLoading}
}