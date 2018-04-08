const q = 'task'

const open = require('amqplib').connect('amqp://localhost')

open
    .then((conn) => coon.createChannel())
    .then(ch => {
        return ch.assertQueue(q)
                .then(ok => {
                    return ch.sendToQueue(q, new Buffer('something to do'))
                })
    })
    .catch(console.warn)
