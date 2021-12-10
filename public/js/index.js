console.log("connected!");

let number=0
let socket = io("http://localhost:8888");


$('#notify').on('click', function(event){
    event.preventDefault();
    socket.emit('notify');
});


socket.on('joined', function(info){
    let notification = `<p>${info} joined us!</ps>`
    $('.chatbox').append(notification);
});

socket.on('notification', function(info){
    let notification = `<p>${info} just triggered a notification!</p>`
    $('.chatbox').append(notification);
});

socket.on('left', function(info){
    let notification = `<p>${info} left us!</p>`
    $('.chatbox').append(notification);
});