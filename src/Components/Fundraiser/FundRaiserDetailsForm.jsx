import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

// Mock data - replace with actual data from your API
const states = [
  "Lagos",
  "Abuja",
  "Rivers",
  // Add more states
]

const lgas = {
  Lagos: ["Ikeja", "Lekki", "Surulere"],
  Abuja: ["Abaji", "Bwari", "Gwagwalada"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Eleme"],
  // Add more LGAs
}

const FundraiserDetailsForm = ({ formData, updateFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const handleStateChange = (value) => {
    updateFormData({ 
      state: value,
      lga: '' // Reset LGA when state changes
    })
  }

  const handleLGAChange = (value) => {
    updateFormData({ lga: value })
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-medium mb-6">Share the details of your fundraising with donors</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Fundraiser title
          </label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Input fundraiser title"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Where are you located?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={formData.state} onValueChange={handleStateChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              value={formData.lga} 
              onValueChange={handleLGAChange}
              disabled={!formData.state}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select LGA" />
              </SelectTrigger>
              <SelectContent>
                {formData.state && lgas[formData.state]?.map((lga) => (
                  <SelectItem key={lga} value={lga}>
                    {lga}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Fundraiser description
          </label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Hello, my name is XYZ and i am fundraising for"
            rows={8}
            className="resize-none"
          />
        </div>
      </div>
    </Card>
  )
}

export default FundraiserDetailsForm