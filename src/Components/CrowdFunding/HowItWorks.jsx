import React from 'react'
import { Button } from "@/components/ui/button"

const Step = ({ number, title, description }) => (
  <div className="flex items-start mb-8">
    <div className="flex-shrink-0 w-10 h-10 bg-gray-200 text-black rounded-full flex items-center justify-center mr-4">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </div>
)

const HowItWorks = () => {
  const steps = [
    {
      title: "Choose a Campaign",
      description: "Explore health initiatives and select the campaign you're passionate about supporting."
    },
    {
      title: "Make a Donation",
      description: "Contribute a donation of any amount and help us reach our fundraising goal."
    },
    {
      title: "Track Progress",
      description: "Monitor the impact of your donation in real-time and see how it's making a difference."
    },
    {
      title: "See Impact",
      description: "Discover the tangible results of your support and the transformative changes it's brought about."
    }
  ]

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Let's see how it works</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-8">
              Learn how crowdfunding helps fund critical health initiatives
            </p>
            {steps.map((step, index) => (
              <Step key={index} number={index + 1} {...step} />
            ))}
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Support a Campaign
            </Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/howitworks.png" 
              alt="How it works illustration" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks