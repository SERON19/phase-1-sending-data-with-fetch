// Add your code here
function submitData(userName, userEmail){
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(res => res.json())
    .then(json => {document.querySelector('body').innerHTML = `<p>${json.id}</p>`})
    .catch(error => {
        alert("Bad things! Ragnarők!")
        document.querySelector('body').innerHTML = `<p>${error.message}</p>`
    })
    }