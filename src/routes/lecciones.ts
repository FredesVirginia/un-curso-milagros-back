
import { Router} from "express"


const routerLecciones = Router();

routerLecciones.get("/" , (req : any , res: any)=>{
    res.send("Lista de Lecciones")
})


export default routerLecciones