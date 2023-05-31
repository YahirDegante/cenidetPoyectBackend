const { userRouter } = require('./user/user.controller.js');
const { externalAdvisorRouter } = require('./externalAdvisor/externalAdvisor.controller.js');
const { researchLineRouter } = require('./researchLines/researchLines.controller.js');

module.exports = {
    userRouter,
    externalAdvisorRouter,
    researchLineRouter,
};