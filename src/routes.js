// sports
const CreateSportController = require('./usecases/sport/createSportController')
const FindSportByIdController = require('./usecases/sport/findSportByIdController')
const FindAllSportsController = require('./usecases/sport/findAllSportsController')

// members
const CreateMemberController = require('./usecases/member/createMemberController')
const GetEnrollmentByMemberController = require('./usecases/member/enrollment/getEnrollmentByMemberController')
const FindAllMembersController = require('./usecases/member/findAllMembersController')

// enrollment
const CreateEnrollmentController = require('./usecases/member/enrollment/createEnrollmentController')

module.exports = (app) => {

	const createMemberController = new CreateMemberController(app)
	const findAllMembersController = new FindAllMembersController(app)
	const getEnrollmentByMemberController = new GetEnrollmentByMemberController(app)
	
	const createSportController = new CreateSportController(app)
	const findSportByIdController = new FindSportByIdController(app)
	const findAllSportsController = new FindAllSportsController(app)
	
	const createEnrollmentController = new CreateEnrollmentController(app)
	
	app.route('/api/v1/members')
		.post((request, response) => createMemberController.execute(request, response))
		.get((request, response) => findAllMembersController.execute(request, response))
	
	app.route('/api/v1/members/:id/enrollments')
		.get((request, response) => getEnrollmentByMemberController.execute(request, response))
		.post((request, response) => createEnrollmentController.execute(request, response))

	app.route('/api/v1/sports')
		.post((request, response) => createSportController.execute(request, response))
		.get((request, response) => findAllSportsController.execute(request, response))

	app.route('/api/v1/sports/:id')
		.get((request, response) => findSportByIdController.execute(request, response))
}