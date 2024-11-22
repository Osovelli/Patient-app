import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CampaignCard from '@/Components/CrowdFunding/CampaignCard'
import Header from '@/Components/header'


export default function AllCampaigns() {
  const [activeTab, setActiveTab] = useState('trending')
  const [searchQuery, setSearchQuery] = useState('')

  // Placeholder campaigns data - would be fetched from API
  const campaigns = Array(8).fill({
    image: "/victoria.png",
    title: "Save Osaze Odemwingie",
    raised: 100000,
    goal: 500000,
  })

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 py-8 px-4 mt-14">
      <div className="container mx-auto py-6">
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

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {campaigns.map((campaign, index) => (
            <CampaignCard
              key={index}
              {...campaign}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}