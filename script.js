var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var password;

// Creating a variable for the generate button so it can be used lateron
var generateBtn = document.querySelector("#generate");

// This function will print the password in the text area
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");
}

generateBtn.addEventListener("click", function () {
  var passSize = prompt(
    "How many characters would you like your password to contain"
  );

  //setting pasword array to empty so clicking the buttong again doesnt contain old values
  password = [];

  //The if condition to check if the pasword is of the required length or not
  if (passSize >= 8 && passSize <= 128) {
    //Displaying the different condition in the confirm box on the screen
    var specialChar = confirm(
      "Click OK to confirm including special characters"
    );
    var numChar = confirm("Click OK to confirm including numeric characters");

    var lowerCaseChar = confirm(
      "Click OK to confirm including lowercase characters"
    );

    var upperCaseChar = confirm(
      "Click OK to confirm including uppercase characters"
    );

    //If the user clicks on okay on the first confirm box then this will be executed
    if (specialChar) {
      //creating two random chars varriables so 2 random special charatcers can be added to the password
      var randomSpecialChar1;
      var randomSpecialChar2;
      //using floor and random function + ASCI valuse to get two random special chars
      randomSpecialChar1 = Math.floor(Math.random() * (47 - 33) + 33);
      randomSpecialChar1 = String.fromCharCode(randomSpecialChar1);
      randomSpecialChar2 = Math.floor(Math.random() * (47 - 33) + 33);
      randomSpecialChar2 = String.fromCharCode(randomSpecialChar2);
      //pushing the special chars into the array
      password.push(randomSpecialChar1);
      password.push(randomSpecialChar2);
    }

    //if the user click on OK for the number confirm box then this will be executed
    if (numChar) {
      //creating two variable so 2 random numbers can be added
      var randomNumChar1 = "";
      var randomNumChar2 = "";
      //using floor and random function + ASCI valuse to get two random numbers
      randomNumChar1 = Math.floor(Math.random() * (57 - 48) + 48);
      randomNumChar1 = String.fromCharCode(randomNumChar1);
      randomNumChar2 = Math.floor(Math.random() * (57 - 48) + 48);
      randomNumChar2 = String.fromCharCode(randomNumChar2);
      password.push(randomNumChar1);
      password.push(randomNumChar2);
    }
    if (lowerCaseChar) {
      //creating two variables so two lower case alphabets can be added
      var randomLowerCase1 = "";
      var randomLowerCase2 = "";
      //using random function and ASCI valuse to get two random lowercase alphabtes
      randomLowerCase1 = Math.floor(Math.random() * (122 - 97) + 97);
      randomLowerCase1 = String.fromCharCode(randomLowerCase1);
      randomLowerCase2 = Math.floor(Math.random() * (122 - 97) + 97);
      randomLowerCase2 = String.fromCharCode(randomLowerCase2);
      //pushing the alphabets into the array
      password.push(randomLowerCase1);
      password.push(randomLowerCase2);
    }
    if (upperCaseChar) {
      //creating two variable for two upper case alphabets
      var randomUpperChar1 = "";
      var randomUpperChar2 = "";
      //using random function and ASCI valuse to get two random upper alphabtes
      randomUpperChar1 = Math.floor(Math.random() * (90 - 65) + 65);
      randomUpperChar1 = String.fromCharCode(randomUpperChar1);
      randomUpperChar2 = Math.floor(Math.random() * (90 - 65) + 65);
      randomUpperChar2 = String.fromCharCode(randomUpperChar2);
      password.push(randomUpperChar1);
      password.push(randomUpperChar2);
    }
  } else if (passSize < 8) {
    confirm("Password length must be at least 8 characters");
  } else if (passSize > 128) {
    confirm("Password length cant be greater than 128 characters");
  }

  //The random password generating functions
  function generatePassword(passSize, password) {
    //to determing how many more chars needs to be added
    var totalLength = passSize - password.length;
    console.log(totalLength);
    for (let i = 0; i < totalLength; i++) {
      //will push the chars from the lowerCase string into the password array
      password.push(
        LowerCase.charAt(Math.floor(Math.random() * LowerCase.length))
      );
    }
    //Removing the comma between the chars
    password = password.join("");
    return password;
  }
  //calling functions
  generatePassword(passSize, password);
  writePassword(password);
});
