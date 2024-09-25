import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-center bg-gradient-to-r from-purps-0 to-purpf-0 shadow-lg'>
        <img src="public/troll-face.png" alt="" className='w-16 p-2'/>
        <h1 className='text-3xl font-bold p-4 text-white font-poppins'>Sinclair's Meme Generator</h1>
    </div>
  )
}

export default Header