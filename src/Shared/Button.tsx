import React from 'react'

interface Props {
  title: string
  name: string
  selectedStatus?: boolean
  onClick: React.MouseEventHandler
}
const Button: React.FC<Props> = ({ name, title, selectedStatus, onClick }) => {
  return (
    <button
      name={name}
      className='w-max text-white rounded-md bg-[#0EA5E9] selected:w-[20px] hover:bg-[#AEE0F7] hover:text-black p-5'
      style={{ backgroundColor: selectedStatus ? '#2A7E19' : '#0EA5E9' }}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
