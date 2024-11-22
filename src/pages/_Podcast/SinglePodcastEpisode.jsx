import { Play, Rewind, Volume2, Maximize2, Rss } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AppLayout } from '@/Components/AppLayout'
import { SiGooglepodcasts } from 'react-icons/si'
import { FaPodcast, FaRss, FaSpotify } from 'react-icons/fa'

// Mock data (replace with API data later)
const episode = {
  id: 25,
  title: "Method: Practicing Playful Creation",
  date: "October 27,2022",
  duration: "1hr",
  chapters: "12",
  thumbnail: "/laptop.png",
  description: "Good news, Sleep Wavers! On November 5th, Jessica will launch a brand-new podcast called Sleep Magic! In order to be prepared for her debut brand-new episode.",
  longDescription: `It all began when rock musician David Byrne swapped bodies with a Barbie doll in a Freaky Friday-style transformation. That's what prompted him and his partner Mala Gaonkar to turn a 15,000 square foot warehouse in Denver, Colorado into the Theater of the Mind, a cerebral amusement park.

  In this episode, Byrne and neuroscientist Thalia Wheatley have a live discussion at the Denver Center for the Performing Arts, which is moderated by co-host Latif Nasser. The three discuss how we don't see or hear or know what we believe we do, but also how all of that... can actually be a wonderful thing.

  We would especially want to thank Charlie Miller and the Denver Center for the Performing Arts team, Emily Simoness and the Arbutus Foundation team, Boen Wang, and Heather Radke.`,
  producer: "Suzie Lechtenberg"
}

export default function SingleEpisode() {
  return (
    <AppLayout showHeader={true}>
    <div className="min-h-screen bg-white">
      <div className='w-full hidden md:block h-72 bg-emerald-500 relative'></div>
      <div className="absolute top-0 z-10 max-w-4xl left-[50%] -translate-x-[50%] bg-white rounded-t-3xl mt-20 p-8 shadow-lg">
        <div className="space-y-8">
          {/* Episode Header */}
          <div className="flex gap-6">
            <img
              src={episode.thumbnail}
              alt={episode.title}
              className="w-48 h-48 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-4 text-gray-500 mb-2">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    <path d="M13 7h-2v6h6v-2h-4z"/>
                  </svg>
                  {episode.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    <path d="M13 7h-2v6h6v-2h-4z"/>
                  </svg>
                  {episode.chapters}
                </span>
                <span>•</span>
                <span>{episode.duration}</span>
              </div>
              <h1 className="text-2xl font-bold mb-4">{episode.title}</h1>
              <p className="text-gray-600">{episode.description}</p>
            </div>
          </div>

          {/* Audio Player */}
          <div className="space-y-4">
            <div className="bg-gray-100 h-1 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-1/3"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button size="icon" variant="ghost">
                  <Rewind className="w-4 h-4" />
                </Button>
                <Button size="icon" className="bg-emerald-500 hover:bg-emerald-600">
                  <Play className="w-4 h-4" />
                </Button>
                <span className="text-sm text-gray-500">2:30/10:00</span>
              </div>
              <div className="flex items-center gap-4">
                <Button size="icon" variant="ghost">
                  <Volume2 className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Maximize2 className="w-4 h-4" />
                </Button>
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

          {/* Episode Description */}
          <div>
            <h2 className="text-xl font-bold mb-4">Episode Description</h2>
            <div className="prose max-w-none">
              {episode.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Episode Credits */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Episode Credits:</h3>
            <p className="text-gray-600">
              Produced by <span className="text-emerald-500">{episode.producer}</span>
            </p>
          </div>

          {/* Newsletter and Social Links */}
          <div className="text-gray-600">
            <p className="mb-2">
              We publish a newsletter every Wednesday. Short essays, suggestions, and information on additional ways to engage with the show are all included. Register at{' '}
              <a href="#" className="text-emerald-500 hover:underline">newsletter</a>.
            </p>
            <p>
              Follow us on social media at on{' '}
              <a href="#" className="text-emerald-500 hover:underline">Instagram</a>,{' '}
              <a href="#" className="text-emerald-500 hover:underline">Twitter</a>, and{' '}
              <a href="#" className="text-emerald-500 hover:underline">Facebook</a>,
              and send us your feedback at www.google.com
            </p>
          </div>
        </div>
      </div>
    </div>
    </AppLayout>
  )
}