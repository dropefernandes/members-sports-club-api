const httpStatus = require('http-status')

const EnrollmentRepository = require('../../../repositories/enrollment-repository')
const SportRepository = require('../../../repositories/sport-repository')
const MemberRepository = require('../../../repositories/member-repository')

const { defaultResponse, errorResponse } = require('../../../utils/defaultResponse')

class GetEnrollmentByMemberUseCase {

	constructor(app) {
		this.enrollmentRepository = new EnrollmentRepository(app)
		this.sportRepository = new SportRepository(app)
		this.memberRepository = new MemberRepository(app)
	}

	async handler(memberId) {

		try {
			const member = await this.memberRepository.findById(memberId)

			if (member.length < 1) {
				return errorResponse('Member not found!', httpStatus.NOT_FOUND)
			}

			const enrollments = await this.enrollmentRepository.getByMember(memberId)

			return defaultResponse(enrollments)

		} catch (err) {
			errorResponse(err.message, httpStatus.UNPROCESSABLE_ENTITY)
		}

	}
}

module.exports = GetEnrollmentByMemberUseCase