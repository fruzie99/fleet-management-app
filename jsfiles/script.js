let fleetData=[];
 document.getElementById("addBtn").addEventListener("click", () => {
     const regno=document.getElementById("regno").value.trim();
     const category=document.getElementById("category").value.trim();
     const availability=document.getElementById("isAvailable").value.trim();
     const driver=document.getElementById("driver").value.trim();
     
     if (!regno||!driver) return window.alert("please fill all the fields");
    
     
     
 })