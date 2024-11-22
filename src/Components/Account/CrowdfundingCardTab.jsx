import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin } from 'lucide-react'

const statusColors = {
  awaiting_review: 'bg-yellow-100 text-yellow-800',
  active: 'bg-green-100 text-green-800',
  completed: 'bg-blue-100 text-blue-800'
}

const statusText = {
  awaiting_review: 'Awaiting review',
  active: 'Active',
  completed: 'Completed'
}

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace('NGN', 'N')
}

export default function CrowdfundingCardTab({
  status,
  image ,
  organizer,
  beneficiary,
  location,
  amountRaised,
  goal,
  donationsCount,
  onEdit,
  onDelete
}) {
  const progressPercentage = (amountRaised / goal) * 100

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={image}
          alt="Campaign"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge 
            variant="secondary" 
            className={`${statusColors[status]} border-none`}
          >
            {statusText[status]}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={onDelete}
          >
            Delete campaign
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={organizer.avatar} />
            <AvatarFallback>{organizer.avatarFallback}</AvatarFallback>
          </Avatar>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">{organizer.name}</span>
            {' is organising a '}
            <span className="text-gray-900">fundraiser on behalf of </span>
            <span className="font-semibold text-gray-900">{beneficiary}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          {location}
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold">
              {formatCurrency(amountRaised)} raised
            </h3>
            <p className="text-sm text-gray-500">
              of {formatCurrency(goal)} goal
            </p>
          </div>
          <Progress value={progressPercentage} className="h-3 mb-2 bg-gray-100 [&>div]:bg-emerald-500" />
          <p className="text-sm text-gray-500">{donationsCount} donations</p>
        </div>
      </div>
    </div>
  )
}