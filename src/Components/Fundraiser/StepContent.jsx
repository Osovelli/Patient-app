/* import React from 'react'
import { Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFundraiserForm } from '@/lib/Context/FormRaiserContext'
import ImageFileUploader from '../ImageFileUploader'
import FundraiserDetailsForm from './FundRaiserDetailsForm'
import BeneficiarySelection from './BeneficiarySelector'


const StepContent = ({ currentStep }) => {
  const { formData, updateFormData } = useFundraiserForm()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const handleImageChange = (file) => {
    updateFormData({ coverImage: file })
  }

  const handleBeneficiaryChange = (value) => {
    updateFormData({ beneficiaryType: value })
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Add a cover photo or video</h2>
            <ImageFileUploader onImageChange={handleImageChange} />
          </Card>
        )
      case 2:
        return (
          <FundraiserDetailsForm formData={formData} updateFormData={updateFormData} />
        )
      case 3:
        return (
          <BeneficiarySelection
            value={formData.beneficiaryType}
            onChange={handleBeneficiaryChange}
            onEdit={onEdit}
          />
        )
      case 4:
        return (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">How much will you like to raise?</h2>
            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-gray-700">Fundraising Goal</label>
              <Input
                type="number"
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                placeholder="Enter your fundraising goal"
              />
            </div>
          </Card>
        )
      case 5:
        return (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Review & Submit</h2>
            <div className="space-y-4">
              <p><strong>Title:</strong> {formData.title}</p>
              <p><strong>Description:</strong> {formData.description}</p>
              <p><strong>Beneficiary:</strong> {formData.beneficiary}</p>
              <p><strong>Goal:</strong> ${formData.goal}</p>
              <p><strong>Cover Image:</strong> {formData.coverImage ? formData.coverImage.name : 'Not uploaded'}</p>
            </div>
          </Card>
        )
      default:
        return <div>Unknown step</div>
    }
  }

  return (
    <div className="space-y-8">
      <div className='bg-white md:shadow-sm md:-mx-12 p-4'>
        <h1 className="text-2xl font-semibold">Create fundraiser</h1>
        <p className="text-gray-500">Start a fundraising journey</p>
      </div>
      {renderStepContent()}
    </div>
  )
}

export default StepContent */

import React from 'react'
import { Card } from "@/components/ui/card"
import FundraiserDetailsForm from './FundRaiserDetailsForm'
import ImageFileUploader from '../ImageFileUploader'
import BeneficiarySelection from './BeneficiarySelector'
import { useFundraiserForm } from '@/lib/Context/FormRaiserContext'
import FundraiserGoalForm from './FundRaiserGoalForm'
import FundraiserReview from './FundRaiserReview'


const StepContent = ({ currentStep, onEdit }) => {
  const { formData, updateFormData } = useFundraiserForm()

  const handleImageChange = (file) => {
    updateFormData({ coverImage: file })
  }

  const handleBeneficiaryChange = (value) => {
    updateFormData({ beneficiaryType: value })
  }

  const handleGoalChange = (value) => {
    updateFormData({ goal: value })
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Add a cover photo or video</h2>
            <ImageFileUploader onImageChange={handleImageChange} />
          </Card>
        )
      case 2:
        return <FundraiserDetailsForm formData={formData} updateFormData={updateFormData} />
      case 3:
        return (
          <BeneficiarySelection
            value={formData.beneficiaryType}
            onChange={handleBeneficiaryChange}
            onEdit={onEdit}
          />
        )
      case 4:
        return (
          <FundraiserGoalForm
            value={formData.goal}
            onChange={handleGoalChange}
            onEdit={onEdit}
          />
        )
      case 5:
        return <FundraiserReview formData={formData} />
      default:
        return <div>Unknown step</div>
    }
  }

  return (
    <div className="space-y-8 py-4">
      <div>
        <h1 className="text-2xl font-semibold">Create fundraiser</h1>
        <p className="text-gray-500">Start a fundraising journey</p>
      </div>
      {renderStepContent()}
    </div>
  )
}

export default StepContent