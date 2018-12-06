

document.getElementById("ajax").addEventListener("click",ajax);
const form=document.getElementById("form-row");
const titleElement=document.querySelector("#title");
const writerElement=document.querySelector("#writer");
const homeElement=document.querySelector("#publishinghome");
const pagesElement=document.querySelector("#pages");


function ajax(){

    const xhr=new XMLHttpRequest();
    xhr.open("GET","http://5bfea60b362b930013f65267.mockapi.io/api/book2/book_data2");
    xhr.onload=function(){
       let list=document.getElementById("employees");
        if(this.status==200){
            const employes=JSON.parse(this.responseText);
            employes.forEach(function(employee){
                list.innerHTML +=`
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.writer}</td>
                    <td>${employee.publishing_house}</td>
                    <td>${employee.pages}</td>
           
                </tr>
        
            `
           } );

           
        }
}    
         xhr.send(); 
}
