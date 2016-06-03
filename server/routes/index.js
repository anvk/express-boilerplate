import express from 'express';

import * as clients from './clients.js';

const router = express.Router();

router.get('/ping', (req, res) => res.json({ message: 'pong' }));

// Clients -----------------------------------
router.get([
  '/clients',
  '/clients/:clientid'
], clients.get);
router.post('/clients', clients.create);
router.put('/clients/:clientid', clients.update);
router.delete('/clientid/:clientid', clients.remove);
//---------------------------------------------

export default router;
