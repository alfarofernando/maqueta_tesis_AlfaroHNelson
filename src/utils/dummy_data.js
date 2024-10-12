// dummy_data.js
export const usuarios = [
  { legajo: "2222", password: "2222", nombre: "Leandro Alfaro" },
  { legajo: "3333", password: "3333", nombre: "Juan Pérez" },
  { legajo: "1111", password: "1111", nombre: "Alfaro Fernando" },
  // Agrega más usuarios si es necesario
];

export const verificarUsuario = (legajo, password) => {
  const usuario = usuarios.find(
    (user) => user.legajo === legajo && user.password === password
  );
  return usuario ? usuario.nombre : null;
};
