import { Flag, Heart, Hospital, LogOut, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { CustomButton } from "../CustomButton";

export function ProfileDetails({ activeTab, setActiveTab }) {
    return (
      <div className="w-64 p-4 flex flex-col justify-between bg-white rounded-lg shadow-md h-auto">
        <div>
        <div className="flex flex-col items-center mb-6">
          <Avatar className="h-20 w-20 mb-2">
            <AvatarImage src="/placeholder.svg?height=80&width=80" />
            <AvatarFallback>OA</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-semibold">Olowu Abayomi</h2>
          <p className="text-sm text-gray-500">abayomi@patient.ng</p>
        </div>
        <div className="space-y-2">
          {['Account Information', 'Crowdfunding', 'Hospital Reviews', 'Advocacy'].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'outline' : 'ghost'}
              className={`w-full justify-start ${activeTab === tab ? 'text-emerald-500 bg-white border-emerald-500' : 'text-gray-700'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Account Information" ? <User2 /> 
              : tab === "Crowdfunding" ? <Heart /> 
              : tab === "Advocacy" ? <Flag />
              : <Hospital />
            }
              {tab}
            </Button>
          ))}
        </div>
        </div>
        <CustomButton buttonVariant="outline" className="w-full justify-start mt-6 text-red-500">
          <LogOut />
          Log Out
        </CustomButton>
      </div>
    )
  }