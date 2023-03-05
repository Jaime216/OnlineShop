import './App.css';
import Article from './components/article';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function App() {
    const [ arr , setarr ] = useState([ {
            name_product:"Pantalon"
        },{
            name_product:"Camiseta"
        },{
            name_product:"Blusa"
        },{
            name_product:"Gorra"
        },{
            name_product:"Bañador"
        },{
            name_product:"Pantalon"
        }])
    let counter = 0;

    function moveLeft () {
        let borrado = arr.shift();
        setarr([...arr,borrado])
    }

    function moveRight () {
        let borrado = arr.pop();
        setarr([borrado,...arr])
    }

  return (
      <div className="App">
        <header id="header">

              <img src={require("./Images/LogoFinal.png")} alt="Logo" id="logo" />

              <nav id="header-nav">

                  <div className="iconosSuperiores navegation">
                      <div className="icon" id="iconoHome">
                          <a href="/Home/homeHTML.html"><i className="fa-solid fa-house"></i>
                              <p className="texto" id="textoHome">
                              <span className="letra1 letra">H</span>
                              <span className="letra2 letra">o</span>
                              <span className="letra3 letra">m</span>
                              <span className="letra4 letra">e</span></p>
                          </a>
                      </div>
                      <div className="icon" id="iconoAbout">
                          <a href="/About us/aboutUsHTML.html"><i className="fa-solid fa-users"></i>
                                  <p className="texto" id="textoAbout">
                                      <span className="letra1 letra">A</span>
                                      <span className="letra2 letra">b</span>
                                      <span className="letra3 letra">o</span>
                                      <span className="letra4 letra">u</span>
                                      <span className="letra5 letra">t</span>
                                      <span className="letra6 letra">&nbsp;</span>   
                                      <span className="letra7 letra">u</span>
                                      <span className="letra8 letra">s</span>
                                  </p>
                          </a>
                      </div>
                      <div className="icon" id="iconoContact">
                          <a href="/Contact us/contactUsHTML.html"><i className="fa-solid fa-phone"></i>
                                  <p className="texto" id="textoContact">
                                      <span className="letra1 letra">C</span>
                                      <span className="letra2 letra">o</span>
                                      <span className="letra3 letra">n</span>
                                      <span className="letra4 letra">t</span>
                                      <span className="letra5 letra">a</span>
                                      <span className="letra6 letra">c</span>
                                      <span className="letra7 letra">t</span>
                                      <span className="letra8 letra">&nbsp;</span>
                                      <span className="letra9 letra">u</span>
                                      <span className="letra10 letra">s</span>
                                  </p>
                          </a>
                      </div>
                  </div>

                  <div className="iconosInferiores navegation">
                      <div className="icon" id="iconoLog">
                          <a href="/Log In/logInHTML.html"><i className="fa-solid fa-right-to-bracket"></i>
                                  <p className="texto" id="textoLog">
                                      <span className="letra1 letra">L</span>
                                      <span className="letra2 letra">o</span>
                                      <span className="letra3 letra">g</span>
                                      <span className="letra4 letra">&nbsp;</span>
                                      <span className="letra5 letra">I</span>
                                      <span className="letra6 letra">n</span>
                                  </p>
                          </a>
                      </div>
                      <div className="icon" id="iconoRegister">
                          <a href="/Register/registerHTML.html"><i className="fa-regular fa-registered"></i>
                                  <p className="texto" id="textoRegister">
                                      <span className="letra1 letra">S</span>
                                      <span className="letra2 letra">i</span>
                                      <span className="letra3 letra">g</span>
                                      <span className="letra4 letra">n</span>
                                      <span className="letra5 letra">&nbsp;</span>
                                      <span className="letra6 letra">U</span>
                                      <span className="letra7 letra">p</span>
                                  </p>
                          </a>
                      </div>
                  </div>
          </nav>
          <div id="headerHover"></div>

              <div id="burger">
                  <div id="burger-line1"></div>
                  <div id="burger-line2"></div>
                  <div id="burger-line3"></div>
              </div>
              
      </header>
      <main>
        <h1 className='main-title'>Primer lanzamiento</h1>
        <p>Esta es la primera colección de una marca practicamente nueva, los pedidos se realizan a demanda, sin costes adicionales de envio. Aprovecha ahora que aun no somos muy conocidos para comprar y en el futuro poder decir que eras nuestro cliente cuando aun nadie nos conocía.</p>
        
        <div className='pants'>
            <input type='button' onClick={moveRight} className='right' value='right' />
            <input type='button' onClick={moveLeft} className='left' value='left' />
            {arr.map(obj=>{
                if(counter < 3){
                    counter++;
                    return <Article 
                            key={uuidv4()}
                            name_product={obj.name_product}/>
                }else return console.log("Ya")
            })}
        </div>

      </main>
    </div>
  );
}

export default App;
