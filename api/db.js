import { Pool } from 'pg';

// 创建数据库连接池
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // 默认 PostgreSQL 端口号
});

export default pool;
