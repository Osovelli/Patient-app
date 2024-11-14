import React from 'react'
import Header from '../Components/header'
import HeroSection from '../Components/Homepage/HeroSectionComponent'
import TimelineSection from '@/Components/Homepage/TimelineComponent'
import FeatureSection from '@/Components/Homepage/FeatureComponent'
import CrowdfundingSection from '@/Components/Homepage/CrowdFundingComponent'
import TestimonialSection from '@/Components/Homepage/TestimonialComponent'
import BlogSection from '@/Components/Homepage/BlogSectionComponent'
import PodcastWebinarsSection from '@/Components/Homepage/PodcastComponent'
import { ContactUsSection } from '@/Components/Homepage/ContactUsComponent'
import FAQSection from '@/Components/Homepage/FAQComponent'
import Footer from '@/Components/Footer'


const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
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