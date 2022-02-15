'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'John Doe',
        ativo: true,
        email: 'john@google.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mack Tink',
        ativo: true,
        email: 'mack@google.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});  
  }
};
