module.exports = (sequelize, DataTypes) => {

	const Sport = sequelize.define('SPORT', {
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		UUId: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			unique: true,
			field: 'UUID'
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'NAME'
		},
		description: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'DESCRIPTION'
		},
		value: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'VALUE'
		},
	}, {
		timestamps: true,
		freezeTableName: true
	})

	Sport.associate = models => {

		Sport.belongsToMany(models.ENROLLMENT, {
			through: 'Enrollment'
		})
	}

	return Sport
}