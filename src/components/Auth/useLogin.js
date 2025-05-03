export function login({email, password , rememberMe = false}) {
  //  Call the API to login the user
  if(!email || !password) {
    return { error: "Email and password are required" };
  }
  // Simulate a successful login response
  return { success: true, token: "fake-jwt-token" };
}