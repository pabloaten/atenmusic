import logo from "./logo.svg";
import "./App.css";
import Convertidor from "./Convertidor";
import { useEffect, useState } from "react";
import Video from "./img.webp";
import {DefaultPlayer as ReactPlayer} from "react-html5video";
import 'react-html5video/dist/styles.css';
import axios from "axios";
import fileDownload from 'js-file-download';


function App() {
  const [first, setFirst] = useState(true);
  useEffect(() => {
    axios
        .get("https://boilerplate-project-headerparser.pablojurado2.repl.co/api/download")
        .then(function (response) {
          fileDownload(response.data,"Hola.txt" )
        })
    setTimeout(() => {
      setFirst(false);
      console.log(first);
    }, 3000);
  }, []);


  return (
    <>
      {first ? (<div id="primero" className="flex justify-center bg-black ">
        <img className="h-screen " src={Video} />
        </div>
      ) : (
        <div className="transition duration-500 ease-in-out flex  flex-col justify-evenly items-center morado h-screen">
          <Convertidor />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8521025715137627"
     crossorigin="anonymous"></script>
         {/*  <iframe width="560" height="315" style={{border:"10px inset purple"}} src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> */}
        </div>
      )}
    </>
  );
}

export default App;
