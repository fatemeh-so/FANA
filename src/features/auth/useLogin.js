import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authApi'

export function useLogin() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (data) => {
      toast.success('login was successfully')
    //   console.log(data)
      navigate('/')
      queryClient.setQueryData(['user'], data.user)
    },
    onError: (err) => toast.error(err.message),
  })
  return { mutate, isLoading }
}
