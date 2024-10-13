import Image from 'next/image'
import React from 'react'


const BackgroundDesign = () => {
  return (
    <div className="z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 ">
      <div className="p-4 pb-10 ">
        <Image
          src="/dembel.jpg" // Path to the image file
          alt="v1"
          width={500}
          height={500}
          className="mt-96" // Specify the desired width and height
        />
      </div>
    </div>
    
  )
}

export default BackgroundDesign