
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



window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */


    const inter = sessionStorage.getItem('INTER');
    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');
    const honeymoon = sessionStorage.getItem('HONEYMOON');
    const profession = sessionStorage.getItem('PROFESSION');
    const hobbies = sessionStorage.getItem('HOBBIES');
    const city = sessionStorage.getItem('CITY');
    const dateofbirth = sessionStorage.getItem('DATEOFBIRTH');
    const weadding = sessionStorage.getItem('WEADDING');
    



    document.getElementById('result-inter').innerHTML = inter;
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;
    document.getElementById('result-honeymoon').innerHTML = honeymoon;
    document.getElementById('result-profession').innerHTML = profession;
    document.getElementById('result-hobbies').innerHTML = hobbies;
    document.getElementById('result-city').innerHTML = city;
    document.getElementById('result-dateofbirth').innerHTML = dateofbirth;
    document.getElementById('result-weadding').innerHTML = weadding;
})





