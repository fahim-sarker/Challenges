import  { useState } from 'react'

const Togglebg = () => {
  const [bgColor, setBgColor] = useState(false)
  return (
    <div className={`${bgColor ? 'bg-blue-500' : 'bg-red-500'} h-screen flex items-center justify-center transition-colors duration-500`}>
      <button onClick={() => setBgColor(!bgColor)} className='text-white p-5 border cursor-pointer'>click to chnage bg</button>
    </div>
  )
}

export default Togglebg
