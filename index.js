function  Encrypt_compute()
{
  var str = document.getElementById("encrypt").value;
  var amount=parseInt(document.getElementById("ip").value);
  console.log(typeof(amount))
   function encypt (str, amount){

    // Wrap the amount
    if (amount < 0) {
      return caesarShift(str, amount + 26);
    }
    // Make an output variable
    var output = "";
    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      var c = str[i];
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = str.charCodeAt(i);
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
      // Append
      output += c;
    }
    // All done!
    return output;
  };
  var caesarShift =encypt(str, amount)
  document.getElementById("result").innerHTML = '<h3>Encrypted Text for  "'+str +'" is "' + caesarShift + '"</h3>'
}

function  Decrypt_compute()
{
  var code = document.getElementById("decrypt").value;
  var str=code.toUpperCase();
  var amount=parseInt(document.getElementById("ip").value);

   function encypt (str, amount){
     if(str===''){
       if (!alert('Enter value Properly')) {
      window.location.reload();
      return
    }
     }
    // Wrap the amount
    if (amount < 0) {
      return caesarShift(str, amount + 26);
    }
    // Make an output variable
    var output = "";
    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      var c = str[i];
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = str.charCodeAt(i);
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code + 65 - amount) % 26) + 65);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code + 97 - amount) % 26) + 97);
        }
      }
      // Append
      output += c;
    }
    // All done!
      var decrypted=output.toLowerCase();
    return decrypted;
  };
  var caesarShift =encypt(str, amount)

document.getElementById("result").innerHTML = '<h3>Decrypted Text for  "'+code +'" is "' + caesarShift + '"</h3>'
}






var form2 = document.getElementById("myForm2");

function handleForm(event) {
  event.preventDefault();
}
form2.addEventListener('submit', handleForm);



var form = document.getElementById("myForm");

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);
