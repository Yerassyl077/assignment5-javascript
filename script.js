
const userProfile = {
    name: "Student",
    birthYear: 2005,
    isDeveloper: false,
    hobbies: ["Music", "Sports"]
};

const form = document.getElementById("profileForm");
const list = document.getElementById("hobbyList");
const hobbyInput = document.getElementById("newHobby");
const message = document.getElementById("message");

function showProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const totalHobbies = userProfile.hobbies.length;

    document.getElementById("profileName").textContent = userProfile.name;
    document.getElementById("profileYear").textContent = userProfile.birthYear;
    document.getElementById("profileAge").textContent = age;
    document.getElementById("profileDeveloper").textContent = userProfile.isDeveloper ? "Yes" : "No";
    document.getElementById("hobbyCount").textContent = totalHobbies;

    console.log(userProfile);
    console.log("Age:", age);
    console.log("Total hobbies:", totalHobbies);
}

function showHobbies() {
    list.innerHTML = "";

    userProfile.hobbies.forEach(function(hobby) {
        const item = document.createElement("li");
        item.textContent = hobby;
        list.appendChild(item);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("username").value.trim();
    const birthYear = Number(document.getElementById("birthYear").value);
    const currentYear = new Date().getFullYear();

    if (name === "" || birthYear < 1900 || birthYear > currentYear) {
        message.textContent = "Please enter valid information.";
        message.style.color = "red";
        return;
    }

    userProfile.name = name;
    userProfile.birthYear = birthYear;

    showProfile();

    message.textContent = "Profile updated!";
    message.style.color = "green";
});

document.getElementById("addBtn").addEventListener("click", function() {
    const hobby = hobbyInput.value.trim();

    if (hobby === "") {
        alert("Enter a hobby first.");
        return;
    }

    userProfile.hobbies.push(hobby);
    showHobbies();
    showProfile();

    hobbyInput.value = "";
});

document.getElementById("removeBtn").addEventListener("click", function() {
    if (userProfile.hobbies.length > 0) {
        userProfile.hobbies.pop();
        list.lastElementChild.remove();
        showProfile();
    }
});

document.getElementById("username").value = userProfile.name;
document.getElementById("birthYear").value = userProfile.birthYear;

showProfile();
showHobbies();
