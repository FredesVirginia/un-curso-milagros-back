
import { Router } from 'express';
import lecciones from './lecciones'; 

const router = Router();
 router.use("/lecciones" , lecciones);
 
    

export default router;