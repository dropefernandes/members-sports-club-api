class AddressRepository {

	constructor(app) {
		this.Address = app.datasource.models.ADDRESS
	}

	async save (data) {
		return this.Address.create(data)
	}
}

module.exports = AddressRepository
