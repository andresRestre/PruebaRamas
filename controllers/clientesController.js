const Clientes= require('../models/clientes');

//Agregar nuevo cliente
exports.nuevoCliente=async(req,res)=>{
    const cliente =new Clientes(req.body);
try {
    await cliente.save();
    res.json({mensaje:'Se agrego un nuevo cliente'})
} catch (error) {
    console.log('Error',error)
}

}


//Actualizar nuevo cliente
exports.actualizarCliente=async(req,res,next)=>{
try {
    const cliente = await Clientes.findByIdAndUpdate({_id:req.params.idCliente},req.body,{new:true})
    res.json(cliente)
} catch (error) {
    console.log(error)
    next()
}

}


//Ver Clientes
exports.verCliente=async(req,res)=>{
    const cliente =new Clientes(req.body);
try {
    const cliente = await Clientes.find({});
    res.json(cliente)
} catch (error) {
    console.log('Error',error)
}

}


exports.eliminarCliente=async(req,res,next)=>{
    try {
        const cliente = await Clientes.findByIdAndDelete({_id:req.params.idCliente},req.body,{new:true})
        res.json('Cliente eliminado')
    } catch (error) {
        console.log(error)
        next()
    }
    
    }

/* exports.actualizarCliente=async(req,res)=>{
    const cliente =await Clientes.findById(req.params.idCliente);

    if(!cliente){
        res.json({mensaje:'El cliente no existe'})
        next();
    }


} */
