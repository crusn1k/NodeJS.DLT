var express = require('express'); 
var router = express.Router(); 
var util = require("util"); 
var fs = require("fs"); 
 
router.get('/', function(req, res) { 
  res.render("uploader", {title: "I love files!"}); 
}); 
 
router.post("/", function(req, res, next){ 
	if (req.files) { 
		console.log(util.inspect(req.files));
		if (req.files.myFile.size === 0) {
		            return next(new Error("BC file select kar chu..."));
		}
		fs.exists(req.files.myFile.path, function(exists) { 
			if(exists) { 
				fs.rename(req.files.myFile.path, req.files.myFile.path.replace(req.files.myFile.name, req.files.myFile.originalname), function(err){});
				res.end("Uploaded!"); 
			} else { 
				res.end("Lag gaye!"); 
			} 
		}); 
	} 
});
module.exports = router;