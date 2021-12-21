const httpStatus = require('http-status')

const SportRepository = require('../../repositories/sport-repository')

const { defaultResponse, errorResponse } = require('../../utils/defaultResponse')

class FindAllSportsUseCase {

	constructor(app) {
		this.sportRepository = new SportRepository(app)
	}

	async handler() {

		try {
			const result = await this.sportRepository.findAll()
			return defaultResponse(result)
		} catch (err) {
			return errorResponse(err.message, httpStatus.UNPROCESSABLE_ENTITY)
		}
	}
}

module.exports = FindAllSportsUseCase