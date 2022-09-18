import { exampleUser } from 'store'

const User = () => {
  return (
    <div className='flex flex-end text-[20px] items-center justify-center font-bold'>
      <h1 className='flex self-end p-4'>Welcome: {exampleUser.name}</h1>
    </div>
  )
}

export default User
