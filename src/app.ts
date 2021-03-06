import * as bodyParser from 'body-parser';
import express from 'express';
import { Application } from 'express';
import Controller from './interface/Controller';
import { Sequelize } from 'sequelize-typescript';
import Transaction from './model/Transaction';
import Card from './model/Card';
import Customer from './model/Customer';
import Payable from './model/Payable';
import PaymentMethod from './model/PaymentMethod';
import { config, DotenvConfigOptions } from 'dotenv';
import { resolve } from 'path';
class App {
  public app: Application;
  private sequelize: Sequelize;

  constructor(controllers: Controller[]) {
    this.initializeEnv();

    this.app = express();

    this.sequelize = this.initializeDatabase();
    this.initializeModels();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen() {
    this.app.listen(process.env.PORT || 3000, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }

  private initializeEnv(): void {
    const envConfig: DotenvConfigOptions = {
      path: resolve(__dirname, '../variables.env')
    }
    config(envConfig);
  }

  private initializeDatabase(): Sequelize {
    return new Sequelize({
      host: process.env.DATABASE_HOST || '',
      database: process.env.DATABASE_NAME || '',
      dialect: 'postgres',
      username: process.env.DATABASE_USER || '',
      password: process.env.DATABASE_PASS || '',
      modelPaths: [__dirname + '/src/model'],
      define: {
        schema: process.env.DATABASE_SCHEMA || ''
      }
    });
  }

  private initializeModels(): void {
    this.sequelize.addModels([
      Transaction,
      Card,
      Customer,
      Payable,
      PaymentMethod
    ])
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
}

export default App;

