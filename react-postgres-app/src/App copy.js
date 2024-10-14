import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import BasicTable from './components/Table';
import './App.css'; // เพิ่มไฟล์ CSS

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderTable = () => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.value}</td>
      </tr>
    ));
  };

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: 'My Dataset',
        data: data.map((item) => item.value),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  return (
    <>
      <div className="container">
        <h1>แสดงข้อมูลจาก — PostgreSQL</h1>

        <div className="content">
          {/* ตารางข้อมูล */}
          <div className="table-container">
            <h2>ตารางข้อมูล</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ชื่อ</th>
                  <th>ค่า</th>
                </tr>
              </thead>
              <tbody>
                {renderTable()}
              </tbody>
            </table>
          </div>

          {/* Donut Chart */}
          <div className="chart-container">
            <h2>โดนัทชาร์ต</h2>
            <Doughnut data={chartData} />
            <BasicTable/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
