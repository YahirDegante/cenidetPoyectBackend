const { app } = require('./config/express');
const { satrtConnection } = require('./utils/database');

const main = () => {
    app.listen(app.get('port'), () => {
        console.log(`Server on port http://localhost:${app.get('port')}`);
    });
}

main();
satrtConnection();