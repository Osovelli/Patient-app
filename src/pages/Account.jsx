import React, { useState } from 'react'
import { ProfileDetails } from '@/Components/Account/ProfileDetails'
import { AccountInformationFormTab } from '@/Components/Account/AccountInformationFormTab'
import { AppLayout } from '@/Components/AppLayout'
import CrowdfundingCardTab from '@/Components/Account/CrowdfundingCardTab'
import HospitalReviewsTab from '@/Components/Account/HospitalReviewsTab'
import AdvocacyTab from '@/Components/Account/AdvocacyTab'


export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('Account Information')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '',
    gender: '',
    streetAddress: '',
    state: '',
    lga: '',
    oldPassword: '',
    newPassword: '',
  })

  const reviews = [
    {
      hospitalName: "Hospital name",
      content: "To a general advertiser outdoor advertising is worthy of consideration. Outdoor advertising is considered as the oldest form of advertising. Posting bills on wooden boards in the late 19th century led to the birth of the term billboard. Today, outdoor advertising includes",
      date: "26th Oct 2023",
      rating: 5,
      status: "approved",
      showModify: false
    },
    {
      hospitalName: "Hospital name",
      content: "To a general advertiser outdoor advertising is worthy of consideration. Outdoor advertising is considered as the oldest form of advertising. Posting bills on wooden boards in the late 19th century led to the birth of the term billboard. Today, outdoor advertising includes",
      date: "26th Oct 2023",
      rating: 5,
      status: "pending",
      showModify: true
    },
    {
      hospitalName: "Hospital name",
      content: "To a general advertiser outdoor advertising is worthy of consideration. Outdoor advertising is considered as the oldest form of advertising. Posting bills on wooden boards in the late 19th century led to the birth of the term billboard. Today, outdoor advertising includes",
      date: "26th Oct 2023",
      rating: 5,
      status: "rejected",
      showModify: true
    }
  ]

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with data:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <AppLayout showHeader={true} loggedIn={true}>
        <div className='mx-auto px-4 py-8 space-y-4'>
            <h2 className='text-3xl font-semibold'>Account</h2>
            {/*Desktop screen*/}
            <div className="flex flex-col sm:flex-row gap-8">
                <ProfileDetails activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="flex-1 bg-white p-8 rounded-lg shadow-sm">
                    {activeTab === 'Account Information' && (
                    <AccountInformationFormTab
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSubmit={handleSubmit}
                    />
                    )}
                    {activeTab === 'Crowdfunding' && (
                    <CrowdfundingCardTab
                    status="awaiting_review"
                    image="baby.jpeg"
                    organizer={{
                      name: "Abayomi Olowu",
                      avatar: "/placeholder.svg?height=40&width=40",
                      avatarFallback: "AO"
                    }}
                    beneficiary="Osaze Odemwinge"
                    location="Abuja"
                    amountRaised={1000}
                    goal={500000}
                    donationsCount={1}
                    onEdit={() => console.log("Edit clicked")}
                    onDelete={() => console.log("Delete clicked")}
                  />
                    )}
                    {activeTab === 'Hospital Reviews' && (
                    <HospitalReviewsTab reviews={reviews}/>
                    )}
                    {activeTab === 'Advocacy' && (
                    <AdvocacyTab />
                    )}
                    {/* Add other tab content components here */}
                </div>
            </div>
        </div>
    </AppLayout>
  )
}