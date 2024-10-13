import React from 'react'

const Branch = () => {
  return (
    <section className="bg-gray-100 py-12" id='branch'>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Our Branches
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="/bdr.jpg"
            alt="Blog Image"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Branch 1
            </h3>
            <p className="text-gray-700">
             Bahir Dar<br />+251919901362<br />bdr@gmail.com
            </p>
            <a
              href="#"
              className="text-indigo-500 font-bold mt-4 inline-block"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="/fs.jpg"
            alt="Blog Image"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Branch 2
            </h3>
            <p className="text-gray-700">
            Finote Selam<br />+251919901362<br />abcd@gmail.com

            </p>
            <a
              href="#"
              className="text-indigo-500 font-bold mt-4 inline-block"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="/dmarkos.jpg"
            alt="Blog Image"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Branch 3
            </h3>
            <p className="text-gray-700">
            Debre Markos<br />+251919901362<br />abcd@gmail.com

            </p>
            <a
              href="#"
              className="text-indigo-500 font-bold mt-4 inline-block"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Branch