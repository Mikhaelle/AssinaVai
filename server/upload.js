const IncomingForm = require('formidable').IncomingForm // from formidable library
// formidable library é um modulo do Node.js para analisar dados de formulário

module.exports = function upload(req, res) { // cria um callback que armazena a informação
    //toda vez que alguem do "/upload"
  var form = new IncomingForm()

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
  })
  form.on('end', () => { //success status code
    res.json()
  })
  form.parse(req)
}