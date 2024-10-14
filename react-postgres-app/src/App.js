import 'chart.js/auto';
import './App.css'; // เพิ่มไฟล์ CSS

import TableL from './components/TableL';
import DonusChart from './components/Chart_Donus';
import BarChart from './components/Chart_Bar';
import DataTable from './components/TTable';





export default function App() {
  return (
    <>
    
    <h1 style={{ color: 'white' }}>&nbsp;&nbsp;&nbsp;&nbsp;本日実施分</h1>
    <p style={{ fontWeight: 'bold',color: 'white', fontSize: '30px',  textAlign: 'left' ,margin:'20'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#23C 自動実装ライン 進捗管理板 単位:台</p>
      <div className="container">
   
        <div className="boxA">
          
          <div className="table-container">
            {/* <TableL /> */}
            <DataTable />
          </div>
        </div>
        
        <div className="boxC">
          <div className="chart-container">
              <DonusChart />
              <div className="text-container">
              <h2>เป้าหมาย</h2>
              </div>
               <BarChart /> 
          
        </div>   
        </div>
      </div>
    </>
  );
} 
