const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express();
const port = process.env.PORT || 7778;

app.get('/', (req, res) => {
    res.send("<h1>Hello Express World!</h1>");
})

app.get('/api/v2/pog/', (req, res) => {
 const myObject = {who: "Poggoli", where: "Poggopolis"};
 res.json(myObject);
})

app.listen(port, () => {
    const appPid = path.resolve(__dirname, 'app.pid')
    fs.writeFileSync(appPid, `${process.pid}`);
    console.log(`Server running on port http://127.0.0.1:${port}`);
})