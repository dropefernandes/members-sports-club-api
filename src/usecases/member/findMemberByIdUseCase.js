const HttpStatus = require('http-status')

const AddressRepository = require('../../repositories/address-repository')
const SportRepository = require('../../repositories/sport-repository')
const EnrollmentRepository = require('../../repositories/enrollment-repository')
const MemberRepository = require('../../repositories/member-repository')

const { defaultResponse, errorResponse } = require('../../utils/defaultResponse')

class FindMemberByIdUseCase {

	constructor(app) {
		this.addressRepository = new AddressRepository(app)
		this.sportRepository = new SportRepository(app)
		this.enrollmentRepository = new EnrollmentRepository(app)
		this.memberRepository = new MemberRepository(app)
	}


	async handler (id) {

		try {
			const member = await this.memberRepository.findById(id)

			if (!member) {
				return errorResponse('Member not found!', HttpStatus.NOT_FOUND)
			}
      
			const address = await this.addressRepository.findById(member.addressId)
			const enrollments = await this.enrollmentRepository.getByMember(id)
      
			const response = {
				UUId: member.UUId,
				id: member.id,
				name: member.name,
				lastName: member.lastName,
				dateBirth: member.dateBirth,
				email: member.email,
				phone: member.phone,
				updatedAt: member.updatedAt,
				createdAt: member.createdAt,
				address: {
					UUId: address.UUId,
					id: address.id,
					streetName: address.streetName,
					streetNumber: address.streetNumber,
					zipcode: address.zipcode,
					city: address.city,
					state: address.state,
					neighborhood: address.neighborhood,
					updatedAt: address.updatedAt,
					createdAt: address.createdAt
				},
				enrollments
			}

			return defaultResponse(response)
		} catch (err) {
			return errorResponse(err.message, HttpStatus.UNPROCESSABLE_ENTITY)
		}

	}
}

module.exports = FindMemberByIdUseCase