import React from 'react'

const Pricing = ({text,price}) => {
  return (
    <>
   <div className="border-dashed border-b-2 border-black font-light text-xl sm:text-2xl flex flex-col sm:flex-row w-full sm:w-[90%] md:w-[75%] lg:w-[46%] m-2 sm:m-4 py-2 justify-between">
  <p className="mb-2 sm:mb-0 text-xl">{text}</p>
  <p className=" text-blue-700 text-xl">{price}</p>
</div>

   </>
  )
}

export default Pricing