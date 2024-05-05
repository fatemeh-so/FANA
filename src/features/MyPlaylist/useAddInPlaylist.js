import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addInPlaylist } from '../../services/playlistApi'
import toast from 'react-hot-toast'

export default function useAddInPlaylist() {
  const queryClient = useQueryClient()

  const { mutate, IsLoading } = useMutation({
    mutationFn: ({ music }) => addInPlaylist({ music }),
    onSuccess: () => {
      toast.success('Added to your playlist')
      queryClient.invalidateQueries({ queryKey: ['playlist'] })
    },
    onError: (err) => toast.error(err.message),
  })
  return { mutate, IsLoading }
}
