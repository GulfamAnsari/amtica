var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs')
cookieParser = require('cookie-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// serving angular files
app.use(express.static('public'));
app.get('/', (req, response) => {
    fs.readFile("public/index.html", (err, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end(data);
    });
});

const PORT = process.env.PORT || 4100;
var MongoClient = require('mongodb').MongoClient;

// API end points
app.post('/login', (req, res) => {
    connectMongoDB(req, res);
});

app.post('/signup', (req, res) => {
    connectMongoDB(req, res);
});
// ******end ******

function connectMongoDB(req, res) {
    var url = "mongodb://localhost:27017/data";
    if (process.env.PASSWORD) {
        const password = encodeURIComponent(process.env.PASSWORD);
        url = 'mongodb+srv://gulfam:' + password + '@cluster0-eqhd9.mongodb.net/test?retryWrites=true';
    }
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        if (req.url == '/login') {
            fetchDatabaseResults(req, res, db)
        } else if (req.url == '/signup') {
            writeIntoDabase(req, res, db)
        }
    });
}

function fetchDatabaseResults(req, res, db) {
    var dbo = db.db("amtica");
    dbo.collection("login").find({}).toArray(function (err, dbResult) {
        if (err) throw err;
        authenticateUser(req, dbResult, res)
        db.close();
    });
}

function authenticateUser(req, dbResult, res) {
    var data = '';
    for (var i = 0; i < dbResult.length; i++) {
        if (dbResult[i].email == req.body.email && dbResult[i].password == req.body.password) {
            data = dbResult[i];
        }
    }
    if (data) {
        var userInfo = userInformation(data)
        console.log('successfully login')
        res.end(JSON.stringify(userInfo));
    } else {
        res.end(null);
        console.log('please check your email and password')
    }
}

function userInformation(userData) {
    var userInfo = {
        'name': userData.name,
        'email': userData.email,
        'id': userData._id,
        'usertype': userData['usertype'],
        'loginData': Date()
    }
    
    currectUser = userInfo;
    return userInfo;
}


// sign up
function writeIntoDabase(req, res, db) {
    var dbo = db.db("amtica");
    dbo.collection("login").find({}).toArray((err, dbResult) => {
        if (err) throw err;
        var user = false;
        for (var i = 0; i < dbResult.length; i++) {
            if (dbResult[i].email == req.body.email) {
                console.log('user already exists')
                user = true;
                break;
            }
        }
        if (user) {
            res.end(null);
        } else {
            var user = {
                name: req.body.username,
                email: req.body.email,
                password: req.body.password,
                usertype: req.body.usertype
            }
            dbo.collection("login").insertOne(user, (err, response) => {
                if (err) throw err;
                res.end(JSON.stringify(user));
                console.log("1 record inserted");
                db.close();
            });
        }
        db.close();
    });
}


// start the server
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
console.log('Server started! At post' + PORT);

