// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: '123456',
//   database: 'practice'
// });

// connection.query(
//   'SELECT * FROM customers',
//   function(err, results, fields) {
//     console.log(results);
//     console.log(fields.map(item => item.name)); 
//   }
// );


const mysql = require('mysql2/promise');

(async function() {
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'practice',
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10, 
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
      });

    // const [results] = await pool.query('select * from customers');
    // console.log(results);
	
		const connection = await pool.getConnection();

		const [results] = await connection.query('select * from orders');
		console.log(results);
		
})();
