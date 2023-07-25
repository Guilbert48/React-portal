const path = require('path')
exports.contato = (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../', 'views', 'contato.html'))
}