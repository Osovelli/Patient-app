import React from 'react'
import { Button } from "@/components/ui/button"

const StartCampaign = () => {
  return (
    <section className="py-12 px-4 text-white">
      <div className="container bg-emerald-900 mx-auto flex justify-between items-start p-8 rounded-xl">
        <div>
          <h2 className="text-2xl font-bold mb-2">Start your own campaign</h2>
          <p>Have a health-related cause? Start your crowdfunding campaign today!</p>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
          Get Started
        </Button>
      </div>
    </section>
  )
}

export default StartCampaign