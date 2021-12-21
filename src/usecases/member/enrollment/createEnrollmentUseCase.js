const HttpStatus = require('http-status')

const AddressRepository = require('../../../repositories/address-repository')
const SportRepository = require('../../../repositories/sport-repository')
const EnrollmentRepository = require('../../../repositories/enrollment-repository')
const MemberRepository = require('../../../repositories/member-repository')

const { defaultResponse, errorResponse } = require('../../../utils/defaultResponse')

class CreateEnrollmentUseCase {

	constructor(app) {
		this.addressRepository = new AddressRepository(app)
		this.sportRepository = new SportRepository(app)
		this.enrollmentRepository = new EnrollmentRepository(app)
		this.memberRepository = new MemberRepository(app)
	}

	async handler (data) {
		try {
			const { memberId, sportId } = data
			const enrollmentsByMemberId = await this.enrollmentRepository.getByMember(memberId)
			const isSportExisting = await this.sportRepository.findById(sportId)
			const isMemberExisting = await this.memberRepository.findById(memberId)

			if (!isSportExisting || !isMemberExisting) {
				return errorResponse('Sport or Member not found!', HttpStatus.NOT_FOUND)
			}

			const alreadyEnrollment = enrollmentsByMemberId.find(element => element.sportId === sportId)

			if (alreadyEnrollment) {
				return errorResponse('Enrollment already registered', HttpStatus.BAD_REQUEST)
			}

			const res = await this.enrollmentRepository.save(data)

			return defaultResponse(res, HttpStatus.CREATED)
		} catch (err) {
			return errorResponse(err.message, HttpStatus.UNPROCESSABLE_ENTITY)
		}
	}
}

module.exports = CreateEnrollmentUseCase