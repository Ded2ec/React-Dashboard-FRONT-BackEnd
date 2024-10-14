import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData( 'Frozen yoghurt', 159, <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }} > <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid black', fontSize: '15px', fontWeight: 'bold', }} > 1 </Box> <Box> 08.00 - 10.00 </Box> </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }} > <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid black', fontSize: '15px', fontWeight: 'bold', }} > 2 </Box> <Box> 10.00 - 12.00 </Box> </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }} > <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid black', fontSize: '15px', fontWeight: 'bold', }} > 3 </Box> <Box> 12.00 - 14.00 </Box> </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }} > <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid black', fontSize: '15px', fontWeight: 'bold', }} > 4 </Box> <Box> 14.00 - 16.00 </Box> </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }} > <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid black', fontSize: '15px', fontWeight: 'bold', }} > 5 </Box> <Box> 16.00 - 18.00 </Box> </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }} > <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid black', fontSize: '15px', fontWeight: 'bold', }} > 6 </Box> <Box> 18.00 - 20.00 </Box> </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }} > <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid black', fontSize: '15px', fontWeight: 'bold', }} > 7 </Box> <Box> 20.00 - 22.00 </Box> </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }} > <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid black', fontSize: '15px', fontWeight: 'bold', }} > 8 </Box> <Box> 22.00 - 00.00 </Box> </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }} > <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid black', fontSize: '15px', fontWeight: 'bold', }} > 9 </Box> <Box> 00.00 - 02.00 </Box> </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }} > <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid black', fontSize: '15px', fontWeight: 'bold', }} > 10 </Box> <Box> 02.00 - 08.00 </Box> </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ alignItems: 'center',  textAlign: 'center',   fontSize: '20px', fontWeight: 'bold' }}> 進捗(現時点)  </Box>, 24, 4.0 ),
  createData( 'Frozen yoghurt', 159, <Box sx={{ alignItems: 'center',  textAlign: 'center',   fontSize: '20px', fontWeight: 'bold' }}> 全体進捗/達成率  </Box>, 24, 4.0 ),

];

export default function TableL() {
  return (
    <TableContainer component={Paper}sx={{ width: '100%' ,height: '65%'}}>
      <Table sx={{ border: 1, borderColor: 'black' }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ border: 1, borderColor: 'black' }}>
        
            <TableCell align="right" rowSpan={2} sx={{ alignItems: 'center',  textAlign: 'center',  border: '2px solid black', fontSize: '20px', fontWeight: 'bold' , width: 200 }}> 進捗管理ポイント</TableCell>
            <TableCell align="right" colSpan={2} sx={{ alignItems: 'center',  textAlign: 'center',  border: '2px solid black', fontSize: '20px', fontWeight: 'bold' , width: 200 }}>C ライン</TableCell>
            <TableCell align="right" rowSpan={2} sx={{ alignItems: 'center',  textAlign: 'center',  border: '2px solid black', fontSize: '20px', fontWeight: 'bold' , width: 200 }}>特記事項</TableCell>
            <TableCell align="right"  rowSpan={2}  sx={{ border: 1, borderColor: 'black', width: 200  }}>(c)</TableCell>

            
          </TableRow>
         
           
            <TableCell align="right"    sx={{ alignItems: 'center',  textAlign: 'center',  border: '2px solid black', fontSize: '20px', fontWeight: 'bold' , width: 200 }}>目標</TableCell>
            <TableCell align="right"   sx={{ alignItems: 'center',  textAlign: 'center',  border: '2px solid black', fontSize: '20px', fontWeight: 'bold' , width: 200 }}>実績</TableCell>
         
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ border: 1, borderColor: 'black' }}>
              <TableCell align="right" sx={{ border: 1, borderColor: 'black' }}>{row.fat}</TableCell>
              <TableCell align="right" sx={{ border: 1, borderColor: 'black' }}>{row.carbs}</TableCell>
              <TableCell align="right" sx={{ border: 1, borderColor: 'black' }}>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
