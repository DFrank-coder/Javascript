// Cargar los empleados desde localStorage.
function cargarEmpleados() {
    const empleadosGuardados = localStorage.getItem('empleados');
    return empleadosGuardados ? JSON.parse(empleadosGuardados): [];
}

// Guardar en localStorage.
function guardarEmpleados(empleados) {
    localStorage.setItem('empleados', JSON.stringify(empleados));
}

// Función para agregar un empleado.
function agregarEmpleado(nombre, cargo, edad) {
    let empleados = cargarEmpleados();

    // Crear un nuevo objeto de empleado.
    let empleado = {
        nombre: nombre,
        cargo: cargo,
        edad: edad,
    };

    // Agregar el empleado al Array.
    empleados.push(empleado);

    // Guardar nuevamente los empleados en localStorage.
    guardarEmpleados(empleados);

    // Actualizar la lista en la interfaz.
    mostrarEmpleados();
}

// Función para mostrar los empleados en la lista.
function mostrarEmpleados() {
    let empleados = cargarEmpleados();
    const listaEmpleados = document.getElementById('listaEmpleados');
    listaEmpleados.innerHTML = ''; // Limpiar la lista actual

    empleados.forEach((empleado, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${empleado.nombre}</span> - ${empleado.cargo} - ${empleado.edad} años`;
        listaEmpleados.appendChild(li);
    });
}

// Función que maneja el agregar un empleado.
function manejarAgregarEmpleado() {
    const nombre = document.getElementById('nombre').value;
    const cargo = document.getElementById('cargo').value;
    const edad = document.getElementById('edad').value;

    // Validación para asegurar que todos los campos estén llenos.
    if (!nombre || !cargo || !edad) {
        alert("Por favor, complete todos los campos requeridos.");
        return;
    }

    // Agregarnuevo empleado.
    agregarEmpleado(nombre, cargo, edad);

    // Limpiar formulario.
    document.getElementById('nombre').value = '';
    document.getElementById('cargo').value = '';
    document.getElementById('edad').value = '';
}

// Asignar el evento al botón.
document.getElementById('btnAgregar').addEventListener('click', manejarAgregarEmpleado);

// Mostrar los empleados cuando se carga la pagina.
mostrarEmpleados();
