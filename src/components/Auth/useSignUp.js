function signUp({
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
  
  return { success: true, token: "fake-jwt-token" };
}