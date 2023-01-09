/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const Hero = (props: Props) => {
  return (
    <Element name="Hero">
      <div className="h-screen w-full relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-fixed bg-cover bg-[url('https://images.unsplash.com/photo-1639353014154-8b9da8815d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-[#000000f3] lg:bg-none">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-[#000000f3] bg- transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="hidden lg:flex object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.unsplash.com/photo-1639353014154-8b9da8815d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl lg:my-auto">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 text-white">
            <h2 className="mb-5 font-sans text-5xl font-bold tracking-tight lg:text-7xl">
              <p>Creative Team</p>
              <p>Fractal Connection</p>
            </h2>
            <h3 className="mt-10 text-2xl lg:text-4xl">
              <p>"We are not artists </p>
              <p>but value creators."</p>
            </h3>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Hero;