document.getElementById("addNameBtn").addEventListener("click", addName);
document.getElementById("pickRandomNameBtn").addEventListener("click", pickRandomName);

function addName() {
    var nameInput = document.getElementById("nameBox");
    var name = nameInput.value.trim();

    if (name !== "") {
        var nameList = document.getElementById("nameList");
        var listItem = document.createElement("li");
        listItem.textContent = name;
        nameList.appendChild(listItem);
        nameInput.value = "";
    } else {
        alert("Please enter a name.");
    }
}

function pickRandomName() {
    var nameListItems = document.querySelectorAll("#nameList li");
    if (nameListItems.length > 0) {
        var randomIndex = Math.floor(Math.random() * nameListItems.length);
        var randomName = nameListItems[randomIndex].textContent;
        document.getElementById("selectedName").textContent = randomName;
    } else {
        alert("Please add names before picking a random name.");
    }
}
