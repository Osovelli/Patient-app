import { Button } from "../ui/button"
import { Progress } from "../ui/progress"
import { Link } from "react-router-dom"


/* 
const CampaignCard = ({ image, location, title, raised, goal, lastDonation }) => {
    const progress = (raised / goal) * 100
  
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-2">{location}</p>
          <h3 className="font-semibold mb-2">{title}</h3>
          <div className="mb-2">
            <Progress value={progress} className="mt-2 h-3 w-full bg-gray-100 [&>div]:bg-emerald-500" />
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span>₦{raised.toLocaleString()} raised</span>
            <span>of ₦{goal.toLocaleString()}</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">Last donation {lastDonation}</p>
          <Button variant="outline" className="w-full text-emerald-500 border-emerald-500 hover:bg-emerald-50">
            See More Information
          </Button>
        </div>
      </div>
    )
  }

  export default CampaignCard */


  const CampaignCard = ({ image, title, raised, goal }) => {
    const progress = (raised / goal) * 100
    
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold mb-2">{title}</h3>
          <Progress value={progress} className="h-1.5 mb-2 bg-gray-100 [&>div]:bg-emerald-500" />
          <div className="text-sm text-gray-600 mb-4">
            <span>₦{raised.toLocaleString()} raised </span>
            <span className="text-gray-400">of ₦{goal.toLocaleString()}</span>
          </div>
          <Link 
            to={`/campaigns/${title.toLowerCase().replace(/ /g, '-')}`}
            className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
          >
            See More →
          </Link>
        </div>
      </div>
    )
  }

  export default CampaignCard