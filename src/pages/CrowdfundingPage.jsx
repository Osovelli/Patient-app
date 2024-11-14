import React from 'react'
/* import ImpactStories from './ImpactStories'
import HowItWorks from './HowItWorks'
import StartCampaign from './StartCampaign' */
import Header from '@/Components/header'
import HeroSection from '@/Components/CrowdFunding/HeroSection'
import FeaturedCampaigns from '@/Components/CrowdFunding/FeatureCampaigns'
import ImpactStories from '@/Components/CrowdFunding/ImpactStories'

const CrowdfundingPage = () => {
  return (
    <div className='h-screen'>
      <Header />  
      <HeroSection />
      <FeaturedCampaigns />
      <ImpactStories />
      {/* <HowItWorks />
      <StartCampaign /> */}
    </div>
  )
}

export default CrowdfundingPage