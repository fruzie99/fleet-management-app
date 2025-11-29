let fleetData=[];
 document.getElementById("addBtn").addEventListener("click", () => {
     const regno=document.getElementById("regno").value.trim();
     const category=document.getElementById("category").value.trim();
     const availability=document.getElementById("isAvailable").value.trim();
     const driver=document.getElementById("driver").value.trim();
     
     if (!regno||!driver) return window.alert("please fill all the fields");
     fleetData.push({regno, category, availability, driver});
     renderCards(fleetData);
     
 })

function renderCards(Data) {
    const container=document.getElementById("container");
    container.innerHTML="";


    data.forEach((item,index)=>{
        const cards= document.createElement("div");
        cards.classList.add("card");
        cards.innerHTML=
        `
        <h3>${item.regno}</h3>
        <p>${item.category}</p>
        <p>${item.availability}</p>
        <p>${item.driver}</p>
        <button onclick="deleteCard(${index})">Delete</button>

        `;
        container.appendChild(cards);
    })



    //update driver

    window.update=(i)=>{
        const ndriver=prompt("Enter new driver name");
        if(ndriver && ndriver.trim()!=="") {
            fleetData[i].driver=ndriver;
            renderCards(fleetData);}
            else{
                window.alert("Driver name cannot be empty");
            }
        }
    }

    //availability changing
    window.changeAvailability=(i)=>{
        fleetData[i].availability=fleetData[i].availability==="Available"?"Unavailable":"Available";
        renderCards(fleetData);
    }

    //delete card
    window.deleteVehicle=(i)=>{
        if(confirm("Are you sure you want to delete this vehicle?")){
            fleetData.splice(i,1);
            renderCards(fleetData);
        }
    }

//fILTERS
document.getElementById("categoryFilter").addEventListener("change", () => {
    const selectedCategory = document.getElementById("categoryFilter").value;
    const filteredData = fleetData.filter((item) => item.category === selectedCategory);
    renderCards(filteredData);
  });
  
  document.getElementById("availabilityFilter").addEventListener("change", () => {
    const selectedAvailability = document.getElementById("availabilityFilter").value;
    const filteredData = fleetData.filter((item) => item.availability === selectedAvailability);
    renderCards(filteredData);
  });
  
  document.getElementById("clearFilter").addEventListener("click", () => {
    renderCards(fleetData);
  });
