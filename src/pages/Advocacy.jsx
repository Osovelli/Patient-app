import { ComplaintGuideSection } from '@/components/adovcacy/ComplaintGuideSection'
import { HelpSection } from '@/components/adovcacy/HelpSection'
import { HeroSection } from '@/components/adovcacy/HeroSection'
import { SignUpSection } from '@/components/adovcacy/SignUp'
import { AppLayout } from '@/components/AppLayout'
import Footer from '@/components/Footer'
import React from 'react'

const Advocacy = () => {
  return (
    <AppLayout showHeader={true} loggedIn={true}>
        <HeroSection />
        <ComplaintGuideSection />
        <HelpSection />
        <SignUpSection />
        <Footer />
    </AppLayout>
  )
}

export default Advocacy