const express = require('express');
const { seed, models: {Application, Circuit} } = require('./db');

const app = express();

app.use('/main', require('./routes/api'))

app.get('/', (req, res) => {
    res.redirect('/main')
})


const init = async() => {
    try{
    seed();
    const PORT = 1337
    app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
    //console.log('API RESPONSE: ', response)
    } catch(err) {
        console.log(err)
    }
}


init()


