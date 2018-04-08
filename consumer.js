const q = 'task'

const open = require('amqplib').connect('amqp://localhost')

open
    .then(conn => conn.createChannel())
    .then(ch => {
        return ch.assertQueue(q)
                .then(ok => {
                    return ch.consume(q, msg => {
                        if (msg !== null) {
                            console.log(msg.toString())
                            ch.ack(msg)
                        }
                    })
                })
    })
    .catch(console.warn)