import React from 'react';
import { Button } from "@/components/ui/button";

const FeatureSection = () => {
  const steps = [
    { number: '1', title: 'Informal Complaint' },
    { number: '2', title: 'Formal Complaint' },
    { number: '3', title: 'What to Include in your Complaint' },
    { number: '4', title: 'Submit your complaint online' },
    { number: '5', title: 'Request the HSE to review the complaint' }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Image placeholder */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl bg-teal-950">
            {/* You can replace this with an actual image */}
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium text-emerald-500">
              Advocacy
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let us guide you through every step of your healthcare journey
            </h2>

            <div className="mt-8 space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm transition-colors hover:bg-gray-50"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-sm font-medium text-emerald-600">
                    {step.number}
                  </span>
                  <span className="text-lg font-medium">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            <Button className="mt-8 w-fit bg-emerald-500 hover:bg-emerald-600">
              CTA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;