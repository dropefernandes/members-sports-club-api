const httpStatus = require('http-status')

const SportRepository = require('../../repositories/sport-repository')

const { defaultResponse, errorResponse } = require('../../utils/defaultResponse')

class FindSportByIdUseCase {

	constructor(app) {
		this.sportRepository = new SportRepository(app)
	}

	async handler(id) {

		try {
			const result = await this.sportRepository.findById(id)
			return defaultResponse(result)
		} catch (err) {
			return errorResponse(err.message, httpStatus.UNPROCESSABLE_ENTITY)
		}
	}
}

module.exports = FindSportByIdUseCase