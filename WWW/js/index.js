/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}




function handleSubmit () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const city = document.getElementById('city').value;
    const honeymoon = document.getElementById('honeymoon').value;
    const profession = document.getElementById('profession').value;
    const hobbies = document.getElementById('hobbies').value;
    const inter = document.getElementById('inter').value;
    const weadding = document.getElementById('weadding').value;
    const dateofbirth = document.getElementById('dateofbirth').value;
   

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */

    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname);
    sessionStorage.setItem("CITY", city);
    sessionStorage.setItem("HONEYMOON", honeymoon);
    sessionStorage.setItem("PROFESSION", profession);
    sessionStorage.setItem("HOBBIES", hobbies);
    sessionStorage.setItem("INTER", inter);
    sessionStorage.setItem("WEADDING", weadding);
    sessionStorage.setItem("DATEOFBIRTH", dateofbirth);

    return;
}


function goBack() {
  window.history.back();
}

