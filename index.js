const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(8080, ()=>{
    console.log('NFCreaction esta ejecutandose en el puerto 8080')
})