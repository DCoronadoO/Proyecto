const json = {
    "contactos":[
        {"manzana": 4,"villa": 1,"cedula": "0945718519","nombreyapellido": "Luís de Ballesteros",
        "telefono": "0937465753","correo_electronico": "jb@gmail.com","fechainicio": "27/12/2020"},
        {"manzana": 4,"villa": 2,"cedula": "0943067232","nombreyapellido": "Juan José Castro Querol",
        "telefono": "0938588834","correo_electronico": "jjcq@gmail.com","fechainicio": "27/05/2021"},
        {"manzana": 4,"villa": 3,"cedula": "0957151032","nombreyapellido": "Eloísa Pons Vizcaíno",
        "telefono": "0940507421","correo_electronico": "epv@gmail.com","fechainicio": "27/11/2020"},
        {"manzana": 4,"villa": 4,"cedula": "0936834767","nombreyapellido": "Joan Luján Zurita",
        "telefono": "0946861279","correo_electronico": "jlz@gmail.com","fechainicio": "17/10/2020"},
        {"manzana": 4,"villa": 5,"cedula": "0955767825","nombreyapellido": "Marianela Coloma Cifuentes",
        "telefono": "0941819729","correo_electronico": "mcf@gmail.com","fechainicio": "22/05/2021"},
        {"manzana": 4, "villa": 6,"cedula": "0956878318","nombreyapellido": "Julio España Collaguazo",
        "telefono": "0945407666","correo_electronico": "julio-elpro12@hotmail.com","fechainicio": "15/08/2020"},
        {"manzana": 2,"villa": 1,"cedula": "0973653562","nombreyapellido": "Iker Gregorio Carnero Ramos",
        "telefono": "0938852595","correo_electronico": "ikerg@gmail.com","fechainicio": "15/09/2021"},
        {"manzana": 2,"villa": 2,"cedula": "0947194375","nombreyapellido": "Emperatriz Noelia Rosales Uriarte",
        "telefono": "0945624984","correo_electronico": "noelia@gmail.com","fechainicio": "30/10/2021"},
        {"manzana": 2,"villa": 3,"cedula": "0937550787", "nombreyapellido": "Loreto Nicolás Redondo",
        "telefono": "0944983983","correo_electronico": "lnr@gmail.com","fechainicio": "25/11/2020"},
        {"manzana": 2,"villa": 4, "cedula": "0947694983","nombreyapellido": "Jacobo Calderon Sales",
        "telefono": "943346685","correo_electronico": "jacob@gmail.com","fechainicio": "25/11/2020"},
        {"manzana": 2,"villa": 5,"cedula": "0938945977","nombreyapellido": "Segismundo Sureda Armengol",
        "telefono": "0940090625","correo_electronico": "","fechainicio": "25/11/2020"},
        {"manzana": 3,"villa": 1,"cedula": "0951579604","nombreyapellido": "Jesusa Chico Belda",
        "telefono": "0944494020","correo_electronico": "jesus@gmail.com","fechainicio": "22/12/2021"},
        {"manzana": 3,"villa": 2,"cedula": "0928885320","nombreyapellido": "Rodolfo Cámara Cobo",
        "telefono": "0937636225","correo_electronico": "rodolf@gmail.com","fechainicio": "13/07/2021"},
        {"manzana": 3,"villa": 3,"cedula": "0974906360","nombreyapellido": "Sandalio Juliá Monreal",
        "telefono": "941059671","correo_electronico": "juli@gmail.com", "fechainicio": "12/09/2021"},
        {"manzana": 3,"villa": 4,"cedula": "0948671389","nombreyapellido": "Julián Real-Goñi",
        "telefono": "0943929137", "correo_electronico": "real@gmail.com","fechainicio": "18/12/2021"},
        {"manzana": 5,"villa": 1,"cedula": "0960022408","nombreyapellido": "Irene Rosell Solís",
        "telefono": "0937838160","correo_electronico": "ire@gmail.com","fechainicio": "25/11/2020"},
        {"manzana": 5,"villa": 2,"cedula": "0971860766","nombreyapellido": "Cleto Segarra Baeza",
        "telefono": "0943971411","correo_electronico": "cleto@gmail.com","fechainicio": "10/10/2020"},
        {"manzana": 5,"villa": 3,"cedula": "0977738351","nombreyapellido": "Cecilia Guerra Verdejo",
        "telefono": "0946082080","correo_electronico": "ceci@gmail.com","fechainicio": "11/08/2021"},
        {"manzana": 5,"villa": 4,"cedula": "0940035980","nombreyapellido": "Cebrián Maestre Miralles",
        "telefono": "0938269818","correo_electronico": "cmm@gmail.com","fechainicio": "10/10/2020"},
        {"manzana": 1,"villa": 1,"cedula": "0947186603","nombreyapellido": "Catalina Arellano",
        "telefono": "0944805859","correo_electronico": "cataliana@gmail.com","fechainicio": "10/10/2020"},
        {"manzana": 1, "villa": 2,"cedula": "0959560801","nombreyapellido": "Bernardita Marqués Fábregas",
        "telefono": "0938141622","correo_electronico": "bernar@gmail.com","fechainicio": "22/05/2021"},
        {"manzana": 1,"villa": 3,"cedula": "0937253884","nombreyapellido": "Macaria Rivas Alemán",
        "telefono": "0944557390", "correo_electronico": "maca@gmail.com","fechainicio": "22/05/2021"},
        {"manzana": 1,"villa": 4,"cedula": "0936776491","nombreyapellido": "Alicia Mur Montaña",
        "telefono": "0939168350","correo_electronico": "alicia@gmail.com","fechainicio": "27/11/2020"}
    ]
}
    function load() {
    var mydata = data.contactos
    var th = document.getElementById('data');
    for (var i = 0; i < mydata.length; i++) {
        //div.innerHTML = div.innerHTML + "<div class=" + 'c' + mydata[i].id_residente + " id=" + 'c' + mydata[i].id_residente + ">" + mydata[i].id_residente + "</div>";
        th.innerHTML = th.innerHTML + "<th"+ mydata[i].nombreyapellido+ ">"+ "</th>";
    }
}
function cargarDatos(){
    var DatosJson = JSON.parse(JSON.stringify(json));
    console.log(DatosJson.contactos.length);
    $("#Table").append('<tr><td>Nombre</td>'+
 	'<td>Apellido paterno</td>' + 
 	'<td>Edad</td>');
    for (i = 0; i < DatosJson.contactos.length; i++){
 
 $("#Table").append('<tr>' + 
 	'<td align="center" style="dislay: none;">' + DatosJson.contactos[i].nombre + '</td>'+
 	'<td align="center" style="dislay: none;">' + DatosJson.contactos[i].apePaterno + '</td>'+
 	'<td align="center" style="dislay: none;">' + DatosJson.contactos[i].edad + '</td>'+'</tr>');
    }
}
