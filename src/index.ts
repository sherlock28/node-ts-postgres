require('dotenv').config()
const app = require('./config/app').configure()

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});
