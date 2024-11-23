import { Logo } from '@/icons/Logo'
import React from 'react'
import { Button } from '../ui/button'

export const ContactUsSection = () => {
  return (
    <div className='py-12'>
        <div className='px-8'>
            <div className='pt-4 flex flex-col items-center bg-gray-50 bg=[#F7F7F8] w-full gap-8'>
                <div className='flex items-center gap-2 group'>
                    <Logo />
                    <span className='text-xl font-semibold'>Patient.ng</span>
                </div>
                <div>
                    <h2 className='text-4xl text-center'>Stay on top of your XXXX Today.</h2>
                    <p className='text-lg text-center'>
                        We believe in putting patients at the center of their healthcare journey.
                    </p>
                </div>
                <Button className="w-fit bg-emerald-500 hover:bg-emerald-600">
                    Contact Us
                </Button>
                <div className=''>
                    <img src='/public/Light mode.png' alt='site image' className='w-[500px] object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}
