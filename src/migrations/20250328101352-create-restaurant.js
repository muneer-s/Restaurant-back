// 'use strict';
// /** @type {import('sequelize-cli').Migration} */


// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('Restaurants', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique:true
//       },
//       address: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       contact: {
//         type: Sequelize.BIGINT,
//         allowNull: false,
//       },
//       // createdAt: {
//       //   allowNull: false,
//       //   type: Sequelize.DATE
//       // },
//       // updatedAt: {
//       //   allowNull: false,
//       //   type: Sequelize.DATE
//       // }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('Restaurants');
//   }
// };



'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restaurants');
  }
};