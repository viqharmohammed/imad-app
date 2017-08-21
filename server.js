var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={ 
`article-one:{
  title:'viqhar mariya',
  heading:'viqhar',
  date: 'august 20,2017',
  content: ` <p>
                she saw her first time.and by seeing her that was love at frst site he loves her alot.
                viqhar loves mariya alot...
              </p>`
},
`article-two:{
      title:'viqhar mariya',
  heading:'mariya',
  date: 'august 25,2017',
  content: ` <p>
               she also started loving him.....
              </p>`
    
},
`article-three:{
     title:'viqhar mariya',
  heading:'viqhar mariya',
  date: 'august 25,2017',
  content: ` <p>
               they love each other alot.cant live with out each other.lets see how their love goes on
              </p>`
},
};
function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmlTemplate=`<html>
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
  
app.get('/:articlename',function (req,res){
     var articlename=req.params.articlename;
    res.send(createTemplate(articles[articles]));
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
