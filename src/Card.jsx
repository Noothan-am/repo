import React, { useState } from 'react'
import { useGlobalContext } from './state/context';
function Card() {
     const [value, setValue] = useState('');
     const { setShow, isShow, payload, setPayload, key } = useGlobalContext();
     function handleclick() {
          setShow(false);
     }

     function handleUpdate() {
          setPayload(
               payload.map((data) => {
                    if (data.key === key) {
                         return { ...data, details: { ...data.details, content: `${value}` } };
                    }
                    return data;
               })
          );
          setValue('');
          // setShow(false);
     }

     return (
          <div className='card' style={{ display: isShow ? 'block' : 'none' }}>
               <div className="title">
                    {key}
                    <button onClick={handleclick}>X</button>
               </div>
               <div className="options">
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button onClick={handleUpdate}>Update</button>
               </div>
          </div>
     )
}

export default Card