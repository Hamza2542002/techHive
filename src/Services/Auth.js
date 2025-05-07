const API_URL = "http://localhost:3000/users";
export async function loginAsync(email, password) {
  const response = await fetch(`http://localhost:3000/users`);

  if (!response.ok) {
    console.error("Failed to fetch users:", response);
    throw new Error("Login failed");
  }

  const users = await response.json();

  for (const user of users) {
    if (user.email === email && user.password === password) {
      return user;
    }
  }
}

export async function registerAsync(user) {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  const createdUser = await response.json();
  return createdUser;
}

export async function getUserAsync(id) {
  const response = await fetch(`http://localhost:3000/users/${id}`);

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  const user = await response.json();
  return user;
}

export async function updateUserAsync(id, user) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Update failed");
  }
  console.log("User updated successfully:", user);

  const updatedUser = await response.json();
  return updatedUser;
}