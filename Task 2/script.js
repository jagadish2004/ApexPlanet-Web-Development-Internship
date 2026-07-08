// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Error fields
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("subjectError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    let valid = true;

    // Name
    if (name === "") {
        document.getElementById("nameError").innerHTML =
            "Name is required";
        valid = false;
    }

    // Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        document.getElementById("emailError").innerHTML =
            "Email is required";
        valid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML =
            "Enter a valid email";
        valid = false;
    }

    // Phone
    let phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        document.getElementById("phoneError").innerHTML =
            "Phone number is required";
        valid = false;
    } else if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").innerHTML =
            "Enter a valid 10-digit phone number";
        valid = false;
    }

    // Subject
    if (subject === "") {
        document.getElementById("subjectError").innerHTML =
            "Subject is required";
        valid = false;
    }

    // Message
    if (message === "") {
        document.getElementById("messageError").innerHTML =
            "Message is required";
        valid = false;
    }

    // Success
    if (valid) {
        document.getElementById("successMessage").innerHTML =
            "✅ Form submitted successfully!";

        form.reset();
    }
});

// ===============================
// Dynamic To-Do List
// ===============================

const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {

    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    // Complete Button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";

    completeBtn.onclick = function () {
        span.classList.toggle("completed");
    };

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑";

    deleteBtn.onclick = function () {
        li.remove();
    };

    let buttons = document.createElement("div");
    buttons.className = "task-buttons";

    buttons.appendChild(completeBtn);
    buttons.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttons);

    taskList.appendChild(li);

    taskInput.value = "";
}
