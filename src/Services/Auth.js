export async function loginAsync(email, password) {
  const response = await fetch(`https://data-acyk.onrender.com/users`);

  if (!response.ok) {
    console.error("Failed to fetch users:", response);
    throw new Error("Login failed");
  }

  const users = await response.json();
  console.log("Fetched users:", users);

  for (const user of users) {
    if (user.email === email && user.password === password) {
      console.log("User found:", user);
      return user;
    }
  }
}

export async function registerAsync(user) {
  const response = await fetch("https://data-acyk.onrender.com/users", {
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
  const response = await fetch(`https://data-acyk.onrender.com/users/${id}`);

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  const user = await response.json();
  return user;
}