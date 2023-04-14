import React from 'react'
import Main from './Main';
import Options from './Options';
import Edit from './Edit';
function Home() {
     return (
          <div className='home'>
               <Options />
               <Main />
               <Edit />
          </div>
     )
}

export default Home