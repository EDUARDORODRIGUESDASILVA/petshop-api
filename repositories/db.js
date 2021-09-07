import pg from 'pg';
//     async query(query, data) {    
//         const conString =  process.env.DB_CONNECTION_STRING; //Can be found in the Details page
//         const client = new pg.Client(conString);
//         client.connect(function(err) {
//         if(err) {
//           return console.error('could not connect to postgres', err);
//         }
//         client.query(query, data, function(err, result) {
//         if(err) {
//           throw ('error running query', err);
//             // return console.error('error running query', err);
//         }
        
//         const res = result.rows;      
//         client.end();
//         console.log('b', res);
//         return res;
//         // >> output: 2018-08-23T14:02:57.117Z
        
//     });
// });
//     }  

 async function connect() {
      try {
        const  connectionString =  process.env.DB_CONNECTION_STRING; //Can be found in the Details page
        
        if (!global.pool) {
        const pool = await new pg.Pool({
          connectionString,
         }); 
         global.pool = pool;
       } 

        const conn = await global.pool.connect();          
        return conn;
      } catch (error) {
        console.log(error);
        global.logger.error({message: error.message });  
        throw Error('falha ao conectar com o banco de dados');
      }
    }
  


export default {connect};