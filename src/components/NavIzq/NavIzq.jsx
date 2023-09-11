import React from 'react'
import Profile from './Profile'
import Foto from './Foto'
import Information from './Information'
import "./NavIzq.css"


function NavIzq() {

  const habilidades = ["Html", "CSS", "Javascript"];
  const idiomas = ["Portugués", "Español"];
  const interesses = ["Full Stack Developer", "Front-End Developer"];

  return (
    <nav className='navIzq'>
      <Foto />    
      <Profile />
      <Information title="HABILIDADES" elements={habilidades}></Information>
      <Information title="IDIOMAS" elements={idiomas}></Information>
      <Information title="INTERESSES" elements={interesses}></Information>
    </nav>
  );
}

export default NavIzq
