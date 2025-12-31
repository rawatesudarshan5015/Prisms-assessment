# Student Registration Form

A simple and professional student registration form built with React. This form includes validation, error handling, and a clean user interface.

## Features

- ✅ Complete student information collection
- ✅ Real-time form validation
- ✅ Error messages for invalid inputs
- ✅ Responsive design (works on mobile and desktop)
- ✅ Clean and professional UI
- ✅ Success message after submission

## Fields Included

### Personal Information
- Full Name
- Email Address
- Age
- Phone Number
- Gender

### Address Information
- Street Address
- City
- State (Indian states dropdown)
- ZIP Code

### Guardian Information
- Guardian Name
- Guardian Phone Number

### Academic Information
- Previous Education
- Course Selection
- Hostel Interest (optional)

### Terms & Conditions
- Accept terms checkbox

## Installation Steps

### Step 1: Prerequisites
Make sure you have **Node.js** installed on your computer.
- Download from: https://nodejs.org/

### Step 2: Create React App
Open your terminal/command prompt and run:
```bash
npx create-react-app student-registration-form
cd student-registration-form
```

### Step 3: Add the Form Component
1. Create a new file: `src/StudentForm.jsx`
2. Copy and paste the **StudentForm component code** into this file

### Step 4: Add the CSS File
1. Create a new file: `src/StudentForm.css`
2. Copy and paste the **CSS code** into this file

### Step 5: Update App.js
Open `src/App.js` and replace its content with:
```javascript
import StudentForm from './StudentForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <StudentForm />
    </div>
  );
}

export default App;
```

### Step 6: Update App.css (Optional)
Open `src/App.css` and replace with:
```css
.App {
  margin: 0;
  padding: 0;
}
```

### Step 7: Run the Application
In your terminal, run:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## How to Use

1. Fill in all required fields (marked with *)
2. The form will show error messages if:
   - Required fields are empty
   - Email format is incorrect
   - Phone numbers are not 10 digits
   - Age is below 16
   - Name contains numbers or special characters
3. Accept the terms and conditions
4. Click "Submit Registration"
5. A success message will appear after successful submission

## Validation Rules

| Field | Rule |
|-------|------|
| Name | Required, minimum 2 characters, letters only |
| Email | Required, valid email format |
| Age | Required, between 16-100 |
| Phone | Required, exactly 10 digits |
| Gender | Required |
| City | Required |
| State | Required |
| ZIP Code | Required, exactly 6 digits |
| Guardian Name | Required, letters only |
| Guardian Phone | Required, exactly 10 digits |
| Previous Education | Required |
| Course | Required |
| Terms | Must be accepted |

## File Structure
```
student-registration-form/
├── public/
├── src/
│   ├── StudentForm.jsx      # Main form component
│   ├── StudentForm.css      # Form styling
│   ├── App.js               # Main app file
│   ├── App.css              # App styling
│   └── index.js             # Entry point
├── package.json
└── README.md
```

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **CSS3** - For styling
- **HTML5** - Form structure

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Customization

### Change Colors
Edit `StudentForm.css` and modify these colors:
- Header color: `.form-header { background-color: #2c3e50; }`
- Button color: `.submit-button { background-color: #3498db; }`
- Error color: `.error-text { color: #dc3545; }`

### Add More Fields
1. Add new field to `formData` state in `StudentForm.jsx`
2. Add validation in `validateField()` function
3. Add HTML input in the return section
4. Style the field in `StudentForm.css`

### Change Form Width
Edit `StudentForm.css`:
```css
.form-container {
  max-width: 900px; /* Change this value */
}
```

## Troubleshooting

**Form doesn't appear:**
- Check if StudentForm.jsx and StudentForm.css are in the src folder
- Make sure you imported StudentForm in App.js

**Validation not working:**
- Check console for errors (F12 in browser)
- Make sure all field names match between HTML and validation

**Styling looks wrong:**
- Clear browser cache (Ctrl+F5)
- Check if StudentForm.css is imported correctly

## Future Enhancements

- [ ] Add file upload for documents
- [ ] Save data to database
- [ ] Add date picker for date of birth
- [ ] Email confirmation after registration
- [ ] Print registration form option
- [ ] Multi-language support

## License

Free to use for educational and commercial projects.

## Support

If you have questions or issues:
1. Check the troubleshooting section
2. Review the validation rules
3. Make sure all files are in correct locations
