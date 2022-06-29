var img = document.querySelector('img');
var fullname = document.querySelector('#fullname');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');
var btn = document.querySelector('button');
var url = 'https://randomuser.me/api';
    
btn.addEventListener('click', function() {
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printErrors)
})

function handleErrors(res) {
  if(!res.ok) {
    throw Error('there are some errors: ' + res.status);
  }
  return res;
}

function parseJSON(res) {
  return res.json().then(function(parsedData) {
    return parsedData.results[0];
  });
}

function updateProfile(data) {
  email.innerText = data.email;
  fullname.innerText = data.name.first + ' ' + data.name.last;
  img.src = data.picture.medium;
  username.innerText = data.login.username;
}

function printErrors(error) {
  console.log(error);
}