export async function login({email, password , rememberMe = false}) {
  //  Call the API to login the user
  if(!email || !password) {
    return { error: "Email and password are required" };
  }
  var users = [];
  await fetch(`https://data-acyk.onrender.com/users`)
  .then(res => res.json())
  .then(data => users = data)
  .catch(error => console.log(error));
  users.forEach(user => {
    if(user.username === email && user.password === password) {
      console.log(user)
      return user;
    } else {
      return null;
    }
  });
}