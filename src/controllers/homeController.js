const path = require('path')
exports.paginaInicial = (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../', 'views', 'index.html'))
}