import React from 'react'
interface Props {
  name: string;
  onClick?: () => void;
}
const Button :React.FC<Props> = ({name, onClick})=>{
  return (
    <div>
        <button 
          className="hover-target mask-reveal animate-bounce text-white w-[200px] h-[50px] rounded-md transition-all hover:text-black hover:bg-brand-blue2 relative overflow-hidden border border-transparent hover:border-white/20 backdrop-blur-sm"
          onClick={onClick}
          data-cursor-text={`Click to ${name}`}
        >
          <span className="relative z-10">{name}</span>
        </button>
    </div>
  )
}

export default Button
