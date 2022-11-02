import axios from 'axios';


function validarLogin(data) {
    var email = document.getElementById("exampleEmail");
    var clave = document.getElementById("examplePassword");
    const todosUsarios = async () => {
        const peticion = await axios.post('http://localhost/api/users/');
        const resultado = peticion.data.find(element => element.email === email.value && element.clave === clave.value);
        if (!resultado) {
        } else {
            alert("Acceso Concedido");
            window.location.href = '/iframelanyaya';
        }

    }
    todosUsarios();

}


export {
    validarLogin
}
