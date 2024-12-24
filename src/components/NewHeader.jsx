import React from 'react'

import '../components/MainHeader.css'

 const NewHeader = ({header, text,backgroundImage}) => {
  return (
   <>
  <div 
  className='text-center flex flex-col justify-center p-10 border-b-2 border-gray-50 md:m-0 about' 
  style={{ 
   backgroundImage: `url(${backgroundImage || 'default-background-image.jpg'})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    objectFit:'fill',
    height:'60vh',
  }}
>
  <h1 className='text-5xl relative z-10'>{header}</h1>
  <p className='text-xl font-thin py-4 relative z-10'>{text}</p>

</div>

   </>
  )
}
export default NewHeader;