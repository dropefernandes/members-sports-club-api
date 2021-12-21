const HttpStatus = require('http-status')

const AddressRepository = require('../../repositories/address-repository')
const SportRepository = require('../../repositories/sport-repository')
const EnrollmentRepository = require('../../repositories/enrollment-repository')
const MemberRepository = require('../../repositories/member-repository')

const { defaultResponse, errorResponse } = require('../../utils/defaultResponse')

class CreateMemberUseCase {

	constructor(app) {
		this.addressRepository = new AddressRepository(app)
		this.sportRepository = new SportRepository(app)
		this.enrollmentRepository = new EnrollmentRepository(app)
		this.memberRepository = new MemberRepository(app)
	}

	formatResponse ({ enrollment, member, address, sport }) {
		return {

			member: {
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
				enrollments: [
					{
						UUId: enrollment.UUId,
						id: enrollment.id,
						initialDate: enrollment.initialDate,
						endDate: enrollment.endDate,
						memberId: enrollment.memberId,
						sport: {
							id: sport.id,
							UUId: sport.UUId,
							name: sport.name,
							value: sport.value
						}
					}
				]
			}
		}
	}

	async handler (data) {
		
		try {
			const sport = await this.sportRepository.findById(data.enrollment.sportId)
			
			if (!sport) {
				return errorResponse('Sport not found!', HttpStatus.NOT_FOUND)
			}

			const address = await this.addressRepository.save(data.member.address)
			delete data.member.address
			const member = await this.memberRepository.save({
				...data.member,
				addressId: address.id
			})
			const enrollment = await this.enrollmentRepository.save({
				memberId: member.id,
				sportId: data.enrollment.sportId,
				value: sport.value
			})

			const response = this.formatResponse({enrollment, member, address, sport})
			return defaultResponse(response , HttpStatus.CREATED)
		} catch (err) {
			return errorResponse(err.message, HttpStatus.UNPROCESSABLE_ENTITY)
		}
	}
}

module.exports = CreateMemberUseCase