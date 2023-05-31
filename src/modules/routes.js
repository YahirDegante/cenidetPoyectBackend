const { userRouter } = require('./user/user.controller.js');
const { externalAdvisorRouter } = require('./externalAdvisor/externalAdvisor.controller.js');

module.exports = {
    userRouter,
    externalAdvisorRouter,
};