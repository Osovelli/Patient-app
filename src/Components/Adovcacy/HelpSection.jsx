import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FormInput } from '../FormInput'

export function HelpSection() {
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalAddress: '',
    complaints: ''
  })

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
    setFormData({
      hospitalName: '',
      hospitalAddress: '',
      complaints: ''
    })
  }

  return (
    <section className="w-full px-8 min-h-[600px]">
    <div className='relative'>
      <img
        src="/medical checkup.jpeg"
        alt="Woman working at computer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="max-w-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">We are happy to help</h2>
            <p className="text-gray-600 mb-6">
              If you need assistance making a complaint about an experience you had in a Public Acute Hospital.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                label="Name of hospital"
                id="hospitalName"
                value={formData.hospitalName}
                onChange={handleInputChange}
                required
              />
              <FormInput
                label="Address of hospital"
                id="hospitalAddress"
                value={formData.hospitalAddress}
                onChange={handleInputChange}
                required
              />
              <div className="space-y-2">
                <label htmlFor="complaints" className="block text-sm font-medium text-gray-700">
                  Your complaints
                </label>
                <Textarea
                  id="complaints"
                  value={formData.complaints}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-emerald-500"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Send your complaint
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      </div>
    </section>
  )
}