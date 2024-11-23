import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-green-200 flex items-center overflow-hidden bg-gradient-to-br mt-20 from-emerald-50/50 via-white to-emerald-50/50">
      <div className='absolute inset-0 h-full w-full object-cover'>
        <img src='/Grid layers.png' alt='grid layers' className='w-full h-full' />
      </div>
      {/* Hero Content */}
      <div className="w-full px-4 pb-24 pt-10 md:pt-12">
        {/* Text Content */}
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering <span className="text-emerald-500">Patients</span>,
            <br />
            Transforming <span className="text-emerald-500">Healthcare.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-gray-600 md:text-lg">
            We believe in putting patients at the center of their healthcare journey. Discover a community-driven platform dedicated to providing support, resources, and advocacy for patients across Nigeria.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              Contact Us
            </Button>
            <Button variant="outline">
              About Us
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto mt-16 max-w-[600px]">
          <img
            src="/Hero background.png"
            alt="Healthcare Professional with Service Icons"
            className="w-full h-auto bg-blend-"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;