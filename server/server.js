const express = require('express')
const cors = require('cors')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.post('/addTodo', cors(), (req, res) => {
    fs.readFile('./database/newTodos.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}')
        } else {
            const todos = JSON.parse(data)
            const todo = req.body;

            todos.push(todo);
            fs.writeFile('./database/newTodos.json', JSON.stringify(todos), (err) => {
                if (err) {
                    res.send('{"result": 0}')
                } else {
                    res.send(todos)
                }
            })
        }
    })
})
app.post('/removeTodo', cors(), (req, res) => {
    fs.readFile('./database/newTodos.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}')
        } else {
            const todos = JSON.parse(data)
            const todo = req.body;

            todos.splice(todo, 1);
            fs.writeFile('./database/newTodos.json', JSON.stringify(todos), (err) => {
                if (err) {
                    res.send('{"result": 0}')
                } else {
                    res.send(todos)
                }
            })
        }
    })
})

app.get('/todoData', cors(), (req, res) => {
    fs.readFile('./database/newTodos.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}')
        } else {
            res.send(data)
        }
    })
})

app.listen(3000, () => {
    console.log('server start on localhost: 3000');
})


