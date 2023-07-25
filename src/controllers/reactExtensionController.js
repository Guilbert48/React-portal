const path = require('path')
exports.homeExtension = (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../', 'views', 'REACT-EXTENSION', 'homeExtension.html'))
}