import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import NavigationMenuComponent from './NavigationMenuComponent'
import { Logo } from '@/icons/Logo'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navigationItems = [
    { title: 'Advocacy', href: '/advocacy' },
    { title: 'Crowdfunding', href: '/crowdfunding' },
    {
      title: 'Resources',
      children: [
        {
          title: 'Guides',
          href: '/resources/guides',
          description: 'Step-by-step instructions for common healthcare processes.',
        },
        {
          title: 'Documentation',
          href: '/resources/documentation',
          description: 'Detailed information about our platform and services.',
        },
        {
          title: 'FAQ',
          href: '/resources/faq',
          description: 'Answers to frequently asked questions about healthcare and our platform.',
        },
      ],
    },
  ]

  return (
    <header className="border-b bg-yellow-400 container">
      <div className="w-full mx-auto flex h-16 items-center justify-between px-4 bg-white fixed z-30">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo />
          <span className="text-xl font-semibold">Patient.ng</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8 md:px-2">
          <NavigationMenuComponent items={navigationItems} />
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600" asChild>
            <Link to="/login">Log In</Link>
          </Button>
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
                      <span className="text-lg font-medium">{item.title}</span>
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              to={child.href}
                              className="text-sm hover:text-gray-600"
                              onClick={toggleMenu}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="py-2 text-lg font-medium hover:text-gray-600"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Link>
                  )}
                </React.Fragment>
              ))}
              <Link to="/signup" className="py-2 text-lg font-medium hover:text-gray-600" onClick={toggleMenu}>
                Sign Up
              </Link>
              <Link to="/login" className="py-2 text-lg font-medium hover:text-gray-600" onClick={toggleMenu}>
                Log In
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header