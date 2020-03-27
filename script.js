// Write your JavaScript code here!
/*
First, let's add validation to notify the user if they forgot to enter a value for any one of the fields.

This process is going to look similar to the validation section in the chapter on forms. Make sure to use 
preventDefault() and an alert to notify the user that all fields are required.

You also want to make sure that the user entered valid info for each of the fields. Valid information for 
the fields means that the user submits a value that is easily converted to the correct data type for our 
fellow engineers. The pilot and co-pilot names should be strings and the fuel level and cargo mass should
be numbers.
*/
window.addEventListener("load", function(){
   let getForm = document.querySelector("form");
   getForm.addEventListener("submit", function(){
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if(isNaN(pilotNameInput.value)){
         console.log("Pilot name is a string");
      }else{
         alert("Pilot name must be a string");
         event.preventDefault();
      }
      
      if(isNaN(copilotNameInput.value) === false){
         alert("CoPilot name needs to be a string of letters");
         event.preventDefault();
      }

      if(isNaN(cargoMassInput.value)){
         alert("Cargo Mass must be a number.");
         event.preventDefault();
      }

      if(isNaN(fuelLevelInput.value)){
         alert("Fuel level must be a number.");
         event.preventDefault();
      }
      if(pilotNameInput.value === ""|| copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("All fields are required!");
      }
     
     
   });
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
