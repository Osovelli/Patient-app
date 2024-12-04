import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useToast } from '@/hooks/use-toast'
import ProgressTracker from '@/components/fundraiser/ProgressTracker'
import StepContent from '@/components/fundraiser/StepContent'
import { FundraiserFormProvider, useFundraiserForm } from '@/lib/Context/FormRaiserContext'
import { AppLayout } from '@/components/AppLayout'
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
      <div className="mx-auto px-4 h-[calc(100vh-theme(spacing.16))] flex flex-col">
        <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-[300px] flex-shrink-0">
            <div className="sticky top-0 z-10 bg-gray-50 p-4 h-[20%] md:h-full">
              <ProgressTracker steps={fundraiserSteps} currentStep={currentStep} />
            </div>
          </div>
          <div className="flex-grow flex flex-col overflow-hidden h-[80%]">
            <div className="flex-grow overflow-y-scroll px-4 py-6">
              <StepContent currentStep={currentStep} onEdit={handleEdit} />
            </div>
          </div>
        </div>
        <div className="sticky md:ml-72 bottom-0 md:left-0 right-0 h-[20%] flex justify-between p-4 bg-gray-50 border-t z-10">
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
    </AppLayout>
  )
}

const CreateFundraiser = () => (
  <FundraiserFormProvider>
    <CreateFundraiserContent />
  </FundraiserFormProvider>
)

export default CreateFundraiser