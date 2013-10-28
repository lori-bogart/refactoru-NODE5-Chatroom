$(function(){
	// connect the socket.io server
	var socket = io.connect('http://localhost')
	//define socket events
	socket.on('connect', function(){
		console.log("from client hi to console log");
		socket.emit('message', "Lori !");
	});

	socket.on('disconnect', function() {
		socket.emit('disconnect');
	});

	// attach events

	socket.on('message', function(message){
        $('#room').append('<div>'+message+'</div>')
	});

    $('#message-input').on('keyup', function(e){
            $el = $(this)
            if(e.which === 13){
                    socket.emit('message', $el.val())
                    $el.val('')
            };
    });

	socket.emit('message', 'You are connected');
});
