import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    
    <footer class="bg-gray-800 text-gray-100 py-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center">
      <div class="flex justify-between">
        <a href="#">
          <Image src="/logo.png" alt="Nib Insurance S.C. Logo" width="150" height="50" />
        </a>
        <ul class="flex">
          <li class="mr-4">
            <a href="#">Home</a>
          </li>
          <li class="mr-4">
            <a href="#">About Us</a>
          </li>
          <li class="mr-4">
            <a href="#">Products</a>
          </li>
          <li class="mr-4">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <p class="text-lg mt-4">Copyright © 2023 Nib Insurance S.C.</p>
      <p class="text-sm">All rights reserved.</p>
    </div>
  </div>
</footer>


  )
}
export default Footer