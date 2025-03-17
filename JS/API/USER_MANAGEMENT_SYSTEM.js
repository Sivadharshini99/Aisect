const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch Users (GET) - Retrieves the user list from the API.
function fetchUsers() {
    fetch(API_URL)
    .then(response => response.json())
    .then(users => {
        let userList = document.getElementById('userList');
        userList.innerHTML = "";
        users.forEach(user => {
            let listItem = document.createElement('li');
            listItem.textContent = `${user.id}: ${user.name} - ${user.email}`;
            userList.appendChild(listItem);
        });
    })
    .catch(error => console.error("Error:", error));
}

// Add User (POST) - Sends new user data to the API.

function addUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email })
    })
    .then(response => response.json())
    .then(data => {
        alert(`User ${data.name} added!`);
        fetchUsers(); // Refresh user list
    })
    .catch(error => console.error("Error:", error));
}

// Update User (PUT) - Replaces an existing user’s data.
function updateUser() {
    let id = document.getElementById("updateId").value;
    let name = document.getElementById("updateName").value;
    let email = document.getElementById("updateEmail").value;

    if (!id || !name || !email) {
        alert("Please fill in all fields.");
        return;
    }

    console.log(`Updating user with ID: ${id}, Name: ${name}, Email: ${email}`);

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, name: name, email: email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to update user: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("User updated:", data);  // Log the updated user data
        alert(`User ${data.id} updated!`);
        fetchUsers(); // Refresh user list
    })
    .catch(error => {
        console.error("Error:", error);
        alert(`Error: ${error.message}`);
    });
}

// Patch User (PATCH) - Updates only the user's name.

function patchUser() {
    let id = document.getElementById("patchId").value;
    let name = document.getElementById("patchName").value;

    if (!id || !name) {
        alert("Please fill in all fields.");
        return;
    }

    fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        alert(`User ${data.id} name updated!`);
        fetchUsers(); // Refresh user list
    })
    .catch(error => {
        console.error("Error:", error);
        alert(`Error: ${error.message}`);
    });
}

// Delete User (DELETE) - Removes a user from the API
function deleteUser() {
    let id = document.getElementById("deleteId").value;

    if (!id) {
        alert("Please enter a user ID.");
        return;
    }

    fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then(() => {
        alert(`User ${id} deleted!`);
        fetchUsers(); // Refresh user list
    })
    .catch(error => {
        console.error("Error:", error);
        alert(`Error: ${error.message}`);
    });
}
