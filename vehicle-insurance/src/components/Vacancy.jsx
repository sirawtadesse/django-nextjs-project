import React from 'react'

const Vacancy = () => {
  return (
    <section className="bg-gray-100 py-12" id='vacancy'>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Avaliable Vacancies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md">
          {/* <img
            src="/v11.jpg"
            alt="Blog Image"
            className="w-full h-40 object-cover rounded-t-lg"
          /> */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Vacancy 1
            </h3>
            <p className="text-gray-700">
              Job Position:General Manager<br />Registration start date:21/03/2016 E.C<br />End date:30/03/2026 E.C
            </p>
            <a
              href="/wow.txt"
              className="text-indigo-500 font-bold mt-4 inline-block"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          {/* <img
            src="/v7.jpg"
            alt="Blog Image"
            className="w-full h-40 object-cover rounded-t-lg"
          /> */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Vacancy 2
            </h3>
            <p className="text-gray-700">
            Job Position:General Manager<br />Registration start date:21/03/2016 E.C<br />End date:30/03/2026 E.C

            </p>
            <a
              href="/wow.txt"
              className="text-indigo-500 font-bold mt-4 inline-block"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          {/* <img
            src="/v9.jpg"
            alt="Blog Image"
            className="w-full h-40 object-cover rounded-t-lg"
          /> */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Vacancy 3
            </h3>
            <p className="text-gray-700">
            Job Position:General Manager<br />Registration start date:21/03/2016 E.C<br />End date:30/03/2026 E.C

            </p>
            <a
              href="/wow.txt"
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

export default Vacancy