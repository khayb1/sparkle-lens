import React from "react";
import Testimonials from "../Testimonials";
import { NewHeader } from "../NewHeader";
import Pricing from "../Pricing";
import { ServiceCard } from "../ServiceCard";
import { CiVideoOn, CiCamera, CiPen } from 'react-icons/ci';
import { GiWoodFrame } from "react-icons/gi";


export const Services = () => {
  return (
    <>
      <NewHeader 
      backgroundImage={("src/images/service.gif")}
        header='SERVICES'
        text = 'I provide wide range of services from photoshoot, party photoshoot, event coverage, wedding, picture frame and more.'
      />
      <div className="flex justify-center gap-10 flex-wrap py-10 px-3 md:py-4 lg:py-6 xl:py-8 ">
      <ServiceCard 
        ServiceIcon = {<CiCamera size={40}/>}
        ServiceTitle = 'Photography Services:'
        SerivceInfo = 'Weddings, birthdays, anniversaries, corporate events, conferences, and parties.'
        />
        <ServiceCard 
        ServiceIcon = {<CiVideoOn size={40} />}
        ServiceTitle = 'Videography Services:'
        SerivceInfo = 'Highlight reels for weddings, events, or corporate promotions.Short promotional videos. '
      />
        <ServiceCard 
        ServiceIcon = {<CiPen size={40} />}
        ServiceTitle = 'Editing and Post-Production:'
        SerivceInfo = 'Color correction, retouching, and enhancement. Adding music and effects.'
      />
      <ServiceCard 
        ServiceIcon = {<GiWoodFrame size={40} />}
        ServiceTitle = 'Picture Frames:'
        SerivceInfo = 'Picture frames according to your style of preference either large or small.'
      />
      </div>
      <div className="p-10 md:px-10 lg:px-20 bg-blue-200">
       <h3 className="text-2xl md:text-3xl text-blue-700 mb-4 font-light">Pricing </h3>
       <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8">Check my Adorable pricing</h1>

      <div className="flex flex-wrap">
        <Pricing 
        text='Portrait Photography'
        price='ghc 200'/>

          <Pricing 
            text='Videography'
            price='ghc 500'/>

          <Pricing 
            text='Editing and Post-Production:'
            price='ghc 300'/>

          <Pricing 
            text='Picture Frame:'
            price='ghc 150'/> 
      </div>
      </div>
    <Testimonials />
    </> 
  )
};
