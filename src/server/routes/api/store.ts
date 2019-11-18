import * as express from 'express';
import * as Inventory from '../../inventoryStore';

const router = express.Router();

router.get('/:id?', (req, res, next) => {
    let id = req.params.id

    if(id) {
        res.send(Inventory.GetChirp(id));
    } else {
        res.send(Inventory.GetInventory());
    }
    
});


export default router;