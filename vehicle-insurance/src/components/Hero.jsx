import React from 'react';
import Container from './Container';
import Title from './Title';
import Button from './Button';
import BackgroundDesign from './BackgroundDesign';


const Hero = () => {
 
  return (
    <section className="overflow-hidden px-50 sm:py-32 lg:pb-50 xl:pb-36">
      <Container>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
          <div className='mt-96 z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
            <Title title="Welcome to Vehicle Insurance Management System" className="text-4xl" />
            <p className='mt-6 text-lg text-gray-600'>
              A vehicle insurance management system is a software application or platform designed 
              to streamline and automate the processes involved in managing vehicle insurance policies.
              It is commonly used by insurance companies, agents,
              and brokers to efficiently hadle various tasks related to insurance policies, claims, and customer information.
            </p>
            <div >
              <Button href="#" label="see more" />
            </div>
          </div>
          <div className='relative mt-64 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
            <BackgroundDesign />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;