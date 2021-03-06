// https://github.com/Dipta-prog/javascript-assignment





function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var meter = kilometer * 1000;
        return meter;
    }
    //If user enters negative input
    else if (kilometer < 0) {
        return "Distance can't be negative.\nEnter a valid number";
    }
    //If user enters non number type input
    else if (typeof kilometer != "number") {
        return "Only Number as input is allowed";
    }
}







function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {
    //If user inputs in words
    if (typeof numberOfWatch != "number" || typeof numberOfMobile != "number" || typeof numberOfLaptop != "number") {
        return "Enter only number type data"
    }
    //If user inputs fraction number
    else if ((numberOfWatch && numberOfWatch % 1 != 0) || (numberOfMobile && numberOfMobile % 1 != 0) || (numberOfLaptop && numberOfLaptop % 1 != 0)) {
        return "Enter only integer number";
    }
    else if ((numberOfWatch >= 0 && numberOfMobile >= 0 && numberOfLaptop >= 0)) {
        var total = (50 * numberOfWatch) + (100 * numberOfMobile) + (500 * numberOfLaptop);
        return total;
    }
    //If user inputs negative number
    else {
        return "Number of an item can't be negative.Enter three positive numbers as input of the function";
    }
}







function hotelCost(numberOfDays) {
    //If user enter number of days in words
    if (typeof numberOfDays != "number") return "enter number type data only";
    //If user enter fraction number of days
    else if (numberOfDays && numberOfDays % 1 != 0) return "Please don't enter fraction number of days";
    //If user enter negative number of days
    else if (numberOfDays < 0) return "Number of days can't be negative";
    else if ((numberOfDays >= 0) && (numberOfDays <= 10)) {
        return (100 * numberOfDays);
    }
    else if ((numberOfDays > 10) && (numberOfDays <= 20)) {
        var total = (100 * 10) + (80 * (numberOfDays - 10));
        return total;
    }
    else if (numberOfDays > 20) {
        var final = (100 * 10) + (80 * 10) + (50 * (numberOfDays - 20));
        return final;
    }
}







function megaFriend(nameArray) {
    var notString = false;
    var blankElement = false;
    var spaceBeforeName = false;
    for (var a = 0; a < nameArray.length; a++) {
        var eachElement = nameArray[a];
        if (typeof nameArray[a] != "string") {
            notString = true;
        }
        if (eachElement.length == 0) {
            blankElement = true;
        }
        if (eachElement[0] == " ") {
            spaceBeforeName = true;
        }
    }
    //If user enters an empty array
    if (nameArray.length == 0) {
        return "This is an empty array. Enter valid input names";
    }
    //If user enters not an array
    else if (Array.isArray(nameArray) == false) {
        return "Your entered value is not an array. pleasee enter an array";
    }
    //If user enters an array with differnt data types
    else if (notString == true) {
        return "Enter only string type data";
    }
    //If user enters an array with empty element
    else if (blankElement == true) {
        return "You entered blank element.Please fill the string";
    }
    //If user enters an empty/white space before name
    else if (spaceBeforeName == true) {
        return "You entered space before name.Please delete the space";
    }
    else {
        var longentName = nameArray[0];
        for (var i = 0; i < nameArray.length; i++) {
            var element = nameArray[i];
            if (element.length > longentName.length) {
                longentName = element;
            }
        }
        return longentName;
    }

}




