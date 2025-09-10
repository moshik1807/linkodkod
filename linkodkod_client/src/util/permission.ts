type User = {
  name: string;
  password: string;
};

export async function login(user: User) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    const data = await response.text();
    return data; 
  } catch (err) {
    console.error("Error during login:", err);
    return null; 
  }
}



export async function signup(user: User) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const response = await fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Signup failed: ${response.status}`);
    }

    const data = await response.text();
    return data; 
  } catch (err) {
    console.error("Error during signup:", err);
    return null;
  }
}