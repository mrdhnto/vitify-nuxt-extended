import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const config = {
  main: {
    username: process.env.DB_USERNAME_MAIN,
    password: process.env.DB_PASSWORD_MAIN,
    database: process.env.DB_NAME_MAIN,
    config: {
      host: process.env.DB_HOST_MAIN,
      dialect: process.env.DB_DIALECT_MAIN,
      timezone: process.env.DB_TIMEZONE_MAIN,
      port: process.env.DB_PORT_MAIN, 
      define: {
        timestamps: false
      },
      pool: {
        max: 3,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      logging: false,
    }
  },
  others: { // you can put more than 1 DB's here
    secondDB: { // make sure this key name is unique and this will used as Sequelize Instances later
      username: process.env.DB_USERNAME_SECOND,
      password: process.env.DB_PASSWORD_SECOND,
      database: process.env.DB_NAME_SECOND,
      config: {
        host: process.env.DB_HOST_SECOND,
        port: process.env.DB_PORT_SECOND,
        dialect: process.env.DB_DIALECT_SECOND,
        timezone: process.env.DB_TIMEZONE_SECOND,
        define: {
          timestamps: false
        },
        pool: {
          max: 3,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        logging: false,
      }
    }
  }
};

export default config;