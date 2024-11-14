import { useState } from 'react'
import AuthForm from "@/Components/Auth/AuthForm"
import AuthFooter from '@/Components/Auth/AuthFooter'

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const fields = [
    {
      id: 'email',
      label: 'Email address',
      type: 'email',
      placeholder: 'james@patient.ng',
      props: {
        name: 'email',
        value: formData.email,
        onChange: handleInputChange,
      },
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      placeholder: '••••••••',
      props: {
        name: 'password',
        value: formData.password,
        onChange: handleInputChange,
      },
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AuthForm
        title="Welcome back"
        subtitle="Please enter your details to login."
        fields={fields}
        showSocial={true}
        submitText="Sign In"
        footerText="Don't have an account?"
        footerLink="/signup"
        footerLinkText="Register"
        onSubmit={handleSubmit}
        className="w-full max-w-[400px]"
      />
      <AuthFooter />
    </div>
  )
}

export default LoginPage