// src/components/TimeTable.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const TimeTable = () => {
  const [data, setData] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // ฟังก์ชันดึงข้อมูลจาก API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();

    // ฟังก์ชันในการอัปเดตเวลา
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setCurrentTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000); // อัปเดตทุกๆ 60 วินาที

    return () => clearInterval(intervalId); // เคลียร์อินเตอร์วัลเมื่อคอมโพเนนต์ถูกลบ
  }, []);

  // ฟังก์ชันในการคำนวณสรุปผล
  const calculateStatus = (working, target, startTime, endTime) => {
    if (currentTime < startTime || currentTime >= endTime) {
      return '';
    }
    if (working === target) {
      return 'พอดี';
    } else if (working > target) {
      return 'ทันเวลา';
    } else {
      return 'ล่าช้า';
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>เวลา</TableCell>
            <TableCell>Working</TableCell>
            <TableCell>Target</TableCell>
            <TableCell>สรุปผล</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            { time: '08.00-10.00', startTime: '08:00', endTime: '10:00' },
            { time: '10.00-12.00', startTime: '10:00', endTime: '12:00' },
            { time: '12.00-14.00', startTime: '12:00', endTime: '14:00' }
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{/* ดึงค่า working จาก API */}</TableCell>
              <TableCell>{/* ดึงค่า target จาก API */}</TableCell>
              <TableCell>
                {calculateStatus(
                  /* ใส่ค่า working */ 0,
                  /* ใส่ค่า target */ 0,
                  row.startTime,
                  row.endTime
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TimeTable;
