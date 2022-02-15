'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.bulkInsert('Nivels', [
      { 
        descr_nivel: 'basicao',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        descr_nivel: 'intermediario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        descr_nivel: 'avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}); 
  },

  async down (queryInterface, Sequelize) {
    /*
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
