import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import NavigationMenuComponent from './NavigationMenuComponent'
import { Logo } from '@/icons/Logo'
import UserProfileDropdown from './UserProfleDropdown'
import { BiBookAlt, BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineBarChart, AiOutlineDesktop } from "react-icons/ai";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { SlTrophy } from "react-icons/sl";
import { ChevronDown } from 'lucide-react'
import { ProfileDetails } from './Account/ProfileDetails'
import HeaderProfile from './HeaderProfile'

const Header = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState({})
  const location = useLocation()

  // Mock user data - replace with actual user data from your auth system
  const user = {
    name: "Abayomi Olowu",
    email: "abayomi@patient.ng",
    avatar: "/Avatar/avatar 1.1.png"
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  const toggleDropdown = (index) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const navigationItems = [
    { title: 'Advocacy', 
      href: '/advocacy',
      isActive: location.pathname.startsWith('/advocacy')
    },
    { 
      title: 'Crowdfunding', 
      href: '/crowdfunding',
      isActive: location.pathname.startsWith('/crowdfunding')
    },
    {
      title: 'Resources',
      children: [
        {
          title: 'Blog',
          icon: <BiBookAlt className='h-6 w-6' />,
          href: '/blog',
          description: 'The latest industry news, updates and info.',
        },
        {
          title: 'Patient Stories',
          icon: <BiMessageRoundedDetail className='h-6 w-6'  />,
          href: '/stories',
          description: 'The latest industry news, updates and info.',
        },
        {
          title: 'Webinars',
          icon: <AiOutlineDesktop className='h-6 w-6' />,
          href: '/webinars',
          description: 'The latest industry news, updates and info.',
        },
        {
          title: 'Podcasts',
          icon: <HiOutlineMicrophone className='h-6 w-6' />,
          href: '/podcast',
          description: 'The latest industry news, updates and info.',
        },
        {
          title: 'Awards',
          icon: <SlTrophy className='h-6 w-6' />,
          href: '/awards',
          description: 'The latest industry news, updates and info.',
        },
        {
          title: 'Insights',
          icon: <AiOutlineBarChart className='h-6 w-6' />,
          href: '/review',
          description: 'The latest industry news, updates and info.',
        },
      ],
    },
  ]

  return (
    <header className="container border-b bg-yellow-400">
      <div className="w-full mx-auto flex h-16 items-center justify-between px-4 bg-white fixed z-30">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo />
          <span className="text-xl font-semibold">Patient.ng</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8 md:px-2">
          <NavigationMenuComponent items={navigationItems} />
        </nav>

        {/* Desktop Auth Buttons or User Profile */}
        <div className="hidden items-center gap-4 md:flex">
          {isLoggedIn ? (
            <UserProfileDropdown user={user} />
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-600" asChild>
                <Link to="/login">Log In</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white z-10 shadow-md md:hidden">
            <nav className="flex flex-col p-4">
              {navigationItems.map((item, index) => (
                <React.Fragment key={index}>
                {item.children ? (
                  <div className="py-2">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full text-lg font-medium"
                      aria-expanded={openDropdowns[index]}
                      aria-controls={`dropdown-${index}`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          openDropdowns[index] ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdowns[index] && (
                      <ul id={`dropdown-${index}`} className="ml-4 mt-2 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              to={child.href}
                              className="text-sm hover:text-gray-600 flex items-center gap-2"
                              onClick={toggleMenu}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`py-2 text-lg font-medium hover:text-gray-600 ${
                      item.isActive ? 'text-emerald-500' : ''
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </React.Fragment>
              ))}
              {!isLoggedIn && (
                <>
                  <Link to="/signup" className="py-2 text-lg font-medium hover:text-gray-600" onClick={toggleMenu}>
                    Sign Up
                  </Link>
                  <Link to="/login" className="py-2 text-lg font-medium hover:text-gray-600" onClick={toggleMenu}>
                    Log In
                  </Link>
                </>
              )}
              {isLoggedIn && (
                <HeaderProfile user={user} />
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header