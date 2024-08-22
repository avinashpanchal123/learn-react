const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
// const db = require('./db/config')



app.get('/', (req, res)=>{
    res.send(['avinash', 'aakash', 'aditya', 'mahesh'])
})

// db.connect()

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})

// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // API routes
// app.get('/api/greet', (req, res) => {
//     res.json({ message: 'Hello from Express!' });
// });

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
