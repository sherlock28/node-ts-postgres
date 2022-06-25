import { Pool } from 'pg';

const defaultConfig = {
    pghost: "localhost",
    pgport: 5432,
    pgdatabase: "testsh",
    pguser: "postgres",
    pgpassword: "postgres"
}

const currentConfig = {
    host: process.env.PGHOST || defaultConfig.pghost,
    user: process.env.PGUSER || defaultConfig.pguser,
    password: process.env.PGPASSWORD || defaultConfig.pgpassword,
    database: process.env.PGDATABASE || defaultConfig.pgdatabase,
    port: process.env.PGPORT === undefined ? defaultConfig.pgport : parseInt(process.env.PGPORT)
};

export const pool = new Pool(currentConfig);
