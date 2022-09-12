import React from 'react'

interface Props {
  name: string
  onClick: React.MouseEventHandler
  title: string
}
const Button: React.FC<Props> = ({ name, title, onClick }) => {
  return (
    <button
      name={name}
      className='w-max text-white rounded-md bg-[#0EA5E9] hover:bg-[#AEE0F7] hover:text-black p-5'
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
