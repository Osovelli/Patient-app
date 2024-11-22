import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import AvatarGroup from '../AvatarGroup'

export default function HeroSection() {
  const avatars = [
    { src: "/Avatar/avatar 4.png", alt: "AvatarA" },
    { src: "/Avatar/avatar 5.png", alt: "AvatarB" },
    { src: "/Avatar/avatar 6.png", alt: "AvatarC" },
    { src: "/Avatar/avatar 7.png", alt: "AvatarD" },
    { src: "/Avatar/avatar 8.png", alt: "AvatarE" },
    { src: "/Avatar/avatar 9.png", alt: "AvatarF" },
  ]

  return (
    <div className="relative bg-emerald-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header Content */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight max-w-2xl">
              Find and Listen in your{' '}
              <br />
              favorite{' '}
              <span className="inline-block bg-emerald-500 px-2 rounded">
                Podcasts
              </span>
            </h1>

            {/* Testimonial */}
            <div className="lg:max-w-sm">
              <p className="text-lg mb-4">
                My name is Slau, and I've faced more challenges in my health journey
                than I ever thought possible. Diagnosed with a rare autoimmune disease
                at the age of 25, I was suddenly thrust i.
              </p>
              <div className="flex items-center">
                {/* <div className="flex -space-x-2">
                  {avatars.map((avatar, i) => (
                    <Avatar key={i} className="border-2 border-emerald-950 w-8 h-8">
                      <AvatarImage src={avatar.src} alt={`Listener ${avatar.name}`} />
                      <AvatarFallback>{avatar.name}</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-sm font-medium border-2 border-emerald-950">
                    +2
                  </div>
                </div> */}
                <AvatarGroup avatars={avatars} />
              </div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Featured podcast episode"
              className="w-full h-full object-cover"
            />
            <Button 
              size="icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 rounded-full w-20 h-20"
            >
              <Play className="h-10 w-10" />
              <span className="sr-only">Play featured episode</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}