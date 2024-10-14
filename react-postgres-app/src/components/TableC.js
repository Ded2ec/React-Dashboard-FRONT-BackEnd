import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'; // เพิ่มไฟล์ CSS

const AppTB = () => {
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

  return <TableC data={data} />;
};

const TableC = ({ data }) => {
  const renderTable = () => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.value}</td>
      </tr>
    ));
  };

  return (
    <div>
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
  );
};

export default AppTB;
