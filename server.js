const app = require('./src/app')

app.listen(app.get('port'), (err) => {

	if (err) throw err

	console.log(`Application running on port:${app.get('port')}`)
})