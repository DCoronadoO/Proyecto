const data = {
    "urbanizaciones": [
        {
            "id_residente": 1,
            "manzana": 11,
            "villa": 10,
            "telefono": 987654321,
            "estado": "yellow"
        },
        {
            "id_residente": 2,
            "manzana": 12,
            "villa": 20,
            "telefono": 98765432,
            "estado": "verde"
        },
        {
            "id_residente": 3,
            "manzana": 13,
            "villa": 30,
            "telefono": 987654323,
            "estado": "yellow"
        },
        {
            "id_residente": 4,
            "manzana": 14,
            "villa": 40,
            "telefono": 987654324,
            "estado": "verde"
        },
        {
            "id_residente": 5,
            "manzana": 15,
            "villa": 50,
            "telefono": 987654325,
            "estado": "verde"
        },
        {
            "id_residente": 6,
            "manzana": 16,
            "villa": 60,
            "telefono": 987654326,
            "estado": "verde"
        },
        {
            "id_residente": 7,
            "manzana": 21,
            "villa": 70,
            "telefono": 987654327,
            "estado": "verde"
        },
        {
            "id_residente": 8,
            "manzana": 22,
            "villa": 80,
            "telefono": 987654328,
            "estado": "gray"
        },
        {
            "id_residente": 9,
            "manzana": 23,
            "villa": 90,
            "telefono": 987654329,
            "estado": "verde"
        },
        {
            "id_residente": 10,
            "manzana": 24,
            "villa": 100,
            "telefono": 987654331,
            "estado": "verde"
        },
        {
            "id_residente": 11,
            "manzana": 31,
            "villa": 110,
            "telefono": 987654332,
            "estado": "gray"
        },
        {
            "id_residente": 12,
            "manzana": 32,
            "villa": 120,
            "telefono": 987654333,
            "estado": "verde"
        },
        {
            "id_residente": 13,
            "manzana": 33,
            "villa": 130,
            "telefono": 987654334,
            "estado": "yellow"
        },
        {
            "id_residente": 14,
            "manzana": 34,
            "villa": 140,
            "telefono": 987654335,
            "estado": "yellow"
        },
        {
            "id_residente": 15,
            "manzana": 35,
            "villa": 150,
            "telefono": 987654336,
            "estado": "red"
        },
        {
            "id_residente": 16,
            "manzana": 41,
            "villa": 160,
            "telefono": 987654337,
            "estado": "verde"
        },
        {
            "id_residente": 17,
            "manzana": 42,
            "villa": 170,
            "telefono": 987654338,
            "estado": "verde"
        },
        {
            "id_residente": 18,
            "manzana": 43,
            "villa": 180,
            "telefono": 987654339,
            "estado": "yellow"
        },
        {
            "id_residente": 19,
            "manzana": 44,
            "villa": 190,
            "telefono": 987654341,
            "estado": "verde"
        },
        {
            "id_residente": 20,
            "manzana": 0,
            "villa": 0,
            "telefono": 0,
            "estado": "transparent"
        },
        {
            "id_residente": 21,
            "manzana": 51,
            "villa": 210,
            "telefono": 987654342,
            "estado": "red"
        },
        {
            "id_residente": 22,
            "manzana": 52,
            "villa": 220,
            "telefono": 987654343,
            "estado": "verde"
        },
        {
            "id_residente": 23,
            "manzana": 53,
            "villa": 230,
            "telefono": 987654344,
            "estado": "verde"
        },
        {
            "id_residente": 24,
            "manzana": 54,
            "villa": 240,
            "telefono": 987654345,
            "estado": "verde"
        }
    ]
}
function load() {
    var mydata = data.urbanizaciones
    var div = document.getElementById('data');
    for (var i = 0; i < mydata.length; i++) {
        div.innerHTML = div.innerHTML + "<div class=" + 'c' + mydata[i].id_residente + " id=" + 'c' + mydata[i].id_residente + ">" + mydata[i].id_residente + "</div>";
    }
}

function residente() {
    var mydata = data.urbanizaciones
    mydata.forEach(item => {
        if (item.estado === 'verde') {
            document.getElementById('c' + item.id_residente).classList.add('verde');
        }
        if(item.estado === 'red'){
            document.getElementById('c' + item.id_residente).classList.add('red');
           
       
        }if(item.estado === 'yellow'){
            document.getElementById('c' + item.id_residente).classList.add('yellow');
        }if(item.estado === 'gray'){
            document.getElementById('c' + item.id_residente).classList.add('gray');
        }console.log(item)
    });console.log("---------------------------------------------------------------")
}

function rsinDeudas() {
    var mydata = data.urbanizaciones
    mydata.forEach(item => {
        if (item.estado === 'verde') {
            document.getElementById('c' + item.id_residente).classList.add('verde');
            console.log(item)
        }else{
            document.getElementById('c' + item.id_residente).classList.remove('red');
            document.getElementById('c' + item.id_residente).classList.remove('yellow');
            document.getElementById('c' + item.id_residente).classList.remove('gray');
        }
    }); console.log("---------------------------------------------------------------")
}

function rconDeudasA() {
    var mydata = data.urbanizaciones
    mydata.forEach(item => {
        if (item.estado === 'yellow') {
            document.getElementById('c' + item.id_residente).classList.add('yellow');
            console.log(item)
        }else{
            document.getElementById('c' + item.id_residente).classList.remove('verde');
            document.getElementById('c' + item.id_residente).classList.remove('gray');
        }
    });console.log("---------------------------------------------------------------")
}

function rconDeudas() {
    var mydata = data.urbanizaciones
    mydata.forEach(item => {
        if (item.estado === 'red') {
            document.getElementById('c' + item.id_residente).classList.add('red');
            console.log(item)
        }else{
            document.getElementById('c' + item.id_residente).classList.remove('verde');
            document.getElementById('c' + item.id_residente).classList.remove('gray');
        }
    });console.log("---------------------------------------------------------------")
}

function rsinPropiedad() {
    var mydata = data.urbanizaciones
    mydata.forEach(item => {
        if (item.estado === 'gray') {
            document.getElementById('c' + item.id_residente).classList.add('gray');
            console.log(item)
        }else{
            document.getElementById('c' + item.id_residente).classList.remove('verde');
            document.getElementById('c' + item.id_residente).classList.remove('red');
            document.getElementById('c' + item.id_residente).classList.remove('yellow');
         
        }
    });console.log("---------------------------------------------------------------")
}

function Casas() {
    window.open('Perfiles.html');
}

function Ocultar() {
    var mydata = data.urbanizaciones
    mydata.forEach(item => {
            document.getElementById('c' + item.id_residente).classList.remove('verde');
            document.getElementById('c' + item.id_residente).classList.remove('red');
            document.getElementById('c' + item.id_residente).classList.remove('yellow');
            document.getElementById('c' + item.id_residente).classList.remove('gray');
    });console.log("---------------------------------------------------------------")
}