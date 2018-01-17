var express = require('express'); // Charge express
var bodyParser = require('body-parser'); // charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs'); // Charge file system

var app = express();

var pathDir = '/image'; // chemin d'accès au repertoire contenant les images

var arrayPathImage=[]; // Tableau qui permet de stocké les chemins des images

app.use(express.static('public'));
app.use(express.static('node_modules'));

/* Permet de récuperer le chemins de toutes les image
et de les stockés dans un tableau*/
fs.readdir('public'+pathDir, function(err, items) { 
	arrayPathImage=[];
    for (var i=0; i<items.length; i++) {
        arrayPathImage.push(pathDir+'/'+items[i]);
        console.log(arrayPathImage[i]);
    }
});

setInterval(function()
{
	var temparrayPathImage=[];
	fs.readdir('public'+pathDir, function(err, items) { 
	    for (var i=0; i<items.length; i++) {
	        arrayPathImage.push(pathDir+'/'+items[i]);
	        console.log(arrayPathImage[i]);
	    }
	    
	});
	if(temparrayPathImage!=arrayPathImage)
    {
    	arrayPathImage=temparrayPathImage;
    	console.log("je passe");
    }
},15000);




app.get('/',function(req,res){
	res.render('mosaic.ejs', {arrayPathImages : arrayPathImage});
})

app.listen(3000);
