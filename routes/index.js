const express = require('express')
const router =express.Router();
const clientesController=require('../controllers/clientesController')

module.exports=function(){
    router.post('/clientes',clientesController.nuevoCliente)
    router.put('/clientes/:idCliente',clientesController.actualizarCliente)
    router.get('/clientes/ver',clientesController.verCliente)
    router.delete('/clientes/eliminar/:idCliente',clientesController.eliminarCliente)

    return router;
}