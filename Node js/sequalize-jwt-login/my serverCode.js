// ---------------------- My Code ----------------------
// app.post('/reg', (req, res) => {
//     try {
//         sequalize
//             .sync({ force: true })
//             .then(async () => {
//                 const { name, email } = req.body;
//                 const newPassword = await bcrypt.hash(req.body.password, 10);
//                 return User1.create({
//                     name,
//                     email,
//                     password: newPassword,
//                 });
//             })
//             .then((customer) => {
//                 res.send({
//                     message: 'data inserted.',
//                 });
//                 console.log(customer);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     } catch (err) {
//         console.log(err.message);
//     }
// });

//reducted code
// else {
//     console.log('Give all record of User1: ' + select);
//     const insert = await User1.create({
//         name,
//         email,
//         password: newPassword,
//     });
//     console.log(insert);
//     if (insert) {
//         res.send({
//             message: 'data inserted.',
//         });
//     }
// }
