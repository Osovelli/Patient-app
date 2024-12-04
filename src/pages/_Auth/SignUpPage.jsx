import AuthFooter from '@/components/auth/AuthFooter'
import AuthForm from '@/components/auth/AuthForm'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    isAdvocate: false,
    acceptTerms: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <div className="flex flex-col items-center pt-8">
      <AuthForm
        title="Create Your Account"
        subtitle="Enter your details to begin"
        logo={true}
        fields={[
          {
            id: "firstName",
            label: "First name",
            type: "text",
            placeholder: "James",
            props: {
              name: "firstName",
              value: formData.firstName,
              onChange: handleInputChange
            }
          },
          {
            id: "lastName",
            label: "Last name",
            type: "text",
            placeholder: "Brown",
            props: {
              name: "lastName",
              value: formData.lastName,
              onChange: handleInputChange
            }
          },
          {
            id: "phone",
            label: "Phone number",
            type: "tel",
            placeholder: "0810 000 0000",
            props: {
              name: "phone",
              value: formData.phone,
              onChange: handleInputChange
            }
          },
          {
            id: "email",
            label: "Email address",
            type: "email",
            placeholder: "james@patient.ng",
            props: {
              name: "email",
              value: formData.email,
              onChange: handleInputChange
            }
          },
          {
            id: "password",
            label: "Password",
            type: "password",
            placeholder: "••••••••",
            props: {
              name: "password",
              value: formData.password,
              onChange: handleInputChange
            }
          }
        ]}
        showSocial={true}
        showSwitch={true}
        switchLabel="Would you like to be an advocate?"
        submitText="Create Account"
        footerText="Already have an account?"
        footerLink="/login"
        footerLinkText="Login"
        onSubmit={handleSubmit}
        className=""
      >
        <div className="flex items-center space-x-2 mt-4 justify-center">
          <input
            type="checkbox"
            id="terms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleInputChange}
            className="rounded border-gray-300 text-emerald-600 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
          />
          <label
            htmlFor="terms"
            className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to Patient.ng{" "}
            <Link to="/terms" className="text-emerald-500 hover:text-emerald-600">
              Terms and Conditions
            </Link>
          </label>
        </div>
      </AuthForm>
      <div className='relative w-full py-11  mb-auto'>
      <AuthFooter />
      </div>
    </div>
  )
}