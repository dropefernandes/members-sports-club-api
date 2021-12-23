const HttpStatus = require('http-status')

const MemberRepository = require('../../repositories/member-repository')
const { defaultResponse, errorResponse } = require('../../utils/defaultResponse')

class FindAllMembersUseCase {

	constructor(app) {
		this.memberRepository = new MemberRepository(app)
	}

	async handler () {
		
		try {
			const res = await this.memberRepository.findAll()
			return defaultResponse(res)
		} catch (err) {
			return errorResponse(err.message, HttpStatus.UNPROCESSABLE_ENTITY)
		}
	}
}

module.exports = FindAllMembersUseCase