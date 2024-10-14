import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './DonusChart.css'; // นำเข้าไฟล์ CSS สำหรับจัดสไตล์
ChartJS.register(ArcElement, Tooltip, Legend);

// สร้าง plugin สำหรับเพิ่มข้อความตรงกลางโดนัท
const centerTextPlugin = {
  id: 'centerTextPlugin',
  beforeDraw(chart) {
    const { ctx, width, height, config } = chart;
    ctx.save();
    const successValue = Math.round(config.data.datasets[0].data[0]); // ค่าความสำเร็จเป็นจำนวนเต็ม
    const text = `${successValue}%`; // ข้อความที่จะวาด
    ctx.font = 'bold 30px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    ctx.restore();
  },
};

function DonusChart() {
  const [successValue, setSuccessValue] = useState(0); // เริ่มต้นด้วยค่า 0

  useEffect(() => {
    // Fetch ข้อมูลค่าความสำเร็จจาก API
    fetch('http://localhost:5000/api/success')
      .then((response) => response.json())
      .then((data) => setSuccessValue(data.successValue))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    labels: [], // ซ่อนไม่ต้องแสดง labels
    datasets: [
      {
        data: [successValue, 100 - successValue], // ค่าความสำเร็จและส่วนที่เหลือ
        backgroundColor: ['#03C03C', '#EF0107'], // สีของชิ้นส่วนในแผนภูมิ
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false, // ไม่ต้องแสดง legend
      },
    },
  };

  return(
  <div className="DonusChart">
    <div style={{ width: '300px', height: '300px' }}>
  
  <Doughnut data={chartData} options={chartOptions} plugins={[centerTextPlugin]} />
  </div>
  </div>
  );
}

export default DonusChart;
