/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const Member = (props: Props) => {
  return (
    <Element name="Members">
      <div className="py-12 px-6 mx-auto bg-[#000000f3] text-white text-center">
        <h2 className="text-4xl font-bold my-12">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12 text-xl">
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">John Doe</p>
              <p className="text-gray-500">Co-founder</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/5.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Lisa Ferrol</p>
              <p className="text-gray-500">Web designer</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Maria Smith</p>
              <p className="text-gray-500">Senior consultant</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Agatha Bevos</p>
              <p className="text-gray-500">Co-founder</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Darren Randolph</p>
              <p className="text-gray-500">Marketing expert</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/9.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Soraya Letto</p>
              <p className="text-gray-500">SEO expert</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/10.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Maliha Welch</p>
              <p className="text-gray-500">Web designer</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/11.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Zeynep Dudley</p>
              <p className="text-gray-500">Web developer</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/12.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Avaya Hills</p>
              <p className="text-gray-500">Copywritter</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/13.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Thierry Fischer</p>
              <p className="text-gray-500">Senior consultant</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/14.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Aisling Sheldon</p>
              <p className="text-gray-500">Senior developer</p>
            </div>
            <div className="mb-12">
              <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" className="rounded-full mx-auto shadow-lg mb-4 max-w-[100px]" alt="" />
              <p className="font-bold mb-2">Ayat Black</p>
              <p className="text-gray-500">Web designer</p>
            </div>
          </div>
      </div>
    </Element>
  )
}

export default Member;