import React, {useState} from 'react';

function Historical(props) {

  const [showHistorical, setShowHistorical] = useState(true);

  const toggleHistorical = () => {
    setShowHistorical (!showHistorical);
  }

  return (
    <div>
      <div className='title'>
        <h3>{props.title}</h3>
        <div className='line'></div>
        <button onClick={toggleHistorical}> {showHistorical ? 'mostrar menos' : 'mostrar más'}</button>
      </div>
      {showHistorical && (
        <div>
          <div className='subtitle'>
        <h3 className='initialDate'>{props.initialDate}</h3>
        <h4 className='profX'>{props.profX}</h4>
      </div>
      <div className='content'>
        <h3 className='endDate'>{props.endDate}</h3>
        <div className='subContent'>
          <h3 className='school'>{props.school}</h3>
          <p className='experience'>{props.experience}</p>
        </div>
      </div>
        </div>
      )}

    </div>
  )
}

export default Historical
