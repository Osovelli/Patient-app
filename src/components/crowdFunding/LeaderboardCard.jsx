import { Heart } from 'lucide-react'
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

const LeaderboardCard = ({ image, title, raised, goal, description, isLiked, likes, onLike }) => {
  const raisedNum = parseInt(raised, 10)
  const goalNum = parseInt(goal, 10)

  const progress = (raisedNum / goalNum) * 100

  const handleLikeClick = (e) => {
    e.preventDefault() // Prevent the Link from navigating
    e.stopPropagation() // Stop the event from bubbling up
    onLike()
  }
  
  return (
    <Link to={`/campaigns/${title.toLowerCase().replace(/ /g, '-')}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4">
        <div className="flex">
          <div className="flex-shrink-0 mr-4 relative">
            <img src={image} alt={title} className="w-16 h-16 object-cover rounded-lg" />
            
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {description}
            </p>
            <div className="ml-2 flex items-center gap-1 text-xs text-gray-500">
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 shadow-sm bg-white hover:bg-gray-50 flex items-center justify-center rounded-full"
              onClick={handleLikeClick}
            >
              <Heart
                className={`transition-colors ${
                  isLiked ? 'fill-emerald-500 stroke-emerald-500 animate-heartBeat' : 'stroke-gray-500'
                }`}
                size={16}
              />
            </Button>
              <span className='font-bold'>
              {likes}
              </span>
             Green heart likes
             </div>
            {/* <div className="flex items-center justify-between text-sm">
              <span className="text-emerald-600 font-medium">₦{raisedNum.toLocaleString()} raised</span>
              <span className="text-gray-500">of ₦{goalNum.toLocaleString()}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="bg-gray-200 h-2 flex-grow rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="ml-2 text-xs text-gray-500">{likes}Green heart likes</span>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default LeaderboardCard