/*
async function log() {
    await console.log(1)
    await console.log(2)
}*/

function log() {
    setTimeout(()=>{
        console.log(1)
    }, 1000)
    console.log(2)
}