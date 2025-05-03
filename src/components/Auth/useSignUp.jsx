function signup({
  Name,
  email,
  password,
  ConfirmPassword,
}) {
  // Call the API to sign up the user
  if (!Name || !email || !password || !ConfirmPassword) {
    return { error: "All fields are required" };
  }
  if (password !== ConfirmPassword) {
    return { error: "Passwords do not match" };
  }
  // Simulate a successful signup response
  return { success: true, token: "fake-jwt-token" };
}