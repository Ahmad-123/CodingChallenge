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
      className={`w-max text-white rounded-md selected:w-[20px] hover:bg-[#2A7E19] hover:text-black p-5 ${
        selectedStatus ? 'bg-[#2A7E19]' : 'bg-[#0EA5E9]'
      } `}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
