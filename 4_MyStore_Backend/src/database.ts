import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
  POSTGRES_HOST_DEV,
  POSTGRES_DB_DEV,
  POSTGRES_USER_DEV,
  POSTGRES_PASSWORD_DEV,
  POSTGRES_HOST_TEST,
  POSTGRES_DB_TEST,
  POSTGRES_USER_TEST,
  POSTGRES_PASSWORD_TEST,
  PORT_DEV,
  ENV,
} = process.env;

// eslint-disable-next-line import/no-mutable-exports
let client: Pool = new Pool();
console.log(`ENV var: ${ENV}`);
console.log(`POSTGRES_HOST_TEST: ${POSTGRES_HOST_TEST}`)
console.log(`POSTGRES_HOST_DEV: ${POSTGRES_HOST_DEV}`)

if (ENV === 'test') {
  client = new Pool({
    host: POSTGRES_HOST_TEST,
    database: POSTGRES_DB_TEST,
    user: POSTGRES_USER_TEST,
    password: POSTGRES_PASSWORD_TEST,
  });
}

if (ENV === 'dev') {
  client = new Pool({
    host: POSTGRES_HOST_DEV,
    database: POSTGRES_DB_DEV,
    user: POSTGRES_USER_DEV,
    password: POSTGRES_PASSWORD_DEV,
  });
}

export default client;
