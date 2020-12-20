

function testPassword(pass) {
    var score = 0;
    var message = "";

    if (pass.length < 6) {
        score = score + 10;
    } else if (pass.length > 6 && pass.length < 8) {
        score = score + 20
    } else {
        score = score + 30;
    }
    if (!/[ !@#$%^&*()_+\-=[\]{};'"\\|,.<>\/S?]/.test(pass)) {
        score = score + 10;
    } else {
        score = score + 20;
    }
    if (/[A-Z]/.test(pass)) {
        score = score + 30;
    } else {
        score = score + 10;
    }

    switch (score) {
        case 10:
            message = "parola slaba";
            break;
        case 20:
            message = "parola slaba";
            break;
        case 30:
            message = "parola slaba";
            break;
        case 40:
            message = "parola medie";
            break;
        case 50:
            message = "parola medie";
            break;
        case 60:
            message = "parola medie";
            break;
        case 70:
            message = "parola medie";
            break;
        case 80:
            message = "parola sigura";
            break;
        case 90:
            message = "parola sigura";
            break;
        case 100:
            message = "parola sigura";
            break;
    }
    alert(message);
}

/* let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
} */
 