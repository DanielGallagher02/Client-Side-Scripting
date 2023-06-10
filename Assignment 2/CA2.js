window.onload = gui;

window.localStorage;


let paras;
let items;
let counter = 0


function gui() {
    document.addEventListener("keydown", keyHandler);
    paras = document.querySelectorAll('h4');

    items = document.getElementsByTagName("li");
    items[counter].classList.add("highlight");
}

//Function to make it that everytime the user either presses
//the right or left arrow it goes up and down the contact list
function keyHandler(evt) {
    console.log(` ${evt.code}`);

    if (evt.code == "ArrowRight") {
        nextItem(); //down arrow pressed
    }

    if (evt.code == "ArrowLeft") {
        prevItem(); //up arrow pressed
    }

    paras[0].innerHTML = "Usertitle : " + contactInfo[counter].usertitle;
    paras[1].innerHTML = "Username : " + contactInfo[counter].username;
    paras[2].innerHTML = "Phone Number : " + contactInfo[counter].phoneNumber;
    paras[3].innerHTML = "Password : " + contactInfo[counter].password;
    paras[4].innerHTML = "Email : " + contactInfo[counter].email;
    paras[5].innerHTML = "Description : " + contactInfo[counter].description;
}

//moving the highlight down the list
function nextItem() {
    console.log("going to the next item");
    items[counter++].classList.remove("highLight");
    if (counter >= items.length) counter = 0; // go back to the first item

    items[counter].classList.add("highLight");
    console.log(`contact is ${items[counter].value}`);
}

//moving the highlight up the list
function prevItem() {
    console.log("going to the prev item");
    items[counter--].classList.remove("highLight");
    if (counter < 0) counter = items.length - 1; // go to the last item in the list

    items[counter].classList.add("highLight");
    console.log(`contact is ${items[counter]}`);
}

//Array called contactInfo that holds objects
let contactInfo = [
    { usertitle: "Mr", username: "Danny25", phoneNumber: 0872437122, password: "danny123", email: "danny@gmail.com", description: "My name is danny" },
    { usertitle: "Ms", username: "Amy123", phoneNumber: 0872937652, password: "Amy125", email: "Amy@gmail.com", description: "My name is Amy" },
    { usertitle: "Mr", username: "Shane123", phoneNumber: 087245862, password: "Shane125", email: "Shane@gmail.com", description: "My name is Shane" },
    { usertitle: "Ms", username: "Leah123", phoneNumber: 0872932982, password: "Leah125", email: "Leah@gmail.com", description: "My name is Leah" },
    { usertitle: "Mr", username: "Daniel123", phoneNumber: 0872369652, password: "Daniel125", email: "Daniel@gmail.com", description: "My name is Daniel" }
]

//Adds an additional contact to my list contactInfo
function AddContact(){
    //getting users info by using querySelector()
    usertitleIn = document.querySelector("#usertitle");
    usertitleIn.options[usertitleIn.selectedIndex].text;

    usernameIn = document.querySelector('input[username]').value;
    //document.querySelector("#valueInput").innerHTML

    phoneNumberIn = document.querySelector('input[phonenumber]').value;
    
    passwordIn = document.querySelector('input[password]').value;
    emailIn = document.querySelector('input[email]').value;
    descriptionIn = document.querySelector('input[description]').value;

    //Creating a new object array called addingContact
    let addingContact = [
        {usertitle: usertitleIn, username: usernameIn, phoneNumber: phoneNumberIn, password: passwordIn, email: emailIn, description: descriptionIn}
    ]

    //Adding the new array called addingContact to the contactInfo array 
    contactInfo.push(addingContact);

    //alerting to the user that the contact is added
    alert("Contact Added");
}

//Removes a contact from your list 
function DeleteContact(){
    //prompting the user for the usernames contact
    let aContactRemoved = prompt("Enter the contact's username you want to delete");

    //getting the index of the username's object with a username of aContactRemoved
    const removeIndex = contactInfo.findIndex(contact => contact.username === aContactRemoved);

    //removing the object
    contactInfo.splice(removeIndex, 1);

    //alerting to the user that the contact is deleted
    alert("Contact Deleted");
}    
//Finding a Contact by using their username 
//and searching through contactInfo for it
function FindContact(){ 
    let found = false;
    let aContact = prompt("Enter the contact's username you want to find");
    for (let i = 0; i < contactInfo.length; i++)
    {
        if (contactInfo[i].username == aContact)
        {
            //alerting to the user that the contact was found
            alert("Contact Found");
            //displaying the contact info about the user
            alert("Title: " + contactInfo[i].usertitle +
                  "\nUsername: " + contactInfo[i].username +
                  "\nPhoneNumber: " + contactInfo[i].phoneNumber +
                  "\nEmail: " + contactInfo[i].email +
                  "\nPassword: " + contactInfo[i].password +
                  "\nDescription: " + contactInfo[i].description);
            found = true;       
        }
        
    }
    //if it cant find the username
    if(found == false)
    {
        //display an error message
        alert("Error: Contact Not Found");
    }

}

function ListContact(){
}

function EditContact(){
}


