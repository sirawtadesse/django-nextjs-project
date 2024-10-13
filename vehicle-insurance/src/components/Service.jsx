import React from 'react'
import Image from 'next/image'

const Service = () => {
  return (
    <section class="bg-gray-100 py-16" id='service'>
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center">Our Services</h2>
    <p class="text-lg text-center mt-4">Nib Insurance S.C. offers a comprehensive range of vehicle insurance products and services to meet your needs.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-4">
      <div class="flex flex-col items-center">
        <Image src="/v3.jpg" alt="Car Insurance" width="300" height="200" />
        <h3 class="text-2xl font-bold mt-4">Motor Commercial Car</h3>
        <p class="text-lg mt-2">Protect your vehicle against all major risks, including accidents, theft, and fire.</p>
        <a href="#" class="bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-md mt-4">Get Quote</a>
      </div>
      <div class="flex flex-col items-center">
        <Image src="/v4.jpg" alt="Motorcycle Insurance" width="300" height="180" />
        <h3 class="text-2xl font-bold mt-4">Motor Third-Prty</h3>
        <p class="text-lg mt-2">Ride with peace of mind knowing you're covered against accidents, theft, and more.</p>
        <a href="#" class="bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-md mt-4">Get Quote</a>
      </div>
      <div class="flex flex-col items-center">
        <Image src="/vs2.jpg" alt="Truck Insurance" width="300" height="200" />
        <h3 class="text-2xl font-bold mt-4">Motor Private Insurance</h3>
        <p class="text-lg mt-2">Insure your truck against all major risks, including accidents, theft, and cargo damage.</p>
        <a href="#" class="bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-md mt-4">Get Quote</a>
      </div>
      <div class="flex flex-col items-center">
        <Image src="/vs2.jpg" alt="Truck Insurance" width="300" height="200" />
        <h3 class="text-2xl font-bold mt-4">Motor Trade Insurance</h3>
        <p class="text-lg mt-2">Insure your truck against all major risks, including accidents, theft, and cargo damage.</p>
        <a href="#" class="bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-md mt-4">Get Quote</a>
      </div>
    </div>
  </div>
</section>

  )
}

export default Service