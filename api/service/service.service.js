const Service = require('./service.model');

/**
 * Get all services
 * @returns all services
 */

 async function getAllServices() {
  const services = Service.find();
  return services;
}



/**
 * Get service by id
 * @param {string} id Indentifier of the service to be filtered
 * @returns service
*/

async function getServiceById (id) {
  const service = Service.findById(id).populate('user');
  return service;
}


/**
 * Get service by user id
 * @param {string} id Indentifier of the service to be filtered
 * @returns services
*/

async function getServicesByUserId(id) {
  const services = await Service.find({user: id});
  return services;

}

/**
 * Create a new service
 * @param {Object} service Service to create
 * @returns service created
 */

async function createService(service) {
  const newService = new Service(service);
  const savedService = await newService.save();
  return savedService;
}

/**
 * Update a service
 * @param {string} id Indentifier of the service to be updated
 * @param {*} service Body of the service to be updated
 * @returns service updated
 */

async function updateService(id, service) {
  const updateService = await Service.findByIdAndUpdate(id, service);
  return updateService;
}

/**
 * Delete a service
 * @param {String} id Identifier of the service to be deleted
 * @returns Service deleted
 */

async function deleteService(id) {
  const deletedService = await Service.findByIdAndDelete(id)
  return deletedService;
}

module.exports = {
  getAllServices,
  getServiceById,
  getServicesByUserId,
  createService,
  updateService,
  deleteService,
}

