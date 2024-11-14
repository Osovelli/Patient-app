import { useState } from 'react';
import { Country, State, City } from 'country-state-city';
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AuthForm from '@/Components/Auth/AuthForm';
import AuthFooter from '@/Components/Auth/AuthFooter';

export default function PersonalizeProfile() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    country: '',
    state: '',
    city: '',
    streetAddress: '',
  });

  const countries = Country.getAllCountries();
  const states = formData.country 
    ? State.getStatesOfCountry(formData.country)
    : [];
  const cities = formData.state
    ? City.getCitiesOfState(formData.country, formData.state)
    : [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'country' ? { state: '', city: '' } : {}),
      ...(name === 'state' ? { city: '' } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="flex items-center justify-center p-4">
      <AuthForm
        title="Personalize Your Experience"
        subtitle="Tell us a bit about yourself to tailor your iPatient experience."
        logo={false}
        submitText="Continue"
        fields={[
          {
            id: "age",
            label: "Age",
            type: "number",
            placeholder: "Enter age",
            props: {
              name: "age",
              value: formData.age,
              onChange: handleInputChange
            }
          },
          {
            id: "streetAddress",
            label: "Street Address",
            type: "text",
            placeholder: "Search building name or street name",
            props: {
              name: "streetAddress",
              value: formData.streetAddress,
              onChange: handleInputChange
            }
          }
        ]}
        onSubmit={handleSubmit}
        className="w-full max-w-[400px]"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={formData.gender}
              onValueChange={(value) => handleSelectChange('gender', value)}
            >
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleSelectChange('country', value)}
            >
              <SelectTrigger id="country">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {formData.country && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => handleSelectChange('state', value)}
                >
                  <SelectTrigger id="state">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) => handleSelectChange('city', value)}
                  disabled={!formData.state}
                >
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.name} value={city.name}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
      </AuthForm>
      <AuthFooter />
    </div>
  );
}