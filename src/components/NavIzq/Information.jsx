import React, {useState} from 'react'

function Information({ title, elements }) {

  const [showInformation, setShowInformation] = useState(true);

  const toggleInformation = () => {
    setShowInformation(!showInformation);
  }

  return (
    <div className='section2'>
      <h4>{title}</h4>
      <div className='line'></div>
      <button className='show' onClick={toggleInformation}> {showInformation ? 'mostrar menos' : 'mostrar más'} </button>
      {showInformation && (
        <ul>
          {elements.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      )}

    </div>
  
  )
}

export default Information