module.exports = (function(){
    var fileData = {};
    var movies = undefined;
    var fs = require('fs');
    //handlers

    function loadData(){
        fs.readFile('server/data/movie.json',function(err,data){
            if(err){
                console.log(err);
                return;
            }
            var temp = JSON.parse(data);
            fileData.images = temp.images;
            movies = temp.movies;
        });
    }
    function getMovies(req,res){
        var q = req.query.filter;
        if(!q){
            res.send(movies);
        }
        else{
            var filteredData = movies.filter(function(movie){
                return movie["original_title"].toLowerCase().search(q.toLowerCase()) >= 0;
            });
            res.send(filteredData);
        }
    }
    function getMovieById(req,res){
        var q = req.query.id;
        var item = movies.find(function(movie){
            return movie["id"] == q;
        });
        
        if(!item){
            item = {error:true,message:"Movie not found with this id"};
        }
        res.send(item);
    }
    function saveData(){
        fs.writeFile('server/data/movie.json',JSON.stringify(fileData),function(err){
            if(err){
                console.log(err);
            }
        })
    }
    function putMovieHandler(req,res){
        var movie = req.body;
        var movieIdx = movies.findIndex(function(value){
            return value.id == movie.id;
        });
        var retVal = {};
        if(movieIdx<0){
            retVal.message = "Requested Movie not found to update.";
            retVal.error = true;
        }
        else{
            var myMovie = Object.assign(movies[movieIdx],movie);
            movies[movieIdx] = myMovie;
            fileData["movies"] = movies;
            retVal = myMovie;
            saveData();
        }
        res.send(retVal);
    }
    function init(app){
        //define routes
        loadData();
        app.get('/api/search',getMovies);
        app.get('/api/movie',getMovieById);
        app.put('/api/movie',putMovieHandler);
    }
    return {
        init: init
    };
})();
