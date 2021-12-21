const httpStatus = require('http-status')

const SportRepository = require('../../repositories/sport-repository')

const { defaultResponse, errorResponse } = require('../../utils/defaultResponse')

class CreateSportUseCase {

	constructor(app) {
		this.sportRepository = new SportRepository(app)
	}

	async handler(data) {

		try {
			const result = await this.sportRepository.save(data)
			return defaultResponse(result, httpStatus.CREATED)
		} catch (err) {
			return errorResponse(err.message, httpStatus.UNPROCESSABLE_ENTITY)
		}
	}
}

module.exports = CreateSportUseCase