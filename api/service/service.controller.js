const {
  createService,
  deleteService,
  getAllServices,
  getServiceById,
  getServicesByUserId,
  updateService,
} = require('./service.service')

async function getAllServicesHandler(req, res) {
  try{
    const services = await getAllServices();
    return res.status(200).json(services)
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createServiceHandler(req, res) {
  const serviceData = req.body;
  try {
    const service = await createService(serviceData);
    return res.status(200).json(service);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function getServiceByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const service = await getServiceById(id);

    if (!service) {
      return res.status(404).json({ message: `Service not found with id: ${id}` });
    }

    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getServiceByUserIdHandler(req, res){
    const {id} = req.params;
    try {
      const service = await getServicesByUserId(id);
      if(!service) {
        return res.status(404).json({
          message: `service with user id ${id} not found`
        });
      }
      return res.status(200).json(service);
    } catch(err) {
      return res.status(500).json({
        error: err.message
      })
    }
}

async function updateServiceHandler(req, res) {
  const { id } = req.params;
  try {
    const service = await updateService(id, req.body);
    if(!service) {
      return res.status(404).json({
        message: `service with id ${id} not found`
      });
    }
    return res.status(200).json(service);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function deleteServiceByIdHandler(req, res){
  const { id } = req.params;
  try {
    const service = await deleteService(id);
    if(!service) {
      return res.status(404).json({
        message: `service with id ${id} not found`
      });
    }
    return res.status(200).json(service);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}


module.exports = {
  getAllServicesHandler,
  createServiceHandler,
  getServiceByIdHandler,
  getServiceByUserIdHandler,
  updateServiceHandler,
  deleteServiceByIdHandler,
}
