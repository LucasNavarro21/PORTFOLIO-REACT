import React from 'react'
import imgJS from "../img/js.jpg";
import imgPHP from "../img/php.png";
import imgExcel from "../img/excel.webp";

const Portfolio = () => {
  return (
    <div className='container-padre-portfolio'>

      <div className="container-portfolio">
        <div className="title-portfolio">My works</div>
        <div className="container-proyectos">
          <div className="container-proyectos-fila-1">

            <div className="container-proyecto">
              <img src={imgJS} alt="" className="image-proyecto" />
              <a href="https://lucasnavarro21.github.io/encriptador/" className='title-proyecto'>Encryptor</a>
            </div>
        
        
            <div className="container-proyecto">
              <img src={imgPHP} alt="" className="image-proyecto" />
              <a href="https://github.com/LucasNavarro21/asistencia" className='title-proyecto'>Crud PHP</a>
            </div>
          </div>

          <div className="container-proyectos-fila-1">
            <div className="container-proyecto">
              <img src={imgExcel} alt="" className="image-proyecto" />
              <a href="http://enterprisedata.22web.org/index.php?i=2" className='title-proyecto'>Data Filter</a>
            </div>

            <div className="container-proyecto">
              <img src={imgPHP} alt="" className="image-proyecto" />
              <a href="https://github.com/LucasNavarro21/todoapp" className='title-proyecto'>Task list</a>
            </div>
          </div>

      </div>
      </div>
    </div>
  )
}

export default Portfolio