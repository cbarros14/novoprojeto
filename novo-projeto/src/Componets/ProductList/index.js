import React, { useState } from "react";
import Product from "../Product";
import productMock from "../../mock/products";

const ProductList = () => {
  // variavel de estado para ativar a categoria selecionada
  const [categoriaTab, setCategoriaTab] = useState('Hamburguer');
  const [ products, setProducts ] = useState (productMock);

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
     {/* Menu de categoria */}
     <div className='flex items-center justify-center space-x-6'>
     <p className={categoriaTab === 'Hamburguer' ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab('Hamburguer')}>Hamburger</p>   
     <p className={categoriaTab === 'Brasileira' ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab('Brasileira')}>Brasileira</p>   
     <p className={categoriaTab === 'Japonesa' ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab('Japonesa')}>Japonesa</p>   

     </div>
     {/* Lista de produtos */}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
      {/*map para varrer os itens do arrauy de produtos  */}
      {products.map(product => (
        //key é o identificador. Product é uma prop para enviar o iten do array para o index de Product
         <Product key={product._id} product={product}/>
      ))}
       
     </div>
    </section>
  )
}

export default ProductList;