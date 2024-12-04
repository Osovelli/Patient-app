import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    const consentCookie = Cookies.get('cookieConsent')
    if (!consentCookie) {
      setShowBanner(true)
    } else {
      setPreferences(JSON.parse(consentCookie))
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
    }
    Cookies.set('cookieConsent', JSON.stringify(allAccepted), { expires: 365 })
    setPreferences(allAccepted)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    Cookies.set('cookieConsent', JSON.stringify(preferences), { expires: 365 })
    setShowBanner(false)
    setShowPreferences(false)
  }

  const togglePreference = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-700 mb-4 md:mb-0">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setShowPreferences(true)}>
              Manage Preferences
            </Button>
            <Button onClick={handleAcceptAll}>Accept All</Button>
          </div>
        </div>
      </div>

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie preferences. Necessary cookies are always enabled.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {Object.entries(preferences).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <Label htmlFor={key} className="capitalize">{key} Cookies</Label>
                <Switch
                  id={key}
                  checked={value}
                  onCheckedChange={() => togglePreference(key)}
                  disabled={key === 'necessary'}
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={handleSavePreferences}>Save preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CookieConsent