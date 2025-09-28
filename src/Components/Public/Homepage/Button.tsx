import React from 'react'
interface Props {
  name: string;
  
}
const Button :React.FC<Props> = ({name})=>{
  return (
    <div>
        <button className=" animate-bounce  text-white w-[200px] h-[50px] rounded-md transition-all hover:text-black hover:bg-brand-blue2">{name}</button>
    </div>
  )
}

export default Button