import React from 'react'
import Header from '../components/header'
import HeroSection from '../components/homepage/HeroSectionComponent'
import TimelineSection from '@/components/homepage/TimelineComponent'
import FeatureSection from '@/components/homepage/FeatureComponent'
import CrowdfundingSection from '@/components/homepage/CrowdFundingComponent'
import TestimonialSection from '@/components/homepage/TestimonialComponent'
import BlogSection from '@/components/homepage/BlogSectionComponent'
import PodcastWebinarsSection from '@/components/homepage/PodcastComponent'
import { ContactUsSection } from '@/components/homepage/ContactUsComponent'
import FAQSection from '@/components/homepage/FAQComponent'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'


const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Home | Patient.ng"
        description="Welcome to Your Patient.ng. We provide amazing services and products."
        name="patient.ng"
        type="website"
      />
        <Header />
        <HeroSection />
        <TimelineSection />
        <FeatureSection />
        <CrowdfundingSection />
        <TestimonialSection />
        <BlogSection />
        <PodcastWebinarsSection />
        <ContactUsSection />
        <FAQSection />
        <Footer />
    </div>
  )
}

export default Homepage