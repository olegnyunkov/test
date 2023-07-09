import { config } from 'dotenv';
import { join } from "path";

config({
  path: join(__dirname, '..', '..', '.env'),
});

const {
  PORT = 4000,
} = process.env;

export { PORT };
