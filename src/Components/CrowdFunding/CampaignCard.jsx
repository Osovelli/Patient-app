import { Heart, MapPin } from "lucide-react"
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


  const CampaignCard = ({ image, title, raised, goal, description, location, isLiked, likes, onLike }) => {
    const raisedNum = parseInt(raised, 10)
    const goalNUm = parseInt(goal, 10)

    const progress = (raisedNum / goalNUm) * 100

    const handleLikeClick = (e) => {
      e.preventDefault() // Prevent the Link from navigating
      e.stopPropagation() // Stop the event from bubbling up
      onLike()
    }
    
    
    return (
      <Link to={`/campaigns/${title.toLowerCase().replace(/ /g, '-')}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <Button
            variant="ghost"
            className="absolute h-12 bottom-0 right-4 shadow-sm transform translate-y-1/2 bg-white  hover:bg-gray-50 flex items-center gap-1.5 rounded-sm px-4 py-2"
            onClick={handleLikeClick}
          >
            <Heart
              className={`transition-colors ${
                isLiked ? 'fill-emerald-500 stroke-emerald-500 animate-heartBeat' : 'stroke-gray-500'
              }`}
              height={10}
              width={10}
            />
            <span className={`text-sm ${isLiked ? 'text-emerald-500' : 'text-gray-500'}`}>
              {likes}
            </span>
          </Button>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-emerald-400" />
            {location}
          </div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">
            {description}
          </p>

          {/* DO NOT DELETE THIS COMMENT */}

          {/* <Progress value={progress} className="h-1.5 my-4 bg-gray-100 [&>div]:bg-emerald-500" />
          <div className="text-sm text-gray-600 mb-4">
            <span>₦{raised.toLocaleString()} raised </span>
            <span className="text-gray-400">of ₦{goal.toLocaleString()}</span>
          </div>
          <Link 
            to={`/campaigns/${title.toLowerCase().replace(/ /g, '-')}`}
            className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
          >
            See More →
          </Link> */}
        </div>
      </div>
      </Link>
    )
  }

  export default CampaignCard