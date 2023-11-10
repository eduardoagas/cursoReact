import React from 'react';
import Header from '../components/header';

const Home = () => {
    return(
       <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
        <div className='row w-100'>
            <div className='col-lg-6 d-flex justify-content-center'>
                <div style={{width: '70%'}}>
                    <div className='card h-100'>
                        <div className='card-body'>
                            Conteúdo Esquerdo
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
                <div style={{width: '70%'}}>
                    <div className='card h-100'>
                        <div className='card-body'>
                            Conteúdo Direito
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
         <Header />
       </div>
    )
}

export default Home;