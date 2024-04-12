fetch('https://developer.github.com/v3/search/#search-users',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
    }
})
.then(res=>console.log(res))