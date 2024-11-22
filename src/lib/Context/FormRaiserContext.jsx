import React, { createContext, useContext, useState } from 'react'

const FundraiserFormContext = createContext()

export const useFundraiserForm = () => useContext(FundraiserFormContext)

export const FundraiserFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    coverImage: null,
    title: '',
    state: '',
    lga: '',
    description: '',
    beneficiaryType: '',
    goal: '',
  })

  const updateFormData = (newData) => {
    setFormData(prevData => ({ ...prevData, ...newData }))
  }

  const submitForm = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/submit-fundraiser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit fundraiser')
      }

      return await response.json()
    } catch (error) {
      console.error('Error submitting fundraiser:', error)
      throw error
    }
  }

  return (
    <FundraiserFormContext.Provider value={{ formData, updateFormData, submitForm }}>
      {children}
    </FundraiserFormContext.Provider>
  )
}