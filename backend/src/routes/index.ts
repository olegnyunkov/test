import { Router } from 'express';
import { getData } from "../controllers/controller";

const router: Router = Router();

router.post('/email', getData);

export default router;
