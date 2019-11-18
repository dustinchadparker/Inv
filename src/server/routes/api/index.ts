import * as express from 'express';
import inventoryRouter from './store';

const router = express.Router();

router.use('/inventory', inventoryRouter);

export default router;