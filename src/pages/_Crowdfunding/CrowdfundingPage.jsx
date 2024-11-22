import React from 'react'
import Header from '@/Components/header'
import HeroSection from '@/Components/CrowdFunding/HeroSection'
import FeaturedCampaigns from '@/Components/CrowdFunding/FeatureCampaigns'
import ImpactStories from '@/Components/CrowdFunding/ImpactStories'
import HowItWorks from '@/Components/CrowdFunding/HowItWorks'
import StartCampaign from '@/Components/CrowdFunding/StartCampaign'

const CrowdfundingPage = () => {
  return (
    <div className='h-screen'>
      <Header isLoggedIn={false} />  
      <HeroSection />
      <FeaturedCampaigns />
      <ImpactStories />
      <HowItWorks />
      <StartCampaign />
    </div>
  )
}

export default CrowdfundingPage