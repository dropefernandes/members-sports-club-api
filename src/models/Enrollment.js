module.exports = (sequelize, DataTypes) => {

	const Enrollment = sequelize.define('ENROLLMENT', {
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
		memberId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'MEMBER_ID'
		},
		sportId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'SPORT_ID'
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'ACTIVE',
			field: 'STATUS'
		},
		initialDate: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false,
			field: 'INITIAL_DATE'
		},
		endDate: {
			type: DataTypes.DATE,
			field: 'END_DATE'
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

	Enrollment.associate = models => {
		Enrollment.belongsTo(models.MEMBER, { as: 'memberId' })
		Enrollment.belongsTo(models.SPORT, { as: 'sportId' })
	}

	return Enrollment
}