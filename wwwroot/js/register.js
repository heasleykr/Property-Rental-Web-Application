/*********** Global Variables **************/
//Create Property array
var propertyList = [];

//Cache DOM with an Object
var UI = {};

//Function to clear form
function clearForm(){
    
    //Find all my form values and clear them!
    $(".form-control").val('');

}

// Function to create a Property from Register Form
function saveProperty() {
    //get value into var
    var title = UI.$title.val();
    var price = UI.$price.val();
    var img = UI.$imgUrl.val();
    var beds = UI.$beds.val();
    var baths = UI.$bath.val();
    var area = UI.$area.val();
    var desc = UI.$description.val();
    var parking;
    
    
    
    //Grab correct checked box
    parking = $("input[name='radio']:checked").val();

    //create a Property Object
    var property = new Property(title, price, img, beds, baths, area, desc, parking);
    
    //Push to array
    propertyList.push(property);
    
    //clear the form
    clearForm();
    console.log("working");
    console.log(propertyList);

    //send object to BE (backend)

    //show a message to user
}

function init(){
    console.log("Register Page");

    // UI DOM Object
    UI = {
        //get value into var
        $title: $("#txtTitle"),
        $price: $("#txtPrice"),
        $imgUrl: $("#txtImg"),
        $beds: $("#txtBeds"),
        $bath: $("#txtBath"),
        $area: $("#txtArea"),
        $description: $("#txtDescription"),
    };

    //catch click events on button
    $("#btnSave").click(saveProperty);
}



window.onload = init;