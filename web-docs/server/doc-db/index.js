const Doc = require('./model')

const dafaultVal = ''

exports.findOrCreateDocument = async function(id) {
  if (id === null) return

  const document = await Doc.findById(id)
  if (document) return document
  return await Doc.create({ _id: id, data: dafaultVal })
}

exports.updateDocumentById = async function(id, data) {
  if (id === null) return
  return await Doc.findByIdAndUpdate(id, { data })
}