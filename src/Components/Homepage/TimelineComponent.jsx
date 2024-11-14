import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TimelineSection = () => {
  const timelineData = [
    {
      year: '2024',
      achievements: [
        'Launched advanced AI-driven XXX.',
        'Reached 10 million users globally.',
        'Rolled out new subscription tiers for all patients.',
        'Released the mobile app for both iOS and Android.',
        'Introduced real-time collaboration tools.'
      ]
    },
    {
      year: '2023',
      achievements: [
        'Launched advanced AI-driven XXX.',
        'Reached 10 million users globally.',
        'Rolled out new subscription tiers for all patients.',
        'Released the mobile app for both iOS and Android.',
        'Introduced real-time collaboration tools.'
      ]
    },
    {
      year: '2022',
      achievements: [
        'Launched advanced AI-driven XXX.',
        'Reached 10 million users globally.',
        'Rolled out new subscription tiers for all patients.',
        'Released the mobile app for both iOS and Android.',
        'Introduced real-time collaboration tools.'
      ]
    }
  ];

  return (
    <section className="bg-[#004146] px-8 py-24">
      <div className="container mx-auto">
        <span className="text-emerald-500">About Us</span>
        
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Header Text for About Use Section which can be this long.
        </h2>
        
        <p className="mt-6 max-w-3xl text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus tristique justo vitae semper. In eu euismod erat. Vestibulum dictum ex eu euismod gravida. Ut mollis sem eu felis ultrices aliquet. Proin pellentesque aliquet.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {timelineData.map((item, index) => (
            <Card key={index} className="border-0 bg-teal-900/50 text-white">
              <CardContent className="p-6">
                <h3 className="mb-6 text-4xl font-bold text-emerald-500">
                  {item.year}
                </h3>
                <ul className="space-y-4">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="mr-2 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;