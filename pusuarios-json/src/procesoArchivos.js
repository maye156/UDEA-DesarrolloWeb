const tabla = document.querySelector('#lista-usuarios tbody');


function mostrarUsuarios() {
    fetch('usuarios.json')
    .then(respuesta => respuesta.json()) 
    .then(usuarios => {
        usuarios.forEach(usuario => {
           const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.id}</td>
                    <td>${usuario.name}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.company.name}</td>
                    <td>${usuario.username}</td>
                    `;
                    
                    tabla.appendChild(row);

                              
      }
      
      );
    })
    .catch(error => console.log('Hubo un error : ' + error.message))
    
}

export default mostrarUsuarios;


