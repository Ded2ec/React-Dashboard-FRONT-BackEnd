const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// ตั้งค่า PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'product_db',
  password: '15229',
  port: 5432,
});

app.use(cors());
app.use(express.json());



///////////////////////////////////////////////

// API ดึงข้อมูลจาก PostgreSQL
app.get('/api/data', async (req, res) => {
  try {
    // Query ดึงข้อมูล working และ target
    const result = await pool.query(`
      SELECT id, working, target 
      FROM products 
      ORDER BY id 
      LIMIT 1;
    `);
    
    // ส่งข้อมูลกลับไปที่ frontend
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});





//////////////////////////////////////////////////////







// API ดึงข้อมูลจาก PostgreSQL
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// API ดึงค่าความสำเร็จจาก PostgreSQL
app.get('/api/success', async (req, res) => {
  try {
    // Query เพื่อดึงค่าความสำเร็จ (percentage)
    const result = await pool.query("SELECT today, (CAST(working AS DECIMAL(10, 2)) / CAST(target AS DECIMAL(10, 2))) * 100 AS percentage FROM products WHERE line = 'B' LIMIT 1");

    // ดึงค่า percentage ของแถวแรก
    const successValue = result.rows[0].percentage; 
    res.json({ successValue }); // ส่งค่าความสำเร็จไปยัง client
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// API ดึงข้อมูลจากฟิลด์ a (working)
app.get('/api/chart-a', async (req, res) => {
  try {
    const resulta = await pool.query('SELECT SUM(working) AS total_working FROM products WHERE today = CURRENT_DATE');
    res.json([{ a: resulta.rows[0].total_working }]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// API ดึงข้อมูลจากฟิลด์ b (target)
app.get('/api/chart-b', async (req, res) => {
  try {
    const resultb = await pool.query('SELECT SUM(target) AS total_target FROM products WHERE today = CURRENT_DATE');
    res.json([{ b: resultb.rows[0].total_target }]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
