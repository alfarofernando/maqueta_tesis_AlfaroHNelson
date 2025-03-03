// dummy_data.js
export const usuarios = [
  { legajo: "192581", password: "192581", nombre: "Nelson Alfaro" },
  // Agrega más usuarios si es necesario
];

export const verificarUsuario = (legajo, password) => {
  const usuario = usuarios.find(
    (user) => user.legajo === legajo && user.password === password
  );
  return usuario ? usuario.nombre : null;
};
