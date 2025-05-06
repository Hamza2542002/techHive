export function signUp({
  name,
  email,
  password,
  confirmPassword,
  rememberMe = false,
}) {
  // Call API to sign up the user
  // Simulate a successful signup response
  if (!name || !email || !password || !confirmPassword) {
    return { error: "All fields are required" };
  }
  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }
  fetch('https://data-acyk.onrender.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: name,
    username : email,
    password,
    })
  })
  .then(res => res.json())
  .then(data => console.log(data));
  return { success: true, data : data, token: "fake-jwt-token" };
}