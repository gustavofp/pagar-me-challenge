import { Sequelize } from 'sequelize-typescript';

const database: Sequelize = new Sequelize({
    database: 'transactions',
    dialect: 'postgres',
    username: 'mzsligdp',
    password: '9uFH5Rz1lmyLwZlR3d3fbUzNuusBrS0F',
    storage: ':memory:',
    modelPaths: [__dirname + '/src/model']
});


export default database;
