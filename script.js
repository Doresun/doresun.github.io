const ws = new WebSocket('wss://muhich2.asuscomm.com:443')
ws.onopen = (event) => {
    ws.send('Connected!')
}
ws.onmessage = (event) => {
    console.log(event.data)
}
function alo() {
    ws.send('YEAH')
}