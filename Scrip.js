function agregar(){
    var row;
    var column1, column2, column3, column4;
    var text1,text2, text3, text4;
    var tabla;


  


    var nombres=document.getElementById("caja1").value;
    var apellidos= document.getElementById("caja2").value;
    var genero;
    var Estadocivil;  
    rd1=document.getElementById("rd1");
    rd2=document.getElementById("rd2");


    

    if(document.getElementById("select1").value==="1"){
        genero="Masculino"
        if (rd1.checked){
            Estadocivil="Casado";
        }
    
        if (rd2.checked){
            Estadocivil="Soltero";
        }
        
    }
    if(document.getElementById("select1").value==="2"){
        genero="Femenino"

        if (rd1.checked){
            Estadocivil="Casada";
        }
    
        if (rd2.checked){
            Estadocivil="Soltera";
        }
    }

    

        row=document.createElement("tr");    
            
        column1=document.createElement("td");
        column2=document.createElement("td");
        column3=document.createElement("td");
        column4=document.createElement("td");

        text1=document.createTextNode(nombres);
        text2=document.createTextNode(apellidos);
        text3=document.createTextNode(genero);
        text4=document.createTextNode(Estadocivil);

        tabla= document.getElementById("tablas");

        column1.appendChild(text1)
        row.appendChild(column1)
        tabla.appendChild(row);

        column2.appendChild(text2)
        row.appendChild(column2)
        tabla.appendChild(row);

        column3.appendChild(text3)
        row.appendChild(column3)
        tabla.appendChild(row);

        column4.appendChild(text4)
        row.appendChild(column4)
        tabla.appendChild(row);
  
}

rd1.addEventListener('click', function(){
        rd1.checked=true;
        rd2.checked=false;
})



rd2.addEventListener("click", function(){
        rd2.checked=true;
        rd1.checked=false;
})