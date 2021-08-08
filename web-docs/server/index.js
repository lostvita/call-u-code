'use strict'

const DocDbControl = require('./doc-db')

const io = require('socket.io')(3001, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  socket.on('set-document-id', async (docId) => {
    const document = await DocDbControl.findOrCreateDocument(docId)
    socket.join(docId)
    socket.emit('load-document', document.data)

    socket.on('save-document', async (data) => {
      await DocDbControl.updateDocumentById(docId, data)
    })

    // text change event
    socket.on('send-changes', (data) => {
      socket.broadcast.to(docId).emit('receive-changes', data)
    })
  })
})
