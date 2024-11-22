import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CustomButton } from '../CustomButton'

export function SignUpSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-1">Sign up as an advocate today</h2>
      <p className="text-gray-600 mb-8">
        Just a few clicks can make a difference. Sign up now.
      </p>
      <form className="flex flex-col items-center md:flex-row gap-1 group">
        <Input id={"sign as advocate"} placeholder="Enter your email" className="flex-grow w-80" />
        <CustomButton buttonVariant={"primary"} className="w-80 md:w-40">
          Sign up
        </CustomButton>
      </form>
    </section>
  )
}