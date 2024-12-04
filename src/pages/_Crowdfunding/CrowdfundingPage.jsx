import React from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/crowdFunding/HeroSection'
import FeaturedCampaigns from '@/components/crowdFunding/FeatureCampaigns'
import ImpactStories from '@/components/crowdFunding/ImpactStories'
import HowItWorks from '@/components/crowdFunding/HowItWorks'
import StartCampaign from '@/components/crowdFunding/StartCampaign'
import Footer from '@/components/Footer'

const CrowdfundingPage = () => {
  return (
    <div className='h-screen'>
      <Header isLoggedIn={false} />  
      <HeroSection />
      <FeaturedCampaigns />
      <ImpactStories />
      <HowItWorks />
      <StartCampaign />
      <Footer />
    </div>
  )
}

export default CrowdfundingPage