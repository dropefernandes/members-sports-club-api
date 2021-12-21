module.exports = (sequelize, DataTypes) => {

	const Member = sequelize.define('MEMBER', {
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
		lastName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'LAST_NAME'
		},
		dateBirth: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'DATE_BIRTH'
		},
		email: { 
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'EMAIL'
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'PHONE'
		},
		addressId: {
			type: DataTypes.BIGINT,
			field: 'ADDRESS_ID'
		}
	}, {
		timestamps: true,
		freezeTableName: true
	})

	Member.associate = models => {

		Member.belongsToMany(models.ENROLLMENT, {
			through: 'Enrollment'
		})

		Member.hasOne(models.ADDRESS)
	}

	return Member
}