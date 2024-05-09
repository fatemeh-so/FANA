import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingerMusic } from "../../services/MusicApi";

export default function useSingerMusic(){
    const { artistId } = useParams();

    const{data,isLoading}=useQuery({
        queryKey:["music",artistId],
        queryFn:()=>getSingerMusic(artistId)
    })
    return{data,isLoading}
}