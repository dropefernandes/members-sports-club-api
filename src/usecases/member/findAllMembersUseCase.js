const HttpStatus = require('http-status')

const AddressRepository = require('../../repositories/address-repository')
const SportRepository = require('../../repositories/sport-repository')
const EnrollmentRepository = require('../../repositories/enrollment-repository')
const MemberRepository = require('../../repositories/member-repository')

const { defaultResponse, errorResponse } = require('../../utils/defaultResponse')

class FindAllMembersUseCase {

	constructor(app) {
		this.addressRepository = new AddressRepository(app)
		this.sportRepository = new SportRepository(app)
		this.enrollmentRepository = new EnrollmentRepository(app)
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