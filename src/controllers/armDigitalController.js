const path = require('path')
exports.armDigital = (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../', 'views','REACT-INNOVATION', 'armDigital.html'))
}