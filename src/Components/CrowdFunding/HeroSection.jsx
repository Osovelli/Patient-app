import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export const HeroSection = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/placeholder-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Uniting Hearts, Healing Lives. Together, We Make Miracles Happen
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Empower healing across Nigeria with a single click. Your support turns challenges into triumphs, making quality healthcare a reality for all.
        </p>
        <div className="flex space-x-4">
          <Link to={'/crowdfunding/create'}>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white ">
              Start a Crowdfunding
            </Button>       
          </Link>
          <Link to={'/campaigns'}>
            <Button variant="outline" className="bg-white text-black hover:bg-gray/100 hover:text-emerald-500">
              See Campaigns
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection