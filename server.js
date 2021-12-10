var express = require("express");
var app = express();

var server = app.listen(8888);

var io = require("socket.io")(server);



app.use(express.static(__dirname +"/public"));

app.set("views", __dirname + "/public");
app.set("view engine", "ejs");


io.on("connection", function (socket) {
    console.log("Someone connected!");
    io.sockets.emit('joined', socket.id);
    
    socket.on("notify", function () {
        io.sockets.emit('notification', socket.id);
    });

    socket.on("disconnect", function(){
		io.emit("left", socket.id);
	})
});

io.off("connection", function (socket) {
    io.sockets.emit('left', socket.id);
});



app.get("/", function(request, response){
    console.log("Home loaded");
    response.render("index");
});