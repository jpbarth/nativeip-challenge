import path from 'path';
import dotenv from 'dotenv';

const json = {
  a: 1,
  b: 2
}

dotenv.config({
  path: path.resolve(__dirname, '../../../.env')
});