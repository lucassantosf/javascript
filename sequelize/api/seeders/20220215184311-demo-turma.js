'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turmas', [
      { 
        data_inicio: '2022-02-15',
        nivel_id: 1,
        docente_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
