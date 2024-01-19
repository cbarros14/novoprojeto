import React, { useContext } from 'react'
import ProductList from '../../components/ProductList';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {

  const userLogged = useContext(AuthContext);
  // console.log(`valor do contexto na home`, userLogged);
  
  return (
   <>
   <section className='home-banner w-full'>
    <div className='flex flex-col items-center justify-center h-full'>
    <h1 className='text-center text-3xl med:text-4xl lg:text-5xl font-semibold text-gray-700'>Os melhores alimentos você encontra aqui</h1>
    </div>
   </section>
   <ProductList/>
   </>
  )
}

export default Home;
