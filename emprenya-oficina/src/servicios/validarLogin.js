import axios from 'axios';
import Swal from 'sweetalert2'

function validarLogin(data) {
    var email = document.getElementById("exampleEmail");
    var clave = document.getElementById("examplePassword");
    const todosUsarios = async () => {

        try {
            const peticion = await axios.post('http://localhost/api/users/')
            const resultado = peticion.data.find(element => element.email === email.value && element.clave === clave.value);
            if (!resultado) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                })

                setTimeout(Swal.close, 2000);


            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Acceso Concedido',
                })


                setTimeout(() => {
                    window.location.href = '/dashboard/estadisticas';
                }, 2000);

            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
            })

            setTimeout(Swal.close, 2000);

        }

    }
    todosUsarios();

}


export {
    validarLogin
}
