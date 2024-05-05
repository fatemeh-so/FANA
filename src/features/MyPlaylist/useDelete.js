import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteFromPlaylist } from "../../services/playlistApi";

export function useDeletePlaylist() {
    const queryClient = useQueryClient();
    const { isLoading, mutate } = useMutation({
      mutationFn: deleteFromPlaylist,
      onSuccess: () => {
        toast.success(" Successfully deleted!");
        queryClient.invalidateQueries({ queryKey: ["playlist"] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  return { isLoading, mutate };
}
