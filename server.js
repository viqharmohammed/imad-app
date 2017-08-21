var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
  title:'viqhar mariya',
  heading:'viqhar',
  date: 'august 20,2017',
  content: ` <p>
                she saw her first time.and by seeing her that was love at frst site he loves her alot.
                viqhar loves mariya alot...
              </p>`
};
function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmlTemplet=`<html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content ="width=device-with,initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h1>
            ${heading}
        </h1>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
  
app.get('/one',function (req,res){
    res.send(createTemplate(articleone));
});

app.get('/two',function (req,res){
       res.sendFile(path.join(__dirname, 'ui', 'vlm.html'));
});
app.get('/three',function (req,res){
       res.sendFile(path.join(__dirname, 'ui', 'vm.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
