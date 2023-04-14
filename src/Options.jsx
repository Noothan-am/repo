import React, { useState } from 'react'
import Button from './Components/Button';
import { buttons } from './data/buttons';
import { useGlobalContext } from './state/context';
function Options() {
     const [count, setCount] = useState(3);
     const { payload, setPayload } = useGlobalContext();
     function handleClick(id) {
          setCount(count => count + 1);
          let { name } = buttons.find((data) => { return data.id === id });
          setPayload([...payload, {
               key: count,
               details: {
                    id: id,
                    btn_name: name,
                    content: name,
               }
          }])
     }
     return (
          <div className='btn'>
               {buttons.map(button => {
                    return <Button key={button.id} {...button} handleClick={handleClick} />
               })}
          </div>
     )
}

export default Options

