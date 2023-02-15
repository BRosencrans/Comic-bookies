const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const allRoutes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path')


// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3001;
// Requiring our models for syncing
const {User, Post, Comment, Publisher, Character, Volume, Series} = require('./models');
const multer = require('multer');


const sess = {
   secret: 'process.env.SESSION_SECRET',
   cookie: {
      maxAge: 1000 * 60 * 60,
   },
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
      db: sequelize
   })
};

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "Images")
   },
   filename: (req, file, cb) =>{
      console.log(file)
      cb(null, Date.now() + path.extname(file.originalname))
   }
})
const upload = multer({storage: storage})

app.post("/upload", upload.single('image') , (req, res) =>{
   res.send('image uploaded')
   res.render('home',{
      msg: "file uploaded",
      file: `images/${file.file.filename}`
   })

})



app.use(session(sess));
// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/',allRoutes);
app.get("/sessions",(req,res)=>{
   res.json(req.session)
})


sequelize.sync({ force:false}).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});