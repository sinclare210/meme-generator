import React, { useEffect } from 'react'

import { useState } from 'react'

const Input = () => {



    const [img, setImage] = useState("")
    const [formData, setFormData] = useState({
        topText:"",
        bottomText:""
    })
    const [memeObj, setMemeObj] = useState({
        topText: "",
        bottomText:"",
        image: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

     function handleChange(e){
        setFormData((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value

        }))
    }


  
    useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => setAllMemes(data.data.memes))


    },[])
    console.log(allMemes);

    function handleSubmit(e){
        e.preventDefault();
       
        const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];

        setMemeObj({
            topText: formData.topText,
            bottomText: formData.bottomText,
            image: randomMeme.url 
        });

    }


   


  return (
    <>
     <form action="" className='p-9 ' onSubmit={handleSubmit}>
            <div className='flex space-x-2'>

                <input type="text" className='w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purps-0 p-2 font-poppins' placeholder='Top Text' onChange={handleChange} value={formData.topText} name="topText"/>
                <input type="text" className='w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purps-0 p-2 font-poppins' placeholder='Bottom Text' onChange={handleChange} value={formData.bottomText} name='bottomText'/>
            </div>
            
            <button className='px-1 py-2 bg-purps-0 w-full rounded text-center text-white text-lg font-extrabold mt-3 bg-gradient-to-r from-purps-0 to-purpf-0'>Get a new meme image 🖼️</button>
        </form>
        <div className='flex justify-center w-3/4 mx-auto relative'>
            <img src={memeObj.image} alt="" className=''/>
            <h2 className='absolute font-bangers md:text-5xl top-0 left-0 right-0 text-white text-outline text-center p-2 text-xl'>{memeObj.topText}</h2>
            <h2 className='absolute bottom-0 left-0 right-0 font-bangers md:text-5xl text-white text-outline text-center p-2 text-xl'>{memeObj.bottomText}</h2>
        </div>
        </>
  )
}



export default Input