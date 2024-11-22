import { CustomButton } from "../CustomButton";
import { CustomSelect } from "../CustomSelect";
import { FormInput } from "../FormInput";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export function AccountInformationFormTab({ formData, handleInputChange, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="First Name"
              id="firstName"
              placeholder="Abayomi"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <FormInput
              label="Last Name"
              id="lastName"
              placeholder="Olowu"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <FormInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="abayomi@patient.ng"
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormInput
              label="Phone Number"
              id="phoneNumber"
              placeholder="0810 044 1503"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <FormInput
              label="Age"
              id="age"
              placeholder="12 years old"
              value={formData.age}
              onChange={handleInputChange}
            />
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <CustomSelect
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
              ]}
              placeholder="Male"
              value={formData.gender}
              onChange={(value) => handleInputChange({ target: { id: 'gender', value } })}
            />
            </div>
            <FormInput
              inputClassName={'col-span-2'}
              label="Street Address"
              id="streetAddress"
              placeholder="234 ABC Street"
              value={formData.streetAddress}
              onChange={handleInputChange}
            />
            <div className="space-y-2">
              <Label htmlFor="State">State</Label>
              <CustomSelect
                options={[
                  { value: 'lagos', label: 'Lagos' },
                  { value: 'abuja', label: 'Abuja' },
                ]}
                placeholder="Select State"
                value={formData.state}
                onChange={(value) => handleInputChange({ target: { id: 'state', value } })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="LGA">LGA</Label>
              <CustomSelect
              options={[
                { value: 'lga1', label: 'LGA 1' },
                { value: 'lga2', label: 'LGA 2' },
              ]}
              placeholder="Select LGA"
              value={formData.lga}
              onChange={(value) => handleInputChange({ target: { id: 'lga', value } })}
            />
            </div>
            
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Old Password"
              id="oldPassword"
              type="password"
              placeholder='Old password'
              value={formData.oldPassword}
              onChange={handleInputChange}
            />
            <FormInput
              label="New Password"
              id="newPassword"
              type="password"
              placeholder="Repeat password"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <CustomButton buttonVariant={"primary"} type="submit" className="w-full">
          Apply Changes
        </CustomButton>
      </form>
    )
  }