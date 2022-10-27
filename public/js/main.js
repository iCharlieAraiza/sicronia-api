const socket = io()
/*
const chatForm = document.getElementById('chat-form')
const chatMessages = document.querySelector('.chat-messages')


const unmute = document.getElementById('unmute')
*/
const activeBtn = document.getElementById('activeBtn')

socket.on('message', message => {
    console.log(message)
})

activeBtn.onclick = function(e) {
    e.preventDefault()
    socket.emit('message','active')
}


/*

// Message from server
socket.on('message', message => {
    console.log(message)
    outputMessage(message)
    const audio = new Audio('https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_1.mp3')
    if(message == 'play') {
        audio.volume = 0
        audio.muted = true
        audio.play()
    }

    activeBtn.onclick = function(e) {
        e.preventDefault()
        socket.emit('active')
    }

    unmute.addEventListener('click', () => {
        audio.muted = false
        audio.volume = 1

    })
});


    /*

chatForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Get message text
    const msg = e.target.elements.msg.value

    // Emit message to server
    socket.emit('chatMessage', msg)

    // Clear input
    e.target.elements.msg.value = ''
    e.target.elements.msg.focus()     
})  


/*
// Output message to DOM
function outputMessage(message) {
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `<p class="meta">Brad <span>9:12pm</span></p>
    <p class="text">
        ${message}
    </p>`
    document.querySelector('.chat-messages').appendChild(div)
}*/