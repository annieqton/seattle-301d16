$.ajax({
  url: 'https://api.github.com/user/repos?type=owner',
  method: 'GET',
  headers: {
    Authorization: 'token 8675309'
  }
})
.then(
  data => {
    data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`))
  },
  err => {
    console.error(err)
  })
