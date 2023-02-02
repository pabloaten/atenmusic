import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert';




const Convertidor = () => {
  const [data, setData] = useState("");
  const [tittle, setTittle] = useState("");
  const [enlace, setEnlace] = useState("");

  const descargar = () => {
    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",

      headers: {
        "X-RapidAPI-Key": "fdee3fb535msh742f67c639ec022p117fcfjsn2f681d736786",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
    };
    data.length > 6 ? (

      fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${data}`, options)
        .then((response) => response.json())
        .then((response) => (setEnlace(response.link), axios
        .post("https://boilerplate-project-headerparser.pablojurado2.repl.co/api/hello?titulo="+response.title)
        .then(function (response) {
          console.log(response);
        }),setTittle(response.title, console.log(response)))
        )
        .catch((err) => console.error(err))) : (swal({
          title: "Error",
          text: "Introduce un id válido",
          icon: "error",
          button: "ok",
        }))
        
      }
  return (
    <div id="animacion" className="flex flex-col font-mono text-lg text-gray-800 text-center bg-white p-4 rounded-md">
      Convertidor de yt a mp3
      <input
        className="m-10"
        placeholder="id del video de yt"
        type="text"
        onChange={(e) => setData(e.target.value)}
        value={data}
      />
      <button onClick={descargar} class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
        Buscar
      </button>
      {tittle.length != 0 ? (<div className="p-5"><h1>{tittle}</h1>
        <a className="p-5" href={enlace}><button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          <span>Descargar</span>
        </button></a></div>) : ''}

    </div>
  );
};

export default Convertidor;
