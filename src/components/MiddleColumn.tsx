// import React from 'react';
// import LineChart from './LineChart';

// const MiddleColumn: React.FC<{ person: any }> = ({ person }) => {
//   return (
//     <div>
//       <div className="mb-3">
//         <h3>Diagnostic History</h3>
//         <div className="card">
//           <div className="card-body">
//             <LineChart data={person.diagnosis_history} />
//           </div>
//         </div>
//       </div>
//       <div>
//         <h3>Diagnostic Lists</h3>
//         <div className="row">
//           {person.diagnostic_list.map((diagnostic: any, index: number) => (
//             <div key={index} className="col">
//               <div className="card">
//                 <div className="card-body">
//                   <h5>{diagnostic.name}</h5>
//                   <p>{diagnostic.description}</p>
//                   <p>Status: {diagnostic.status}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MiddleColumn;



import React, { useState } from 'react';
import LineChart from './LineChart';
import '../style/MiddleColumn.css';
// Define monthOrder globally in this file
const monthOrder = [
  "Oct", "Nov", "Dec", "Jan", "Feb", "March",
];

const MiddleColumn: React.FC<{ person: any }> = ({ person }) => {
  const [timeRange, setTimeRange] = useState('6months');

  const getFilteredData = (data: any, range: string) => {
    // Sort data based on monthOrder and filter based on range
    const sortedData = data.sort((a: any, b: any) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
      }
    });

    if (range === '1month') {
      return sortedData.slice(-1);
    } else if (range === '4months') {
      return sortedData.slice(-4);
    } else {
      return sortedData.slice(-6);
    }
  };

  const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value);
  };

  const filteredData = getFilteredData(person.diagnosis_history, timeRange);
  const latestData = filteredData[filteredData.length - 1] || {};
  return (
    <div>
      <div className="mb-3">
        
        <div className="card">
          <h3>Diagnostic History</h3>
          <div className="card-body">
            <div className="chart mb-3">
              {/* <h6>Blood Pressure</h6> */}
              <label htmlFor="timeRange" className="form-label">Blood Pressure</label>
              <select id="timeRange" className="form-select" value={timeRange} onChange={handleTimeRangeChange}>
                <option className='chartoption' value="6months">Last 6 Months</option>
                <option className='chartoption' value="4months">Last 4 Months</option>
                <option className='chartoption' value="1month">Last 1 Month</option>
              </select>
            </div>
            <LineChart data={filteredData} />
          </div>
          <div className='belowInfo'>
            <div className='ofinfo'>
              <img className='imagesofinfo' src="src/assets/respiratory rate@2x.png" alt="" />
              <p className='textofpng'>Respirate Rate</p>
              <h4 className='textRate'>{latestData.respiratory_rate ? `${latestData.respiratory_rate.value}` : 'N/A'} bpm</h4>
            </div>
            <div className='ofinfo1'>
              <img className='imagesofinfo' src="src/assets/temperature@2x.png" alt="" />
              <p className='textofpng'>Temperature</p>
              <h4 className='textRate'>{latestData.temperature ? `${latestData.temperature.value}` : 'N/A'} °F</h4>
            </div>
            <div className='ofinfo2'>
              <img className='imagesofinfo' src="src/assets/HeartBPM@2x.png" alt="" />
              <p className='textofpng'>Heart Rate</p>
              <h4 className='textRate'>{latestData.heart_rate ? `${latestData.heart_rate.value}` : 'N/A'} bpm</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Diagnostic Lists</h3>
        <div className="row">
          {person.diagnostic_list.map((diagnostic: any, index: number) => (
            <div key={index} className="col">
              <div className="card">
                <div className="card-body-mini">
                  <h5>{diagnostic.name}</h5>
                  <p>{diagnostic.description}</p>
                  <p>Status: {diagnostic.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiddleColumn;
