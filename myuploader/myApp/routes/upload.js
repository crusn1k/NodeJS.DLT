var express = require('express'); 
var router = express.Router(); 
var util = require("util"); 
var fs = require("fs"); 
 
router.get('/', function(req, res) { 
  res.render("uploadPage", {title: "I love files!"}); 
}); 
 
router.post("/", function(req, res, next){ 
	if (req.files) { 
		console.log(util.inspect(req.files));
		if (req.files.myFile.size === 0) {
		            return next(new Error("BC file select kar chu..."));
		}
		fs.exists(req.files.myFile.path, function(exists) { 
			if(exists) { 
				res.end("Uploaded!"); 
			} else { 
				res.end("Lag gaye!"); 
			} 
		}); 
	} 
});
module.exports = router;