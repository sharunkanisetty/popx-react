import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    phone: '9876543210',
    email: 'john@example.com',
    password: 'password123',
    company: 'Acme Corp',
    hasExperience: 'no'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.fullName && formData.phone && formData.email &&
    formData.password && formData.company;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
        navigate('/dashboard', { state: formData });
    }
  };

  return (
    <div className="container" style={{
      minHeight: '90vh',
      maxWidth: '350px',
      marginBottom:'25px',
      marginTop:'25px',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: '40px'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: 'black',
          marginBottom: '20px'
        }}>Create your PopX account</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder=" "
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder=" "
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=" "
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder=" "
          />
        </div>

        <div className="form-group">
          <label style={{
            position: 'static',
            color: '#2d3436',
            padding: 0,
            background: 'transparent'
          }}>Are you an Agency?</label>
          <div className="radio-group">
            <div className="radio-option">
              <input
                type="radio"
                id="yes"
                name="hasExperience"
                value="yes"
                checked={formData.hasExperience === 'yes'}
                onChange={handleChange}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="no"
                name="hasExperience"
                value="no"
                checked={formData.hasExperience === 'no'}
                onChange={handleChange}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className='btn btn-primary'
          style={{ width: '100%', marginTop: '20px' }}
          disabled={!isFormValid}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
