import { Link } from 'react-router-dom';
import './index.css';

const Welcome = () => {
  return (
    <div className="welcome-page" style={{
      minHeight: '90vh',
      maxWidth: '350px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: '60px',
      background: '#f8f8f8',
      border: '10px',
      borderRadius: '10px', 
      marginLeft:'40%',
      marginBottom:'25px',
      marginTop:'25px'
      // Optional: Adds spacing around the border
    }}>
      <div className="container">
        <div style={{ maxWidth: '300px', marginBottom: '10px' }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '10px'
          }}>Welcome to PopX</h1>
          <p style={{
            fontSize: '1.1 rem',
            color: '#2d3436',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>Lorem ipsum dolor sit amet,  consecteture adipiscing elit,</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Link to="/register" className="btn btn-primary">Create Account</Link>
            <Link to="/login" className="btn btn-outline">Already registered?Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
