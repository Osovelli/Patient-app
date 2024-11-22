import { Button } from "@/components/ui/button"
import { ArrowDown, MessageSquare } from 'lucide-react'
import { CustomButton } from "../CustomButton"

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/young afro woman.jpeg"
          alt="Hero background"
          className="w-full h-full object-cover brightness-[0.85]"
        />
      </div>

      {/* Content */}
      <div className="container z-10 mx-auto px-4 py-12 text-white">
        <div className="flex flex-col md:flex-row gap-8 justify-between px-4">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Patient Advocacy Service.
          </h1>
          <p className="text-lg text-gray-200">
            Your trusted ally in healthcare, advocating for your rights and well-being. Let us guide you through every step of your healthcare journey with expertise and compassion.
          </p>
          <div className="flex flex-wrap gap-4">
            <CustomButton buttonVariant={'primary'} className="bg-emerald-500 border-none">
              <ArrowDown className="mr-2 h-4 w-4" />
              <a href="#how to make complaints">How to make complaints</a>
            </CustomButton>
            <CustomButton variant="outline" className="text-emerald-500">
              <a href="#sign as advocate">Sign up as an advocate</a>
            </CustomButton>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-xs flex-shrink-0 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <div className="flex gap-2">
            <MessageSquare className="h-6 w-6 text-emerald-400" />
            <p className="text-sm">
              "Patient's advocacy helped me get the right diagnosis and treatment, and I feel empowered!"
            </p>
          </div>
          <p className="text-sm text-right mt-2">- Sarah Thompson</p>
        </div>
      </div>
      </div>
    </div>
  )
}