var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    http = require('http');
    path = require('path');
    
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on : ` + port));