import React from 'react'
import { Play, Volume2, Rss } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import NewsletterSection from './NewsletterSection'
import { FaPodcast, FaRss, FaSpotify } from 'react-icons/fa'
import { SiGooglepodcasts } from "react-icons/si";
import { useNavigate } from 'react-router-dom'

const categories = [
  { name: 'All', active: true },
  { name: 'Web Design', active: false },
  { name: 'Development', active: false },
  { name: 'Marketing', active: false },
  { name: 'Education', active: false },
  { name: 'Technology', active: false },
]

const episodes = [
  {
    id: 1,
    number: 25,
    title: 'Method: Practicing Playful Creation',
    thumbnail: '/laptop.png',
    date: 'October 27 2023',
    description: 'Good news, Sleep Wizard! On November 5th, Jessica will launch a brand new podcast called Sleep Magic! In order to be prepared for her debut brand new episode.'
  },
  {
    id: 2,
    number: 24,
    title: 'Method: Practicing Playful Creation',
    thumbnail: '/oops.png',
    date: 'October 27 2023',
    description: 'Good news, Sleep Wizard! On November 5th, Jessica will launch a brand new podcast called Sleep Magic! In order to be prepared for her debut brand new episode.'
  },
  {
    id: 3,
    number: 23,
    title: 'Method: Practicing Playful Creation',
    thumbnail: '/spiral.png',
    date: 'October 27 2023',
    description: 'Good news, Sleep Wizard! On November 5th, Jessica will launch a brand new podcast called Sleep Magic! In order to be prepared for her debut brand new episode.'
  },
  {
    id: 4,
    number: 22,
    title: 'Method: Practicing Playful Creation',
    thumbnail: '/coffee.png',
    date: 'October 27 2023',
    description: 'Good news, Sleep Wizard! On November 5th, Jessica will launch a brand new podcast called Sleep Magic! In order to be prepared for her debut brand new episode.'
  },
]

function EpisodeCard({ episode }) {
  const navigate = useNavigate()

  const handlePlayClick = () => {
    navigate(`/podcast/${episode.id}`)
  }
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow-sm hover:bg-gray-50">
      <img
        src={episode.thumbnail}
        alt={`Episode ${episode.number} thumbnail`}
        className="rounded-lg object-cover h-20 w-20 md:h-auto md:w-auto "
      />
      <div className="flex-1 flex flex-col gap-4 p-2 justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
          <span>{episode.date}</span>
          <span>•</span>
          <span>Uv</span>
        </div>
        <h3 className="font-semibold mb-1">
          Ep {episode.number}: {episode.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {episode.description}
        </p>
        <div className="flex items-center justify-between">
          <Button 
            size="sm" 
            className="bg-emerald-500 hover:bg-emerald-600"
            onClick={handlePlayClick}
            >
            <Play className="w-4 h-4 mr-2" />
            Play Episode
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8">
                <SiGooglepodcasts />
            </Button>     
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaSpotify />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaPodcast/>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaRss />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PodcastEpisodes() {
    const firstHalfEpisodes = episodes.slice(0, episodes.length / 2)
    const secondHalfEpisodes = episodes.slice(episodes.length / 2)
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Listen to the Podcast</h2>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={
                  category.active
                    ? "bg-emerald-500 hover:bg-emerald-600"
                    : "hover:bg-gray-100"
                }
              >
                {category.name}
              </Badge>
            ))}
          </div>

          {/* Episodes List */}
          {firstHalfEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}

          {/* Newsletter section */}
            <NewsletterSection />

        
        {/* Second half of episodes */}
        <div className="space-y-4 mt-4">
          {secondHalfEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}