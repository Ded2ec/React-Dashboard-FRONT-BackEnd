import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import './BarChart.css'; // นำเข้าไฟล์ CSS สำหรับจัดสไตล์
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const [chartDataA, setChartDataA] = useState([]);
  const [chartDataB, setChartDataB] = useState([]);

  useEffect(() => {
    // Fetch data for Chart A (working)
    fetch('http://localhost:5000/api/chart-a')
      .then(response => response.json())
      .then(data => setChartDataA(data))
      .catch(error => console.error('Error fetching chart A data:', error));
  }, []);

  useEffect(() => {
    // Fetch data for Chart B (target)
    fetch('http://localhost:5000/api/chart-b')
      .then(response => response.json())
      .then(data => setChartDataB(data))
      .catch(error => console.error('Error fetching chart B data:', error));
  }, []);

  // Combining data from both chartDataA and chartDataB
  const barData = {
    labels: chartDataA.map((item, index) => `Item ${index + 1}`),
    datasets: [
      {
        label: 'Working (Field A)',
        data: chartDataA.map(item => item.a),
        backgroundColor: '#36A2EB',
      },
      {
        label: 'Target (Field B)',
        data: chartDataB.map(item => item.b),
        backgroundColor: '#FF6384',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
      maintainAspectRatio: false, // ปิดการรักษาอัตราส่วน เพื่อให้ขยายได้เต็ม
    },
  };
  return (
    <div className="chart-container">
   
      <Bar data={barData} options={options} />
    </div>
     
  );
};

export default BarChart;
