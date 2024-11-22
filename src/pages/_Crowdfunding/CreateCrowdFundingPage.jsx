import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useToast } from '@/hooks/use-toast'
import ProgressTracker from '@/Components/Fundraiser/ProgressTracker'
import StepContent from '@/Components/Fundraiser/StepContent'
import { FundraiserFormProvider, useFundraiserForm } from '@/lib/Context/FormRaiserContext'
import { AppLayout } from '@/Components/AppLayout'
import { fundraiserSteps } from '@/lib/FundRaiserSteps'

const CreateFundraiserContent = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const { submitForm } = useFundraiserForm()
  const { toast } = useToast()

  const handleNext = () => {
    if (currentStep < fundraiserSteps.length) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleEdit = (step) => {
    setCurrentStep(step)
  }

  const handleSubmit = async () => {
    try {
      await submitForm()
      toast({
        title: "Success",
        description: "Your fundraiser has been submitted successfully!",
      })
      // Redirect to a success page or dashboard
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit fundraiser. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <AppLayout showHeader={true} loggedIn={true}>
      <div className="container mx-auto px-4 min-h-dvh flex flex-col">
        <div className="flex-grow grid md:grid-cols-[300px,1fr] gap-8 bg-none">
          <ProgressTracker steps={fundraiserSteps} currentStep={currentStep} />
          <div className="flex flex-col h-[calc(100vh-theme(spacing.16))] bg-gray-50">
            <div className="flex-grow overflow-y-auto px-4">
              <StepContent currentStep={currentStep} onEdit={handleEdit} />
            </div>
            <div className="flex justify-between p-4 bg-gray-50 border-t">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Prev
              </Button>
              {currentStep === fundraiserSteps.length ? (
                <Button onClick={handleSubmit} className="flex items-center gap-2">
                  Submit
                </Button>
              ) : (
                <Button onClick={handleNext} className="flex items-center gap-2">
                  Next <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

const CreateFundraiser = () => (
  <FundraiserFormProvider>
    <CreateFundraiserContent />
  </FundraiserFormProvider>
)

export default CreateFundraiser