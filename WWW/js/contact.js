var firebaseConfig = {
    apiKey: "AIzaSyBi_UDpdtoruaBV5_T-1HPkWMdPKZeP8jE",
    authDomain: "lovecalendarapp-fe8f9.firebaseapp.com",
    databaseURL: "https://lovecalendarapp-fe8f9.firebaseio.com",
    projectId: "lovecalendarapp-fe8f9",
    storageBucket: "lovecalendarapp-fe8f9.appspot.com",
    messagingSenderId: "171300955166",
    appId: "1:171300955166:web:7da2de2e414d6db7f5ba0f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


let contactInfo = firebase.database().ref("contactData");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
  
}
