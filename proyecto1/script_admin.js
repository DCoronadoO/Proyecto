var pagos = [
    {
        "num_tramite": 1,
        "ano": 2022,
        "mes": 7,
        "fecha_pago": "29/5/2022",
        "valor": 90,
        "estado": "PENDIENTE",
        "evidencia": ""
    },
    {
        "num_tramite": 2,
        "ano": 2022,
        "mes": 2,
        "fecha_pago": "28/4/2022",
        "valor": 110,
        "estado": "PAGADA",
        "evidencia": ""
    },
    {
        "num_tramite": 3,
        "ano": 2022,
        "mes": 3,
        "fecha_pago": "15/4/2022",
        "valor": 100,
        "estado": "EN MORA",
        "evidencia": ""
    },
    {
        "num_tramite": 4,
        "ano": 2022,
        "mes": 4,
        "fecha_pago": "10/3/2022",
        "valor": 90,
        "estado": "EN MORA",
        "evidencia": ""
    }
]
var cuenta = [
    {
        "contrasenia": "admin",
        "correo_electronico": "admin"
    }
]

function login() {
    //Obtenemos las variables mediante el ById
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    //
    console.log('Correo', email)
    console.log('Contraseña', password)
    //Filtramos el usuario mediante el correo que ingresamo con nuestro
    //JSON de usuarios existentes.
    cuenta.forEach(item => {
        if (item.correo_electronico == email) {
            document.getElementById("message").textContent = '';
            document.getElementById("message").classList.remove('alert');
            //Luego de hacer el match, comparamos el numero de contraseña
            //con la contraseña
            if (item.contrasenia == password) {
                console.log('Has iniciado sesion')
                //Guardamos la sesion del usuario
                localStorage.setItem('cuenta', JSON.stringify(item));
                console.log('Usuario:', item)
                window.location = 'index.html'
            } else {
                //Buscamos el id message y lo cambiamos por nuestro mensaje 
                document.getElementById("message").textContent = 'Contraseña incorrecta';
                document.getElementById("message").classList.add('alert');
                console.log('Contraseña incorrecta')
            }
        } else {
            document.getElementById("message").textContent = 'Usuario no encontrado';
            document.getElementById("message").classList.add('alert');
        }
    });
}
function home() {
    var baseUrl = (window.location).href; // You can also use document.URL
    var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    console.log(koopId)

    var localStor = localStorage.getItem("users")
    var user = JSON.parse(localStor)
    document.getElementById("name").textContent = user.nombreyapellido;
    document.getElementById("startDate").textContent = user.fechainicio;
    console.log(user, 'usuario')
    //Creamos nuestra tabla
    var div = document.getElementById('dataTable');
    for (var i = 0; i < pagos.length; i++) {
        var color 
        if(pagos[i].estado === 'PAGADA'){
            color = 'success'
        }
        if(pagos[i].estado === 'PENDIENTE'){
            color = 'warning'
        }
        if(pagos[i].estado === 'EN MORA'){
            color = 'error'
        }

        var row = `<tr>
            <td>${pagos[i].ano}</td>
            <td>${pagos[i].mes}</td>
            <td>${pagos[i].fecha_pago}</td>
            <td>${pagos[i].valor}</td>
            <td><div class=${color}>${pagos[i].estado}</div></td>
            <td><a href='verificar.html?id=${pagos[i].evidencia}'><img width='75' src='./assets/img/verificar.png' /></a></td>
            <td><a href='evidencia.html?id=${pagos[i].num_tramite}'><img width='75' src='./assets/img/bajar.jpg' /></a></td>
        </tr>`
        div.innerHTML += row
        //
    }
}

function evidencia() {
    var baseUrl = (window.location).href; // You can also use document.URL
    var id = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    //
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    document.getElementById("fecha_pago").value = date;
    //
    pagos.forEach(item => {
        if (item.num_tramite == id) {
            document.getElementById("num_tramite").value = item.num_tramite;
            let newDate = new Date(`${item.ano}-${item.mes}-01"`)
            if(date > newDate){
                //console.log('')
            }
            //console.log(date, '--', newDate)
        }
    });
   
}
function fecha_pago() {
    var baseUrl = (window.location).href; // You can also use document.URL
    var id = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    //
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    document.getElementById("fecha_pago").value = date;
    //
    pagos.forEach(item => {
        if (item.num_tramite == id) {
            document.getElementById("num_tramite").value = item.num_tramite;
            let newDate = new Date(`${item.ano}-${item.mes}-01"`)
           
            if(date > newDate){
                console.log('')
            }
            
            console.log(date, '--', newDate)
           
        }
    });
   
}