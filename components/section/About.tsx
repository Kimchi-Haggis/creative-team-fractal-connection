/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <>
    <div className="w-full relative flex flex-col-reverse py-16 lg:pt-0 lg:grid-rows-2 lg:pb-0 bg-fixed bg-cover bg-[url('https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] lg:bg-black lg:bg-none">
      <div className="inset-y-0 top-0 left-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        {/* <svg
          className="absolute left-6 hidden h-full text-black transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg> */}
        <img
          className="hidden lg:flex object-cover  h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>

      <div className="relative flex flex-col items-start w-full max-w-xl px-4 md:px-0 lg:px-8 lg:left-1/2">
        <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5 text-white float-right">
        <h2 className="text-6xl font-bold text-center lg:mb-20">Who are we?</h2>
          <div className="grow-0 shrink-0 basis-auto w-full px-4 sm:px-6">
            <div className="flex my-12">
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg bg-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
                  </svg>
                </div>
              </div>
              <div className="grow ml-4">
                <div className="font-bold text-2xl mb-1">Remove the labels</div>
                <div className="text-gray-400 text-lg">
                  <div>The era of restrictions by place of residence, nationality, or race is over.</div>
                  <div>Each person's worth outweighs the labels attached to them.</div>
                  <div>We remove all unnecessary tags and move on to the bigger world.</div>
                </div>
              </div>
            </div>
    
            <div className="flex my-12">
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg bg-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
              </div>
              <div className="grow ml-4">
                <div className="font-bold text-2xl mb-1">Form and disband internal teams organically</div>
                <div className="text-gray-400 text-lg">
                  <div>We work like living organisms.</div>
                  <div>Depending on the project, team members are recruited from within the team and disbanded upon completion of the project.</div>
                </div>
              </div>
            </div>
    
            <div className="flex my-12">
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg bg-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="grow ml-4">
                <div className="font-bold text-2xl mb-1">Be faithful every moment</div>
                <div className="text-gray-400 text-lg">
                  <div>The present moment is more important than grand dreams.</div>
                  <div>We reach our ultimate goal through steadily accumulating days.</div>
                </div>
              </div>
            </div>
    
            <div className="flex">
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg bg-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
              </div>
              <div className="grow ml-4">
                <div className="font-bold text-2xl mb-1">Pursue endless growth</div>
                <div className="text-gray-400 text-lg">
                  <div>We are constantly growing in our own way, in our own field.</div>
                  <div>The team's goal is the same as the individual's goal, and the individual's growth is the team's growth.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About;