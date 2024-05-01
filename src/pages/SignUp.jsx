import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import BottomHeader from '../components/BottomHeader'
import { useNavigate } from 'react-router-dom'
// import BottomHeader from '../components/BottomHeader'
function SignUp() {
  const { register, getValues, formState, handleSubmit, reset } = useForm()
  const { errors } = formState
  const navigate=useNavigate()

  function onSubmit({ fullname, email, Password, passwordConfirm }) {
    console.log({ fullname, email, Password, passwordConfirm })
  }
  function handelToLogin(e) {
    e.preventDefault()
    navigate('/login')
  }
  return (
    <div className='h-[100vh] flex flex-col justify-center it w[100vh]'>
      {/* <BottomHeader  /> */}
      <BottomHeader leftContent={false}  to="home"  />
      <form
        className='flex h-[100%]  w-[100%]  justify-center  items-center mt-[-1rem] '
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='  w-[100%] roundedl-[3rem] rounded-[2rem]  flex flex-col justify-center items-center h-[55vh] bg-gay-700/90'>
          <h1 className='text-[1.8rem] my-[1rem] '>Sign Up</h1>

          {/* full name */}
          <div className=' w-full flex flex-col gap-2 max-w-[240px]'>
            <Input
              label='Full Name'
              // placeholder='Fullname'
              id='fullname'
              {...register('fullname', { required: 'this field is required' })}
            />
            <p className='text-default-500 text-small ml-[1rem] text-red-600'>
              {errors?.fullname?.message}
            </p>
          </div>
          {/* email */}
          <div className='w-full flex flex-col gap-2 max-w-[240px]'>
            <Input
              label=' Email'
              // placeholder='Fullname'
              id='email'
              {...register('email', {
                required: 'this field is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please provide a valid email address',
                },
              })}
            />
            <p className='text-default-500 text-small ml-[1rem] text-red-600'>
              {errors?.email?.message}
            </p>
            {/* pass */}
          </div>
          <div className='w-full flex flex-col gap-2 max-w-[240px]'>
            <Input
              type='password'
              label=' Password'
              // placeholder='Fullname'
              id='password'
              {...register('password', {
                required: 'this field is required',
                minLength: {
                  value: 8,
                  message: 'Password needs a minimum of 8 characters',
                },
              })}
            />
            <p className='text-default-500 text-small ml-[1rem] text-red-600'>
              {errors?.Password?.message}
            </p>
          </div>
          {/* re pass */}
          <div className='w-full flex flex-col gap-2 max-w-[240px]'>
            <Input
              type='password'
              label=' Repeat Password'
              // placeholder='Fullname'
              id='passwordConfirm'
              {...register('passwordConfirm', {
                required: 'this field is required',
                validate: (value) =>
                  value === getValues().password || 'Passwords need to match',
              })}
            />
            <p className='text-default-500 text-small ml-[1rem] text-red-600'>
              {errors?.passwordConfirm?.message}
            </p>
          </div>
          <button
            onClick={handelToLogin}
            className='text-default-500 text-small ml-[1rem] text-blue-600'
          >
            Have an account?
          </button>
          <Button className='text-white1 bg-blue1 mt-[1rem] ' type='submit'>
            submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
