const express = require('express');
const router = express.Router();

const tToken = require( '../Controller/transfer-token.js');
let TransferToken = require('../mongoSchema/networkBridgeSchema.js')/
// Importing our database here.


// get methods
router.get('/', tToken.getTransferTokenS);


// post method
router.post('/',tToken.createTransferToken);
// post method ends here


// performing filteration here

// By id
router.get('/:id',tToken.getTokenTransfer);

// Deleting entries from the database
router.delete('/:id',tToken.deleteTransferToken);

// Updating the entries from database
router.patch('/:id',tToken.updateTransferToken);

// Exporting our router
module.exports = router
