import { ComplaintGuideSection } from '@/Components/Adovcacy/ComplaintGuideSection'
import { HelpSection } from '@/Components/Adovcacy/HelpSection'
import { HeroSection } from '@/Components/Adovcacy/HeroSection'
import { SignUpSection } from '@/Components/Adovcacy/SignUp'
import { AppLayout } from '@/Components/AppLayout'
import React from 'react'

const Advocacy = () => {
  return (
    <AppLayout showHeader={true} loggedIn={true}>
        <HeroSection />
        <ComplaintGuideSection />
        <HelpSection />
        <SignUpSection />
    </AppLayout>
  )
}

export default Advocacy