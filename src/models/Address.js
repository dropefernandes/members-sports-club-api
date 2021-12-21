module.exports = (sequelize, DataTypes) => {

	const Address = sequelize.define('ADDRESS', {
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
		streetName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'STREET_NAME'
		},
		streetNumber: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'STREET_NUMBER'
		},
		neighborhood: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'NEIGHBORHOOD'
		},
		city: { 
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'CITY'
		},
		state: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'STATE'
		},
		zipcode: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'ZIPCODE'
		}
	}, {
		timestamps: true,
		freezeTableName: true
	})

	Address.associate = models => {
		Address.belongsTo(models.MEMBER, {
			foreignKey: 'MEMBER_ID'
		})
	}

	return Address
}