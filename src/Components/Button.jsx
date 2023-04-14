import React from 'react'

function Button({ id, name, handleClick }) {
     return (
          <>
               <button onClick={() => handleClick(id)}>{name}</button>
          </>
     )
}

export default Button