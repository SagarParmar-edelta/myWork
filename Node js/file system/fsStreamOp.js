const fs = require('fs');

const rs = fs.createReadStream('temp.txt');
const ws = fs.createWriteStream('temp2.txt');

rs.on('data', (chunkOfData) => {
    console.log(chunkOfData.toString());
    ws.write(chunkOfData);
});

// rs.pipe(ws);
