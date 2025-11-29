document.addEventListener("DOMContentLoaded", () => {
    let fleetData=[];

    const addBtn=document.getElementById("addBtn");
    const container=document.getElementById("container");
    const categoryFilter=document.getElementById("categoryFilter");
    const availabilityFilter=document.getElementById("availabilityFilter");
    const clearFilter=document.getElementById("clearFilter");
    if (!container) return console.error("Container not found");
 if (addBtn){
addBtn.addEventListener("click",()=>{
    const regno=document.getElementById("regno").value.trim();
    const category=document.getElementById("category").value.trim();
    const availability=document.getElementById("isAvailable").value.trim();
    const driver=document.getElementById("driver").value.trim();
    if (!regno||!driver) return window.alert("please fill all the fields");
    fleetData.push({regno, category, availability, driver});
    renderCards(fleetData);
});
 }



function renderCards(dataArray=fleetData) {
    
    container.innerHTML="";


    dataArray.forEach((item)=>{
        const realIndex=fleetData.indexOf(item);
        const card= document.createElement("div");
        card.classList.add("card");
        card.innerHTML=
        `
        <h3>${item.regno}</h3>
        <p>${item.category}</p>
        <p>${item.availability}</p>
        <p>${item.driver}</p>
        <div class="card-actions"
        <button class="updateBtn" onclick="update(${realIndex})">UpdateBtn
        </button>
        <button class="deleteBtn" onclick="deleteVehicle(${realIndex})">DeleteBtn
        </button>
        <button class="availBtn" onclick="changeAvailability(${realIndex})">Change Availability</button>
        </div>
        

        `;
        container.appendChild(card);
    })


container.querySelectorAll(".deleteBtn").forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        deleteVehicle(Number(e.currentTarget.dataset.index));
    });
});
}
container.querySelectorAll(".availBtn").forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        changeAvailability(Number(e.currentTarget.dataset.index));
    });
});
container.querySelectorAll(".updateBtn").forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        update(Number(e.currentTarget.dataset.index));
    });
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
})