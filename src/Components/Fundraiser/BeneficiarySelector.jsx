import React from 'react'
import { Check } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

const BeneficiaryOption = ({ value, title, description, color }) => (
  <div className="flex items-center space-x-2">
    <RadioGroupItem value={value} id={value} className="sr-only peer" />
    <Label
      htmlFor={value}
      className={`flex flex-1 items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer transition-colors
        peer-data-[state=checked]:border-${color}-500 peer-data-[state=checked]:bg-${color}-50
        [&:has([data-state=checked])]:border-${color}-500 [&:has([data-state=checked])]:bg-${color}-50`}
    >
      <RadioGroupItem value={value} id={value} className={`border-${color}-500 text-${color}-500`} />
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>
    </Label>
  </div>
)

const BeneficiarySelection = ({ value, onChange, onEdit }) => {
  return (
    <Card className="p-6">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium">Add a cover photo or video</h3>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-2 w-2" />
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(1)}>
            Edit
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
          <h3 className="text-base font-medium break-words inline-block w-full max-w-[16rem] sm:max-w-none px-2 py-1">
  Share the details of your fundraising with donors
</h3> 


            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-2 w-2" />
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(2)}>
            Edit
          </Button>
        </div>
      </div>

      <h2 className="text-xl font-medium mb-6">Who are you fundraising for?</h2>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="space-y-4"
      >
        <BeneficiaryOption
          value="yourself"
          title="Yourself"
          description="Funds are delivered to your bank account for your own use"
          color={'emerald'}
        />
        <BeneficiaryOption
          value="someone"
          title="Someone else"
          description="Funds will be delivered to a beneficiary account"
          color={'purple'}
        />
        <BeneficiaryOption
          value="charity"
          title="Charity"
          description="Funds will be delivered to your chosen nonprofit for you"
          color={'blue'}
        />
      </RadioGroup>

    </Card>
  )
}

export default BeneficiarySelection