const ws = new WebSocket('ws://muhich2.asuscomm.com:8765')
ws.onopen = (event) => {
    ws.send('Connected!')
}
ws.onmessage = (event) => {
    console.log(event.data)
}
function alo() {
    ws.send('YEAH')
}