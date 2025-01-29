const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

const app = {};
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, ()=>{
        console.log(`Server listening on port ${environment.port}`);
    });
};
app.handleReqRes = handleReqRes;

app.createServer();