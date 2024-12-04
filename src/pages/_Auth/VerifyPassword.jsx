'use client'

import AuthFooter from "@/components/auth/AuthFooter"
import AuthForm from "@/components/auth/AuthForm"

export default function CheckInbox() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AuthForm
        title="Check Your Inbox"
        subtitle="We've sent a password reset link to your email/phone. Click the link to create a new password."
        logo={true}
        fields={[]}
        showSocial={false}
        submitText=""
        className="w-full max-w-[400px]"
      />
      <AuthFooter />
    </div>
  )
}