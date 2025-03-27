const sql = require('mssql');

// Konfigurationsoplysninger (du kan evt. lægge password i en .env-fil)
const config = {
  server: 'invest-app.database.windows.net',
  port: 1433,
  database: 'invest-app',
  user: 'celina',
  password: 'Fes65pkj',
  options: {
    encrypt: true, // Påkrævet af Azure
    trustServerCertificate: false
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

// Opret forbindelse og eksporter pool
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('✔️ Forbundet til SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('❌ Databaseforbindelsesfejl:', err);
  });

// Funktion til at køre en SQL-forespørgsel
async function executeQuery(query, params = {}) {
    try {
      const pool = await poolPromise;
      const request = pool.request();
  
      // Tilføj parameterer hvis der er nogen
      for (const [key, value] of Object.entries(params)) {
        request.input(key, value);
      }
  
      const result = await request.query(query);
      return result.recordset;
    } catch (err) {
      console.error('❌ Fejl i executeQuery:', err.message);
      throw err;
    }
  }
  
  module.exports = {
    sql,
    poolPromise,
    executeQuery
  };