import { useQuery } from "@tanstack/react-query";
import { getAlbum } from "../../services/AlbumApi";

export default  function useCabins() {
  const {
    isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["album"],
    queryFn: getAlbum,
  });

  return { isLoading, error, data };
}
