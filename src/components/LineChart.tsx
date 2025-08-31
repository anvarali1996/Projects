// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// // Helper function to sort months
// const monthOrder = ["Oct", "Nov", "Dec", "Jan", "Feb", "March", ];
// const sortDiagnosisHistory = (data: any) => {
//   return data.sort((a: any, b: any) => {
//     if (a.year !== b.year) {
//       return a.year - b.year;
//     } else {
//       return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
//     }
//   });
// };

// const LineChart: React.FC<{ data: any }> = ({ data }) => {
//   // Sort data to ensure it starts from October 2023
//   const sortedData = sortDiagnosisHistory(data);

//   const labels = sortedData.map((d: any) => `${d.month} ${d.year}`);
//   const systolicData = sortedData.map((d: any) => d.blood_pressure.systolic.value);
//   const diastolicData = sortedData.map((d: any) => d.blood_pressure.diastolic.value);

//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Systolic',
//         data: systolicData,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: false,
//       },
//       {
//         label: 'Diastolic',
//         data: diastolicData,
//         borderColor: 'rgba(255, 99, 132, 1)',
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         fill: false,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//       },
//       title: {
//         display: true,
//         text: 'Blood Pressure Over Time',
//       },
//     },
//   };

//   return <Line data={chartData} options={options} />;
// };

// export default LineChart;


import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const monthOrder = [
"Oct", "Nov", "Dec", "Jan", "Feb", "March",
];

const sortDiagnosisHistory = (data: any) => {
  return data.sort((a: any, b: any) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
    }
  });
};

const LineChart: React.FC<{ data: any }> = ({ data }) => {
  const sortedData = sortDiagnosisHistory(data);

  const labels = sortedData.map((d: any) => `${d.month} ${d.year}`);
  const systolicData = sortedData.map((d: any) => d.blood_pressure.systolic.value);
  const diastolicData = sortedData.map((d: any) => d.blood_pressure.diastolic.value);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: '#C26EB4',
        backgroundColor: '#C26EB4',
        fill: false,
        tension: 0.4, // Adjust tension for wave-like curve
        borderWidth: 2, // Adjust line width
        pointRadius: 5, // Adjust marker size
        pointBackgroundColor: '#E66FD2', // Marker color
        innerWidth: '417px',
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#7E6CAB',
        backgroundColor: '#8C6FE6',
        fill: false,
        tension: 0.4, // Adjust tension for wave-like curve
        borderWidth: 2, // Adjust line width
        pointRadius: 5, // Adjust marker size
        pointBackgroundColor: '#8C6FE6', // Marker color
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        // text: 'Blood Pressure',
      },
    },
    elements: {
      line: {
        cubicInterpolationMode: 'monotone' as const, // Set as const to satisfy TypeScript
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: 'Month',
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Value',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
