const mongooes = require('mongoose');
const User = require('./User');

mongooes.connect('mongodb://localhost/eDelta');

run();
async function run() {
    try {
        // const user = new User({
        //     name: 'sagar',
        //     email: 'sagar@gmail.com',
        //     age: '21',
        // });
        const user = await User.create({
            name: 'khyati',
            email: 'khyati@gmail.com',
            age: 22,
            hobbies: ['singing', 'reading'],
            address: {
                street: 'chaya',
                city: 'pbr',
            },
        });
        await user.save();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
