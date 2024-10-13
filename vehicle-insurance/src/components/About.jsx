import React from 'react'


const About = () => {
  return (
    <div className="w-full" id='about'>
      <div className="container mx-auto">
        <h1 className='mb-3.5 text-blue-700 text-center text-xl'>About Us</h1>
        <div className="flex w-full flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:gap-2 gap-6">
          {/* ----------------Images-------------------- */}
          <div
            className="lg:w-1/2 bg-cover h-screen bg-center bg-no-repeat relative"
            style={{
              backgroundImage:
                "url('/l2.jpg')",
            }}
          ></div>
          {/* ------------Text + Images --------------- */}
          <div className="lg:w-1/2  ">
            <div className="lg:w-11/12 h-full lg:mx-auto  flex flex-col justify-evenly gap-7">
              <div className="text-3xl font-bold ">
                Nib Insurance is the best Insurance AGENCY in Ethiopia
              </div>
              <div className="text-xl font-semibold ">
              Nib Insurance S.C. is an Ethiopian insurance company that was established in 2002. 
              It is one of the leading insurance companies in Ethiopia, with a wide range of products 
              and services, including general insurance, life insurance, and health insurance. 
              The company has a strong track record of profitability and growth. 
              Nib Insurance S.C. has a network of over 40 branches throughout Ethiopia. The company
             also has a reinsurance arrangement with internationally renowned and financially strong reinsurance companies.

              </div>
              <div className="text-lg font-bold"></div>
              <div>
                <div className="flex justify-around flex-wrap lg:flex-nowrap gap-2 ">
                <div className="mt-8">
        <h2 className="text-3xl font-bold">Mission</h2>
        <p className="text-lg">
          To provide reliable and quality insurance service and maximize shareholder's value
          while supporting the overall growth of the Country.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold">Vision</h2>
        <p className="text-lg">
          To be the leading insurance company in Ethiopia, providing innovative and customer-centric insurance solutions that contribute to the socio-economic development of the country.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold">Values</h2>
        <ul className="mt-4 list-disc">
          <li>Transparency and accountability</li>
          <li>Respect & honesty</li>
          <li>Integrity at work</li>
          <li>Trustworthy and dependable partner</li>
          <li>Socially responsible</li>
          <li>Preferred by customers</li>
          <li>Avoid discrimination of any sort</li>
        </ul>
      </div>
    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default About