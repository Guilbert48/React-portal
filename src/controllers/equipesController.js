const path = require('path')
exports.equipes = (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../', 'views', 'equipes.html'))
}