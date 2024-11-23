import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mic, Monitor, Play, Clock, Calendar } from "lucide-react";
import { Link } from 'react-router-dom';

const PodcastWebinarsSection = () => {
  const episodes = [
    {
      id: 1,
      title: "Ep 25: Method: Practicing Playful Creation",
      date: "October 27, 2022",
      duration: "1hr",
      image: "/public/Computer.png"
    },
    {
      id: 2,
      title: "Ep 25: Method: Practicing Playful Creation",
      date: "October 27, 2022",
      duration: "1hr",
      image: "/public/Computer.png"
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "Healthy Eating Habits for Busy Lifestyles.",
      subtitle: "Building a Balanced Diet",
      categories: ["CATEGORY1", "CATEGORY2"],
      variant: "teal"
    },
    {
      id: 2,
      title: "Healthy Eating Habits for Busy Lifestyles.",
      subtitle: "Building a Balanced Diet",
      categories: ["CATEGORY1", "CATEGORY2"],
      variant: "yellow"
    }
  ];

  return (
    <section className="relative">
      {/* Background Image */}
      <img
        src="/public/Overlay.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* Content with background color overlay */}
      <div className="relative  py-24">
        <div className="px-4 ">
          {/* Header */}
          <div className="mb-16 flex flex-col md:flex-row gap-4 items-start justify-between">
            <div className="text-white">
              <span className="text-sm font-medium text-emerald-500">
                Podcast & webinars
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Stay Informed, Stay Healthy
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Tune in to expert-led podcasts and webinars on health and wellness topics that matter to you.
              </p>
            </div>
            <Link to={'/podcast'}>
            <Button 
              variant="outline" 
              className="group border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
            >
              See Podcasts & Webinars
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </div>

          {/* Latest Episodes */}
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-2 text-white">
              <Mic className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Latest Episodes</h3>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {episodes.map((episode) => (
                <Card key={episode.id} className="bg-white">
                  <CardContent className="flex gap-4 p-4">
                    <img
                      src={episode.image}
                      alt=""
                      className=" h-40 w-40 rounded-lg object-cover"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className='h-4 w-4' />
                            {episode.date}
                            </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {episode.duration}
                          </span>
                        </div>
                        <h4 className="mt-2 font-bold">{episode.title}</h4>
                      </div>
                      <Link to={`/podcast/${episode.id}`}>
                      <Button className="w-fit bg-emerald-500 hover:bg-emerald-600">
                        <Play className="mr-2 h-4 w-4" />
                        Play Episode
                      </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Webinars */}
          <div>
            <div className="mb-8 flex items-center gap-2 text-white">
              <Monitor className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Upcoming webinars</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {webinars.map((webinar) => (
                <Card 
                  key={webinar.id} 
                  className={`border-0 ${
                    webinar.variant === 'yellow' 
                      ? 'bg-yellow-400' 
                      : 'bg-teal-900'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="mb-8">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={webinar.variant === 'yellow' ? 'text-black' : 'text-white'}
                      >
                        <path
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h4 className={`mt-4 text-xl font-bold ${
                        webinar.variant === 'yellow' ? 'text-black' : 'text-white'
                      }`}>
                        {webinar.title}
                      </h4>
                      <p className={`mt-2 ${
                        webinar.variant === 'yellow' ? 'text-black/80' : 'text-white/80'
                      }`}>
                        {webinar.subtitle}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        {webinar.categories.map((category, index) => (
                          <Badge 
                            key={index}
                            variant="outline" 
                            className={`rounded-full border ${
                              webinar.variant === 'yellow' 
                                ? 'border-black/20 text-black' 
                                : 'border-white/20 text-white'
                            }`}
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <Link to={`/webinars/${webinar.id}/#webinar`}>
                      <Button
                        variant="link"
                        className={`group p-0 ${
                          webinar.variant === 'yellow' 
                            ? 'text-emerald-700' 
                            : 'text-emerald-500'
                        }`}
                        
                      >
                        Sign up
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastWebinarsSection;