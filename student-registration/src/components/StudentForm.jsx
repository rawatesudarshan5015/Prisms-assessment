import { useState } from 'react'
import '/src/StudentForm.css'

function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    gender: '',
    course: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    guardianName: '',
    guardianPhone: '',
    previousEducation: '',
    interestedInHostel: false,
    termsAccepted: false
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    })
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched({ ...touched, [name]: true })
    
    const fieldErrors = validateField(name, formData[name])
    if (fieldErrors) {
      setErrors({ ...errors, [name]: fieldErrors })
    }
  }

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should only contain letters'
        break
      
      case 'email':
        if (!value) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format'
        break
      
      case 'age':
        if (!value) return 'Age is required'
        if (value < 16) return 'Minimum age is 16'
        if (value > 100) return 'Please enter a valid age'
        break
      
      case 'phone':
        if (!value) return 'Phone number is required'
        if (!/^\d{10}$/.test(value)) return 'Phone must be exactly 10 digits'
        break
      
      case 'guardianPhone':
        if (!value) return 'Guardian phone is required'
        if (!/^\d{10}$/.test(value)) return 'Phone must be exactly 10 digits'
        break
      
      case 'gender':
        if (!value) return 'Please select gender'
        break
      
      case 'course':
        if (!value) return 'Please select a course'
        break
      
      case 'city':
        if (!value.trim()) return 'City is required'
        break
      
      case 'state':
        if (!value) return 'Please select a state'
        break
      
      case 'zipCode':
        if (!value) return 'ZIP code is required'
        if (!/^\d{6}$/.test(value)) return 'ZIP code must be 6 digits'
        break
      
      case 'guardianName':
        if (!value.trim()) return 'Guardian name is required'
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should only contain letters'
        break
      
      case 'previousEducation':
        if (!value) return 'Please select previous education'
        break
      
      default:
        return null
    }
    return null
  }

  const validate = () => {
    const newErrors = {}
    
    Object.keys(formData).forEach(key => {
      if (key === 'address' || key === 'interestedInHostel') return
      
      if (key === 'termsAccepted') {
        if (!formData[key]) {
          newErrors[key] = 'You must accept the terms and conditions'
        }
        return
      }
      
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
    setTouched(allTouched)
    
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      console.log('Submitted Data:', formData)
      setSubmitted(true)
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          age: '',
          phone: '',
          gender: '',
          course: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          guardianName: '',
          guardianPhone: '',
          previousEducation: '',
          interestedInHostel: false,
          termsAccepted: false
        })
        setTouched({})
        setSubmitted(false)
      }, 3000)
    } else {
      const firstErrorField = Object.keys(validationErrors)[0]
      const element = document.getElementsByName(firstErrorField)[0]
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ]

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Student Registration Form</h1>
        <p>Please fill in all required fields</p>
      </div>

      {submitted && (
        <div className="success-message">
          <span className="success-icon">✓</span>
          <span>Registration completed successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="student-form">
        {/* Personal Information */}
        <div className="form-section">
          <h2 className="section-title">Personal Information</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${touched.name && errors.name ? 'input-error' : ''}`}
                placeholder="Enter full name"
              />
              {touched.name && errors.name && (
                <span className="error-text">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${touched.email && errors.email ? 'input-error' : ''}`}
                placeholder="email@example.com"
              />
              {touched.email && errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Age <span className="required">*</span>
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${touched.age && errors.age ? 'input-error' : ''}`}
                placeholder="Enter age"
              />
              {touched.age && errors.age && (
                <span className="error-text">{errors.age}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength="10"
                className={`form-input ${touched.phone && errors.phone ? 'input-error' : ''}`}
                placeholder="10-digit mobile number"
              />
              {touched.phone && errors.phone && (
                <span className="error-text">{errors.phone}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Gender <span className="required">*</span>
            </label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>Male</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>Female</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>Other</span>
              </label>
            </div>
            {touched.gender && errors.gender && (
              <span className="error-text">{errors.gender}</span>
            )}
          </div>
        </div>

        {/* Address Information */}
        <div className="form-section">
          <h2 className="section-title">Address Information</h2>
          
          <div className="form-group">
            <label className="form-label">Street Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="2"
              className="form-textarea"
              placeholder="House number, street name"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                City <span className="required">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${touched.city && errors.city ? 'input-error' : ''}`}
                placeholder="Enter city"
              />
              {touched.city && errors.city && (
                <span className="error-text">{errors.city}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                State <span className="required">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-select ${touched.state && errors.state ? 'input-error' : ''}`}
              >
                <option value="">Select state</option>
                {indianStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {touched.state && errors.state && (
                <span className="error-text">{errors.state}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                ZIP Code <span className="required">*</span>
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength="6"
                className={`form-input ${touched.zipCode && errors.zipCode ? 'input-error' : ''}`}
                placeholder="6-digit PIN"
              />
              {touched.zipCode && errors.zipCode && (
                <span className="error-text">{errors.zipCode}</span>
              )}
            </div>
          </div>
        </div>

        {/* Guardian Information */}
        <div className="form-section">
          <h2 className="section-title">Guardian Information</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Guardian Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${touched.guardianName && errors.guardianName ? 'input-error' : ''}`}
                placeholder="Parent/Guardian name"
              />
              {touched.guardianName && errors.guardianName && (
                <span className="error-text">{errors.guardianName}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Guardian Phone <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="guardianPhone"
                value={formData.guardianPhone}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength="10"
                className={`form-input ${touched.guardianPhone && errors.guardianPhone ? 'input-error' : ''}`}
                placeholder="10-digit number"
              />
              {touched.guardianPhone && errors.guardianPhone && (
                <span className="error-text">{errors.guardianPhone}</span>
              )}
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="form-section">
          <h2 className="section-title">Academic Information</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Previous Education <span className="required">*</span>
              </label>
              <select
                name="previousEducation"
                value={formData.previousEducation}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-select ${touched.previousEducation && errors.previousEducation ? 'input-error' : ''}`}
              >
                <option value="">Select qualification</option>
                <option value="10th">10th Standard</option>
                <option value="12th">12th Standard</option>
                <option value="diploma">Diploma</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
              </select>
              {touched.previousEducation && errors.previousEducation && (
                <span className="error-text">{errors.previousEducation}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Course <span className="required">*</span>
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-select ${touched.course && errors.course ? 'input-error' : ''}`}
              >
                <option value="">Select course</option>
                <option value="cs">Computer Science</option>
                <option value="it">Information Technology</option>
                <option value="me">Mechanical Engineering</option>
                <option value="ee">Electrical Engineering</option>
                <option value="ce">Civil Engineering</option>
                <option value="ec">Electronics & Communication</option>
              </select>
              {touched.course && errors.course && (
                <span className="error-text">{errors.course}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="interestedInHostel"
                checked={formData.interestedInHostel}
                onChange={handleChange}
              />
              <span>Interested in hostel accommodation</span>
            </label>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="form-section">
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span>
                I accept the terms and conditions <span className="required">*</span>
              </span>
            </label>
            {touched.termsAccepted && errors.termsAccepted && (
              <span className="error-text">{errors.termsAccepted}</span>
            )}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit Registration
        </button>
      </form>
    </div>
  )
}

export default StudentForm