import { useQuery } from "@tanstack/react-query";
import { getAlbumTrack } from "../../services/AlbumApi";
import { useParams } from "react-router-dom";

export default function useAlbumTrack(){
    const { albumId } = useParams();

    const{data,isLoading}=useQuery({
        queryKey:["music",albumId],
        queryFn:()=>getAlbumTrack(albumId)
    })
    return{data,isLoading}
}