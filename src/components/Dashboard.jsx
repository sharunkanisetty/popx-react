import { useLocation, useNavigate } from 'react-router-dom';
import profilePlaceholder from '../assets/profile-placeholder.jpeg';
import './index.css';

const Dashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const user = state || {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: 'N/A',
    company: 'N/A',
    hasExperience: 'no',
    photo: profilePlaceholder
  };

  // Optional: redirect if no data passed
  if (!state) {
    navigate('/');
    return null;
  }

  return (
    <div>
      {/* White Header */}
      <div style={{
        maxWidth: '350px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '15px',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '500',
          color: '#333',
          margin: 0
        }}>
          Account Settings
        </h2>
      </div>

      {/* Main Container */}
      <div className="container" style={{
        minHeight: '90vh',
        maxWidth: '350px',
        margin: '0 auto',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div style={{ width: '100%' }}>
          {/* Profile Row */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: '15px',
            gap: '15px'
          }}>
            {/* Profile Image */}
            <div style={{ position: 'relative' }}>
            <img 
  src={profilePlaceholder} 
  alt="Profile"
  style={{
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #6c5ce7'
  }} 
/>

              <div style={{
                position: 'absolute',
                bottom: '-5px',
                right: '-5px',
                backgroundColor: '#8a2be2',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                  viewBox="0 0 24 24" fill="none"
                  stroke="#ffffff" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </div>
            </div>

            {/* User Info */}
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'black',
                marginBottom: '4px'
              }}>{user.fullName}</h3>
              <p style={{
                fontSize: '0.9rem',
                color: 'black',
                marginBottom: '0'
              }}>{user.email}</p>
            </div>
          </div>

          {/* Paragraph Section */}
          <div style={{
            paddingTop: '10px'
          }}>
            <p style={{
              fontSize: '0.75rem',
              color: 'black',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Lorem ipsum dolor sit amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
            </p>
          </div>

          {/* Dashed Separator */}
          <div style={{
            borderBottom: '1.99px dashed #ddd',
            marginTop: '20px'
          }}></div>
          <div style={{
            borderBottom: '1.99px dashed #ddd',
            marginTop: '550px'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
