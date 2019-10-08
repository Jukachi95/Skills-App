

// UserSearch Input
const UserSearch = document.getElementById("userSearchBtn");

// Event Listener
UserSearch.addEventListener("click", runSearch);


// Function that runs on search
function runSearch(){


     const UserInput = document.getElementById("userSearchSkill").value;
       
        // Add a isNot a number

        // Add a for in to the inner JS functions/object to loop through it, once the data has been fetched
        
           if(UserInput === "" || !isNaN(UserInput)){
            //    alert("Please Enter a Skill")
                displayErr()
                clearInput()

           } else if(UserInput === "js" || UserInput === "javascript" || UserInput === "Javascript"){
               fetch('stock.json').
               then(function(res){
                   return res.json();
               }).then(function(data){
                   let jsData = data[1];

                   console.log(jsData);

                  let output = '';

                  output+= `
                  <ol>
                   <h4 class = "mb-4">Top 10 JavaScript Courses</h4>
                        <li>${jsData.course1}</li>
                        <li>${jsData.course2}</li>
                        <li>${jsData.course3}</li>
                        <li>${jsData.course4}</li>
                        <li>${jsData.course5}</li>
                        <li>${jsData.course6}</li>
                        <li>${jsData.course7}</li>
                        <li>${jsData.course8}</li>
                        <li>${jsData.course9}</li>
                        <li>${jsData.course10}</li>
                  </ol>

                  `

                    document.querySelector('#render').innerHTML = output;

                   
                //    })
               })

            
           } else if(UserInput === "Python" || UserInput === "python" || UserInput === "py"){
                fetch('stock.json').
                then(function(res){
                 return res.json()   
                }).then(function(pyData){
                    
                    let pyResources = pyData[2];

                    

                   let output = '';

                        output+= `
                        <h4 class = "mb-4"> Top 10 Python Resources</h4> 
                        <ol>
                        <li>${pyResources.course1}</li>
                        <li>${pyResources.course2}</li>
                        <li>${pyResources.course3}</li>
                        <li>${pyResources.course4}</li>
                        <li>${pyResources.course5}</li>
                        <li>${pyResources.course6}</li>
                        <li>${pyResources.course7}</li>
                        <li>${pyResources.course8}</li>
                        <li>${pyResources.course9}</li>
                        <li>${pyResources.course10}</li>
                        </ol> 
                        `;

                        document.querySelector('#render').innerHTML = output;
                  

                })


           } else if(UserInput === "React" || UserInput === "react" || UserInput === "REACT"){

            // fetch('stock.json').
            // then(function(res){
            //     return res.json();
            // }).then(function(reactData){
            //     console.log(reactData.React)
            // })

            fetch('stock.json').
            then(res => res.json()).
            then(reactData =>
                 {let rData = reactData[3]

                    let output = '';

                    output+=`
                    <h4 class = "mb-4"> Top 8 React Courses</h4>
                    <ol>
                    <li>${rData.course1}</li>
                    <li>${rData.course2}</li>
                    <li>${rData.course3}</li>
                    <li>${rData.course4}</li>
                    <li>${rData.course5}</li>
                    <li>${rData.course6}</li>
                    <li>${rData.course7}</li>
                    </ol>
                    `
                    document.querySelector('#render').innerHTML = output;
                
                }
                 
                 )

           } else if(UserInput === "Vue" || UserInput === "VUE" || UserInput === "VueJS" || UserInput === "vue" || UserInput === "vuejs" || UserInput === "vue js"){

            fetch('stock.json')
            .then(res => res.json()).
            then(vueData => {
               let vue = vueData[0];

               console.log(vue);
                let output = '';

               

                    output+=`
                    <h4 class="mb-4">Top 5 Vue Courses</h4>

                    <ol>
                    <li>${vue.course1}</li>
                    <li>${vue.course2}</li>
                    <li>${vue.course3}</li>
                    <li>${vue.course3}</li>
                    <li>${vue.course5}</li>
                    </ol>
                    `;

                    document.querySelector('#render').innerHTML= output;

                    clearInput();


            })

           } else if(UserInput.length < 2 && UserInput != "c"){
               lowTextLength();
           }
    

           
           

    

}


        function displayErr(){

            // Create div that will hold data
        let displayDiv = document.createElement("div");

        //    Add class of danger to displayDiv

            displayDiv.className = 'alert alert-danger';

            // Append text

            displayDiv.appendChild(document.createTextNode('Please enter a skill. No numbers or special characters permitted'))  

            let mainContainer = document.querySelector('#mainContainer');

            let render = document.querySelector('#render');

            mainContainer.insertBefore(displayDiv, render);

            setTimeout(function(){ 
                document.querySelector('.alert').remove();
            }, 4700);

        }

        function lowTextLength(){

            let lowTextAlert = document.createElement('div');

            lowTextAlert.className = 'alert alert-warning';

            lowTextAlert.appendChild(document.createTextNode("Search criteria must be at least 2 characters"));

            let mainContainer = document.querySelector('#mainContainer');

            let render = document.querySelector('#render');

            mainContainer.insertBefore(lowTextAlert, render);

            setTimeout(function(){
                document.querySelector('.alert-warning').remove();
            },4700);

            clearInput()

        }


        // Clear Input Box
        function clearInput(){

            setTimeout(function(){
                let input = document.querySelector("#userSearchSkill");

                input.value = '';
            },4000)
           
        }


// Things to add
// // Add a loading animation



 // As one whole object or as an array of objects
    //     "Python": "Colt Steele Python Bootcamp",
    
    //     "Data Analysis": "",
    
    //     "Cyber Security": ""
    // 

