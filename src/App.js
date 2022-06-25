import React from "react";
import "./App.css";
import photo1 from "./Photo/8.jpg";
function App() {
  return (
    <>
      <div className="bgColor">
        <div className="container">
        <div className="container-1">
          <img src={photo1} alt="" />
          <h1>MUSOYEV OZODBEK</h1>
          <p className="myknowledge">
            <p>
              Front End Developer. React programmer. Student SamTUIT, graduate
              of PDP academy.
            </p>
            <p>
              Key skills: HTML5, CSS3,SASS, JavaScript, TypeScript, nodeJs,
              React, Git, REST API, AJAX
            </p>
          </p>
          <p className="bio">
            My name is Ozodbek, my surname is Musoev. I was born on February 25,
            2003 in Shafirkan district of Bukhara region. I live in the house
            69, Tezguzar rural citizens' counsel, Shafirkan district, Bukhara
            region. I studied at the 6th school in 2009-2020. SamTUIT student
            and graduate of PDP academy.
          </p>
        </div>
        <div className="links">
          <a href="tel:+998994528673"><i className='bx bx-phone'></i>Telephone</a>
          <a href="https://t.me/MusoeV_OzodbeK"><i className='bx bxl-telegram' ></i>Telegram</a>
          <a href="https://www.instagram.com/musoev_ozodbek/"><i className='bx bxl-instagram-alt' ></i>Instagram</a>
          <a href="https://www.facebook.com/Musoev.Ozodbek/"><i className='bx bxl-facebook-circle' ></i>Facebook</a>
          <a href="https://www.linkedin.com/in/ozodbek-musoev-832781221/">
          <i className='bx bxl-linkedin-square' ></i>
            Linkedin
          </a>
          <a href="mailto:musayev.2502@gmail.com"><i className='bx bxl-gmail' ></i>Gmail</a>
          <a href="https://github.com/MusoeVOzodbeK"><i className='bx bxl-github' ></i>Github</a>
          <a href="https://bitbucket.org/musoev_ozodbek/"><i className="fa-brands fa-bitbucket"></i>Bitbucket</a>
          <a href="https://twitter.com/musoev_ozodbek"><i className='bx bxl-twitter' ></i>Twitter</a>
          <a href="https://api.whatsapp.com/send/?phone=998994528673"><i className='bx bxl-whatsapp' ></i>
            WhatsApp
          </a>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
