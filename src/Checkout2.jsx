import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

import Button from './components/ValidationButton'
import validateFields from './validation.js'

function Checkout() {
  const [formData, setFormData] = useState( {
    name: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    zipCode: '',
    city: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setFormData({ ...formData,  [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: ""})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFields(formData);

    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      navigate("/checkoutSuccess");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} id="checkout-form" noValidate>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleInput} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleInput} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input 
          type="text" 
          name="phoneNumber" 
          placeholder="Phone Number" 
          value={formData.phoneNumber} 
          onChange={handleInput} />
        {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber}</p>}

        <input 
          type="text" 
          name="streetAddress" 
          placeholder="Street Address" 
          value={formData.streetAddress} 
          onChange={handleInput} />
        {errors.streetAddress && <p style={{ color: "red" }}>{errors.streetAddress}</p>}

        <input 
          type="text" 
          name="zipCode" 
          placeholder="Zip Code" 
          value={formData.zipCode} 
          onChange={handleInput} />
        {errors.zipCode && <p style={{ color: "red" }}>{errors.zipCode}</p>}

        <input 
          type="text" 
          name="city" 
          placeholder="City" 
          value={formData.city} 
          onChange={handleInput} />
        {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
        
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Checkout;
