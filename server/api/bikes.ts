import { readFileSync } from 'fs';
import { resolve } from 'path';

export default () => {
  const filePath = resolve(process.cwd(), 'server/data/bikes.json');
  const data = readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}