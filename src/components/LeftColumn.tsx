// import React from 'react';
// import '../style/LeftColumn.css';

// const LeftColumn: React.FC = () => {
//   const people = [
//     { name: "Emily Williams", gender: "Female", age: 18 },
//     { name: "Ryan Johnson", gender: "Male", age: 45 },
//     { name: "Brandon Mitchell", gender: "Male", age: 36 },
//     { name: "Jessica Taylor", gender: "Female", age: 28 },
//     { name: "Samatha Johnson", gender: "Female", age: 56 },
//     { name: "Ashley Martinez", gender: "Female", age: 54 },
//     { name: "Olivia Brown", gender: "Female", age: 32 },
//     { name: "Tyler Davis", gender:  "Male", age: 19 },
//     { name: "Kevin Anderson", gender: "Male", age: 30 },
//     { name: "Dylan Tompson", gender: "Male", age: 36 },
//     { name: "Nathan Evans", gender: "Male", age: 58 },
//     { name: "Mike Nolan", gender: "Male", age: 31 }
//   ];

//   return (
//     <div>
//       <h3>People</h3>
//       <ul className="list-group">
//         {people.map(person => (
//           <li key={person.name} className="list-group-item">
//             <div className="person-item">
//               <img 
//                 src={`src/assets/${person.name.replace(" ", "_")}.png`} 
//                 // src='src/assets/${person.name.replace(" ", "_")}.png' 

//                 alt={person.name} 
//                 className="person-image"
//               />
//               <div className="person-info">
//                 <p>{person.name}</p>
//                 <p>{person.gender}, {person.age}</p>
//               </div>
//             <img className='dots' src="src/assets/dots.svg" alt="" />

//             </div>
//             {/* <img src="src/assets/dots.svg" alt="" /> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LeftColumn;


import React, { useState } from 'react';
import '../style/LeftColumn.css';

const LeftColumn: React.FC = () => {
  const people = [
    { name: "Emily Williams", gender: "Female", age: 18 },
    { name: "Ryan Johnson", gender: "Male", age: 45 },
    { name: "Brandon Mitchell", gender: "Male", age: 36 },
    { name: "Jessica Taylor", gender: "Female", age: 28 },
    { name: "Samatha Johnson", gender: "Female", age: 56 },
    { name: "Ashley Martinez", gender: "Female", age: 54 },
    { name: "Olivia Brown", gender: "Female", age: 32 },
    { name: "Tyler Davis", gender: "Male", age: 19 },
    { name: "Kevin Anderson", gender: "Male", age: 30 },
    { name: "Dylan Tompson", gender: "Male", age: 36 },
    { name: "Nathan Evans", gender: "Male", age: 58 },
    { name: "Mike Nolan", gender: "Male", age: 31 }
  ];

  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  const handleDotsClick = (name: string) => {
    setSelectedPerson(name === selectedPerson ? null : name);
  };

  return (
    <div className='pacient-list'>
      <h3 className='title'>Pacients</h3>
      <ul className="list-group">
        {people.map(person => (
          <li key={person.name}
          className={`list-group-item ${person.name === "Jessica Taylor" ? "highlight" : ""}`}
            // className="list-group-item"
          >
            <div className="person-item">
              <div className="person-info">
                <img 
                  src={`src/assets/${person.name.replace(" ", "_")}.png`} 
                  alt={person.name} 
                  className="person-image"
                />
                <div className="info-pacient-text">
                  <p>{person.name}</p>
                  <p className='textofdata'>{person.gender}, {person.age}</p>
                </div>
              </div>
              <img 
                className='dots' 
                src="src/assets/dots.svg" 
                alt="More details" 
                onClick={() => handleDotsClick(person.name)}
              />
            </div>
            {selectedPerson === person.name && (
              <div className="person-details">
                <p>More details about {person.name}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftColumn;
