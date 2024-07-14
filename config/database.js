import {Sequelize} from 'sequelize';

const db = new Sequelize('railway','root','svNWuHHksfLXUltDTmLwrtfCleCAVfIn',{
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql"
});

export default db;