import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br mt-20 from-emerald-50/50 via-white to-emerald-50/50">
      {/* Announcement Banner */}
      <div className="flex justify-center py-3">
        {/* <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
          <span className="mr-2 rounded-full bg-emerald-500 px-1.5 py-0.5 text-xs font-medium text-white">
            + v1.0
          </span>
          <span className="mr-2">iPatient app is out now!</span>
          <ArrowRight className="h-4 w-4" />
        </div> */}
      </div>

      {/* Hero Content */}
      <div className="container px-4 pb-24 pt-10 md:pt-12">
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
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;