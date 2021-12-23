class AddressRepository {

	constructor(app) {
		this.Address = app.datasource.models.ADDRESS
	}

	async save (data) {
		return await this.Address.create(data)
	}

	async findById (id) {
		return await this.Address.findOne({
			where: {
				id: id
			}
		})
	}
}

module.exports = AddressRepository
