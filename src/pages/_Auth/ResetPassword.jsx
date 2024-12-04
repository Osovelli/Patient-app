import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import AuthFooter from '@/components/auth/AuthFooter';

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <AuthForm
        title="Reset Your Password"
        subtitle="Enter your phone number we will send you a link to reset your password."
        logo={true}
        fields={[
          {
            id: "email",
            label: "Email address",
            type: "email",
            placeholder: "james@patient.ng",
            props: {
              name: "email",
              required: true,
            }
          }
        ]}
        submitText="Continue"
        footerText="Sign in"
        footerLinkText="instead"
        footerLink="/login"
        onSubmit={handleSubmit}
        className="w-full max-w-[440px]"
      />
      <AuthFooter />
    </div>
  );
};

export default ResetPassword;