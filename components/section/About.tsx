/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <>
    <div className="w-full lg:px-16 xl:px-52  bg-[#000000f3] text-white py-12">
      <h2 className="text-6xl font-bold text-center py-6">We are ...</h2>
      
        <div className=" md:grid md:grid-cols-2 items-center">
          <div className="h-[300px] md:h-[600px] bg-cover bg-[url('https://images.pexels.com/photos/1111319/pexels-photo-1111319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]" />

          <div className='px-8'>
            <div className='mt-12 text-4xl lg:text-6xl'>Label removers</div>
            <div className='font-thin py-8 lg:text-xl'>
              <div>The era of restrictions by place of residence, nationality, or race is over.</div>
              <div>Each person's worth outweighs the labels attached to them.</div>
              <div>We remove all unnecessary tags and define ourselves as who we are.</div>
            </div>
          </div>
        </div>

        <div className="py-4 md:grid md:grid-cols-2 items-center">
          <div className="md:order-2 h-[300px] md:h-[600px] bg-cover bg-center bg-[url('https://camo.githubusercontent.com/850cdc9d7efb99844934b46f2c7f1ca83a1898392783842d4bdae46fda492797/687474703a2f2f7777772e6b646e7567676574732e636f6d2f77702d636f6e74656e742f75706c6f6164732f6e6575726f6e312e6a7067')]" />

          <div className='px-8 md:order-1'>
            <div className='my-12 text-4xl lg:text-6xl'>Team organiser</div>
            <div className='font-thin lg:text-xl'>
              <div>We work like living organisms.</div>
              <div>Depending on the project, team members are recruited from within the team and disbanded upon completion of the project.</div>
            </div>
          </div>
        </div>

        <div className="py-4 md:grid md:grid-cols-2 items-center">
          <div className="h-[300px] md:h-[600px] bg-cover bg-center bg-[url('https://images.pexels.com/photos/10438735/pexels-photo-10438735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]" />

          <div className='px-8'>
            <div className='my-12 text-4xl lg:text-6xl'>Realist</div>
            <div className='font-thin lg:text-xl'>
              <div>We are faithful every moment.</div>
              <div>The present moment is more important than grand dreams.</div>
              <div>We belive that we can reach our ultimate goal through steadily accumulating days.</div>
            </div>
          </div>
        </div>

        <div className="py-4 md:grid md:grid-cols-2 items-center">
          <div className="md:order-2 h-[300px] md:h-[600px] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1687514/pexels-photo-1687514.jpeg?auto=compress&cs=tinysrgb&w=1600')]" />

          <div className='px-8 md:order-1'>
            <div className='my-12 text-4xl lg:text-6xl'>Self-improvement seeker</div>
            <div className='font-thin lg:text-xl'>
              <div>We are constantly growing in our own way, in our own field.</div>
              <div>The team's goal is the same as the individual's goal, and the individual's growth is the team's growth.</div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default About;