const http = require('http');
const fs = require('fs');

    http.createServer((request, response)=> {
        if (request.url === '/write') {
      fs.writeFile('data.txt', 'Evyatar', ()=>{
          response.write('file created');
          response.end();
      });
    }
    if (request.url === '/delete') {
        fs.unlink('data.text', ()=>{
            response.write('file delete');
            response.end();
        });
    } else if (request.url === '/delete'){
        fs.unlink('data.txt', (err)=>{
            if(err) {
                console.log(err);
                response.end();
                return;
            }
            response.write('file delete');
                return;
                response.end();
        });
    }

    else if (request.url === "/dice") {
        const randomNum = Math.floor(Math.random() * 6  + 1);
        
        if(randomNum === 4){
            response.write("You Won");
        }
        else{
            response.write("You lost");
        }
        response.end();
    }

}).listen(8080);

console.log('listening on : http://localhost:8080');
