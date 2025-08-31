import React from 'react';
import '../style/RightColumn.css';
import "../font.css";
const RightColumn: React.FC<{ person: any }> = ({ person }) => {
  return (
    <div>
      <div className="mb-3 main-personal">
        {/* <h3>Personal Information</h3> */}
        <div className="personal-info">
          <div className="personal-body">
        
            <img src='src/assets/Layer 2@2x.jpg' alt={person.name} className="img-fluid rounded-circle mb-3" style={{width:"200px"}}/>
            <h4>{person.name}</h4>
            <div className="info-item">
                <img src="src/assets/BirthIcon@2x.png" alt="" />
                <div className="info-item-text">
                <p className='dataofpacient'>Date of Birth</p>
                <p>{person.date_of_birth}</p>
              </div>
            </div>
            <div className="info-item">
                <img src="src/assets/FemaleIcon@2x.png" alt="" />
                <div className="info-item-text">
                <p className='dataofpacient'>Gender</p>
                <p>{person.gender}</p>
              </div>
            </div>
             <div className="info-item">
                <img src="src/assets/PhoneIcon@2x.png" alt="" />
                <div className="info-item-text">
                  <p className='dataofpacient'>Contact Info</p>
                  <p>{person.phone_number}</p>
                </div>
            </div>
            <div className="info-item">
                <img src="src/assets/PhoneIcon@2x.png" alt="" />
                <div className="info-item-text">
                  <p className='dataofpacient'>Emergency Contact</p>
                  <p>{person.emergency_contact}</p>
                </div>
            </div>
            <div className="info-item">
                <img src="src/assets/InsuranceIcon@2x.png" alt="" />
                <div className="info-item-text">
                  <p className='dataofpacient'>Insurance Provider</p>
                  <p>{person.insurance_type}</p>
                </div>
            </div>
           <div>
      
              <div className='button'>
<button className='info-button'><h5>Show All Information</h5></button>
              </div>
                
        
      
    </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Lab Results</h3>
        <div className="card">
          <div className="personal-body">
            <ul>
              {person.lab_results.map((result: string, index: number) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightColumn;
