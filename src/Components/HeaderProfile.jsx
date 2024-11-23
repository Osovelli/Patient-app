import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeaderProfile = ({ user }) => {
  const handleSignOut = () => {
    // Implement sign out logic here
    console.log('User signed out')
  }

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">{user.name}</span>
      </div>
      <Link to={'/login'}>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleSignOut}
        className="text-gray-500 hover:text-gray-700"
      >
        <LogOut className="h-5 w-5" />
        <span className="sr-only">Sign out</span>
      </Button>
      </Link>
    </div>
  )
}

export default HeaderProfile