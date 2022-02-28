const fsPromise = require('fs').promises;

const fileOperations = async () => {
    try {
        const data = await fsPromise.readFile('temp.txt', 'utf8');
        console.log('--------- temp.txt --------');
        console.log(data);
        await fsPromise.writeFile(
            'new.txt',
            'Consectetur laborum et id fugiat dolore pariatur culpa labore eiusmod.'
        );
        await fsPromise.appendFile('new.txt', '\n\nThank You!');
        await fsPromise.rename('new.txt', 'temp2.txt');
        const data2 = await fsPromise.readFile('temp2.txt', 'utf8');
        console.log('--------- temp2.txt --------');
        console.log(data2);
    } catch (error) {
        console.error(error);
    }
};

fileOperations();

// fs.readFile('temp.js', (err, data) => {
//     if (data) {
//         console.log('--------- temp.js ---------');
//         console.log(data.toString('hex'));
//     } else {
//         console.log(err);
//     }
// });

// fs.writeFile(
//     'temp.js',
//     `console.log("Excepteur voluptate non excepteur consequat minim eu deserunt veniam enim voluptate tempor eiusmod eiusmod.");`,
//     (error) => {
//         if (error) {
//             console.log(error.message);
//         }
//     }
// );

// fs.appendFile(
//     'temp.js',
//     `console.log("Amet consectetur amet mollit amet nisi nisi dolore incididunt minim dolor nisi ut pariatur.");`,
//     (error) => {
//         if (error) {
//             console.log(error.message);
//         }
//     }
// );
