const api = async () => {
  const datos = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  const json1 = datos
    .json()

    .then((expera) =>
      expera.forEach((element) => {
        cuardando(element);
      })
    );
};

import { crea } from "./dom.js";

const cuardando = (x) => {
  const objecto = {
    persona: x.id,
    comentrio: x.body,
    alias: x.name,
    correo: x.email,
  };

  crea(objecto.comentrio, objecto.persona);
};

api();

/*
condiciones de programa
1)forma de programas arreglo de objecto
2)api jsonPlace
3)usando fomato json
4)usar solo dos modulos uno para la logica y otro para enventos de boton
5)usar dom 
para empujar git push -u origin main
*/
