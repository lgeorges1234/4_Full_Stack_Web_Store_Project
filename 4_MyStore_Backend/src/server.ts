import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ordersRoutes from './handlers/ordersStore';
import productsRoutes from './handlers/productsStore';
import usersRoutes from './handlers/usersStore';
import dashboardRoutes from './handlers/dasboardStore';

const app: express.Application = express();
const address: string = '127.0.0.1:8080';

app.use(bodyParser.json());

app.use(cors(({ origin: true, credentials: true })))

app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

ordersRoutes(app);
productsRoutes(app);
usersRoutes(app);
dashboardRoutes(app);

app.listen(8080, () => {
  console.log(`starting app on: ${address}`);
});

export default app;
