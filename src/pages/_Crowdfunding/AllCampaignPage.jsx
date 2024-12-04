import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CampaignCard from '@/components/crowdFunding/CampaignCard'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import LeaderboardCard from '@/components/crowdFunding/LeaderboardCard'

// Placeholder campaigns data - would be fetched from API
const allCampaigns = Array(12).fill().map((_, index) => ({
  id: `all-${index}`,
  image: "/victoria.png",
  title: `Save Osaze Odemwingie ${index + 1}`,
  description: "In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task.",
  raised: 100000,
  goal: 500000,
  likes: 50,
  isLiked: false
}))

const trendingCampaigns = Array(4).fill().map((_, index) => ({
  id: `trending-${index}`,
  image: "/victoria.png",
  title: `Trending: Save Osaze Odemwingie ${index + 1}`,
  description: "This is a trending campaign with high engagement.",
  raised: 200000,
  goal: 500000,
  likes: 100,
  isLiked: false
}))

export default function AllCampaigns() {
  const [activeTab, setActiveTab] = useState('trending')
  const [searchQuery, setSearchQuery] = useState('')
  const [campaigns, setCampaigns] = useState(allCampaigns)
  const [trending, setTrending] = useState(trendingCampaigns)

  const handleLike = (id, isTrending = false) => {
    const updateCampaigns = (prevCampaigns) =>
      prevCampaigns.map(campaign =>
        campaign.id === id
          ? { 
              ...campaign, 
              likes: campaign.isLiked ? campaign.likes - 1 : campaign.likes + 1,
              isLiked: !campaign.isLiked
            }
          : campaign
      )
    
    if (isTrending) {
      setTrending(updateCampaigns)
    } else {
      setCampaigns(updateCampaigns)
    }
  }
  

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <>
      <Header  />
      <div className="min-h-screen bg-gray-50 py-8 px-4 mt-14">
        <div className="mx-auto py-6">
          {/* Navigation and Search */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <Button
                variant={activeTab === 'trending' ? 'default' : 'ghost'}
                className={activeTab === 'trending' ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : ''}
                onClick={() => setActiveTab('trending')}
              >
                Trending
              </Button>
              <Button
                variant={activeTab === 'near' ? 'default' : 'ghost'}
                className={activeTab === 'near' ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : ''}
                onClick={() => setActiveTab('near')}
              >
                Near you
              </Button>
            </div>
            
            <form onSubmit={handleSearch} className="flex w-full md:w-auto">
              <div className="relative flex-grow md:w-80">
                <Input
                  type="text"
                  placeholder="Search campaigns"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-12"
                />
              </div>
              <Button 
                type="submit"
                className="ml-2 bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Search
              </Button>
            </form>
          </div>

          {/* Main content area */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* All Campaigns section */}
            <div className="lg:w-3/4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign, index) => (
                  <CampaignCard
                    key={index}
                    {...campaign}
                    onLike={() => handleLike(campaign.id)}
                  />
                ))}
              </div>
            </div>

            {/*leaderboard Campaigns section */}
            <div className="lg:w-1/4">
              <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
              <div className=" space-y-2" style={{ maxHeight: 'calc(100vh)' }}>
                {trending.map((campaign, index) => (
                  <LeaderboardCard
                    key={index}
                    {...campaign}
                    onLike={() => handleLike(campaign.id, true)}
                  />
                ))}
                <Button>CTA</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}