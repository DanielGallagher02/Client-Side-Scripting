//imgLeaders - images of leaders in an array 
var imgLeaders = [
    "biden.png",
    "Draghi.png",
    "jinping.png",
    "johnson.png",
    "Macron.png",
    "merkel.png",
    "morrison.png",
    "suga.png",
    "Trudeau.png",
    "vonderleyen.png",
];

//imgLeaderNames - names of leaders in an array
var imgLeadersNames = [
    "USA: Joe Biden",    //USA
    "Italy: Mario Drgahi", //Italian
    "China: Xi Jinping",   //China
    "UK: Boris Johnson",    //UK
    "France: Emmanuel Macron", //France
    "Germany: Angela Merkel",    //Germany
    "Australia: Scott Morrison", //Australia
    "Japan: Yoshihide Suga", //Japan
    "Canadian: Justin Trudeau", //Canadian
    "Europe: Ursula von der Leyen" //EU
];

var counter = 0;

function AddImage(){ 
// Adds additional leader images onto the page 
// only a max of 10 images of world leaders
// Duplicate leaders images should not be displayed
    if(counter < 10 && counter !== imgLeaders[counter])
    {
        //Adding Images to the div with an id called 'images'
        //Adding the imgLeaders images 
        let i = document.createElement("img");
        //Changes the source of the images of leaders to the counter 
        i.src = "images/" + imgLeaders[counter];
        //Getting the parent node of the id Images and save it to the variable
        //called images
        let images = document.getElementById('images');
        //add image to the parent node of id images
        images.appendChild(i);

        //Adding names to the list items inside the ol div called leaderNames
        //Adding leaders names to the div with an id called 'leaderNames'
        let names = document.createElement("li");
        //creating a document text and adding it to leaderNames
        names.appendChild(document.createTextNode(imgLeadersNames[counter]));
        let leaderNames = document.getElementById('leaderNames');
        //adding the name to the parent node of id leaderNames
        leaderNames.appendChild(names);
        //adds to the counter
        counter++;
    }
    else
    {
        //Displays when the add button is pressed when there is 10 images
        alert("Error: Can only add a max of 10 images")
    }    
}

function SwapImages(){
    // Swaps the first and last image currently displayed
    if (counter > 0 && counter !== 1)
    {
        //Swapping the Images from imgLeader array
        let img_node = document.getElementById('images');
        var firstImg = img_node.firstElementChild;
        var lastImg = img_node.lastElementChild;

        img_node.replaceChild(firstImg, lastImg);
        img_node.insertBefore(lastImg, firstImg);

        var firstArrayImg = imgLeaders[0];
        var lastArrayImg = imgLeaders[counter - 1];

        imgLeaders[0] = lastArrayImg;
        imgLeaders[counter - 1] = firstArrayImg;

        //Swapping the names from img leader names
        let name_node = document.getElementById('leaderNames');
        var firstName = name_node.firstChild;
        var lastName = name_node.lastChild;

        name_node.replaceChild(firstName, lastName);
        name_node.insertBefore(lastName, firstName);

        var firstArrayName = imgLeadersNames[0];
        var lastArrayName = imgLeadersNames[counter - 1];

        imgLeadersNames[0] = lastArrayName;
        imgLeadersNames[counter - 1] = firstArrayName;
    }
    else
    {
        //Display alert when there is 0 images or only 1 image displayed
        alert("Error: Cannot swap the images");
    }
}

function DeleteImage(){
    // It will delete the first(leftmost) image from the page
    // It should be disabled after the last image has been removed
    if (counter > 0)
    {
        //Removing Images 
        //Getting the parent node of id images and then saving it to images
        let images = document.getElementById('images');
        //Getting the first element of the images div
        var firstImg = images.firstElementChild;
        //removing the first image 
        images.removeChild(firstImg);
        //removes the first element of the array and storing it in first
        var first = imgLeaders.shift();
        //appends the first element to the end of the array
        imgLeaders.push(first);

        //Removing LeaderNames
        let names = document.getElementById('leaderNames');
        //Getting the first element of leaderNames div
        let firstname = names.firstChild;
        //removew the first name off on th leaderNames div
        names.removeChild(firstname);
        //removes the first element of the array of leaderNames and saves it to 
        //firstNamesEle
        let firstNamesEle = imgLeadersNames.shift();
        //adds the first element to the end of the array of leaderNames
        imgLeadersNames.push(firstNamesEle);
        //Decreases the counter
        counter--;
    } 
    else   
    {
        //Display alert if user has deleted all the images 
        alert("Error: Cannot delete the images");
    }
}

//Display 3 imgLeaders images to the screen on the html
window.onload = function(){
    for (let i = 0; i < 3; i++) {
        AddImage();
    }
}

