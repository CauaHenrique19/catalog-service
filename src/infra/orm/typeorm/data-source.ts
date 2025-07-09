import { DataSource } from 'typeorm';
import { Media, Category } from '@catalog-service/infra/orm/entities';
import { CONFIG } from 'src/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: CONFIG.DATABASE_HOST,
  port: CONFIG.DATABASE_PORT,
  username: CONFIG.DATABASE_USERNAME,
  password: CONFIG.DATABASE_PASSWORD,
  database: CONFIG.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [Category, Media],
  subscribers: [],
  migrations: [],
});
