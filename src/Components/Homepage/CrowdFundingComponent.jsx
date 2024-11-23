import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const CrowdfundingSection = () => {
  const campaigns = [
    {
      id: 1,
      title: "Save Osaze Odemwinge",
      location: "Ikeja, Lagos",
      description: "In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task.",
      image: "/donate image.png",
      raised: "100,00",
      goal: "500,000",
      lastDonation: "15m ago",
      progress: 20
    },
    {
      id: 2,
      title: "Save Osaze Odemwinge",
      location: "Ikeja, Lagos",
      description: "In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task.",
      image: "/donate image.png",
      raised: "100,00",
      goal: "500,000",
      lastDonation: "15m ago",
      progress: 20
    },
    {
      id: 3,
      title: "Save Osaze Odemwinge",
      location: "Ikeja, Lagos",
      description: "In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task.",
      image: "/donate image.png",
      raised: "100,00",
      goal: "500,000",
      lastDonation: "15m ago",
      progress: 20
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden px-6 py-24">
        <div className="px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <span className="text-sm font-medium text-emerald-500">
                Crowdfunding
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Support Health Initiatives, Make a Difference
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join us in funding critical healthcare projects and making an impact in the lives of patients and communities. Every contribution counts.
              </p>
              <Button className="mt-8 w-fit bg-emerald-500 hover:bg-emerald-600">
                CTA
              </Button>
            </div>
            <div className="relative">
              <img
                src="/dental checkup.png"
                alt="Healthcare provider with child patient"
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="bg-gray-50 py-24">
        <div className="px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {campaign.location}
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{campaign.title}</h3>
                    <p className="mt-2 text-gray-600">
                      {campaign.description}
                    </p>
                    <div className="mt-4">
                      <div className="text-sm text-gray-600">
                        Last donation {campaign.lastDonation}
                      </div>
                      <Progress 
                        value={campaign.progress} 
                        className="mt-2 h-2 w-full bg-gray-100 [&>div]:bg-emerald-500"
                        
                      />
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="font-medium">
                          ₦ {campaign.raised} raised
                        </span>
                        <span className="text-gray-600">
                          of ₦{campaign.goal}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="link"
                      className="mt-4 h-auto p-0 text-emerald-500 hover:text-emerald-600"
                    >
                      See More Information
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link to={'/campaigns'}>
            <Button
              variant="outline"
              className="group text-emerald-500 hover:text-emerald-600"
              
            >
              See all crowdfunding
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrowdfundingSection;