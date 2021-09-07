
import express from 'express';
import winston from 'winston';
import {proprietariosRouter} from './routes/proprietarios.routes.js';
import {animaisRouter} from './routes/animais.routes.js';
import dotenv from 'dotenv';
import {  handleError } from './util/error.handler.js';

dotenv.config();
const app = express();

global.logger = winston.createLogger({
  level: 'silly',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: './logs/combined.log' }),
  ],
});
 
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));   
}

app.use(express.json());
app.use('/proprietario', proprietariosRouter );
app.use('/animal', animaisRouter );


app.get('/', function (req, res) {
    res.send(process.env.DB_CONNECTION_STRING);
  });

  
app.use((err, req, res, next) => {
    handleError(err, res);
  });
   
  app.listen(3000, ()=> {      
      logger.info('API Stared');      
  });
  