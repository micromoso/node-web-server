const express = require('express')
const path = require('path')
const chalk = require('chalk')
const hbs = require('hbs')

const app = express()

// Path
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../templates/views')
const partialsDir = path.join(__dirname, '../templates/partials')


// HBS setup
app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialsDir)

// static pages
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'index',
        name: 'moso'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help',
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'HELP PAGE NOT FOUND',
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: '404 PAGE NOT FOUND!!',
    })
})




app.listen('3000', ()=>{
    console.log(chalk.green.inverse('Server started at port 3000'))
})