


exports.getData = (req, res) => {
    res.send('Hello World! from Student Controller GET');
}

exports.postData = (req, res) => {
    const newStudent = req.body;
    
    res.send('Hello World! from Student Controller POST');
}

exports.putData = (req, res) => {
    res.send('Hello World! from Student Controller PUT');
}

exports.deleteData = (req, res) => {
    res.send('Hello World! from Student Controller DELETE');
}