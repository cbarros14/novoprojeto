import React, { useContext, useState } from 'react'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {

  const [ inputValues, setInputValues ] = useState ({
    email:'',
    senha:''
  })

  const { loginUser } = useContext(AuthContext);
  

  const navigate = useNavigate(); 


  const handleChangeValues = (evento) => {
       setInputValues({
      
      ...inputValues,
      [evento.target.name]: evento.target.value
      
  })
  console.log(inputValues);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert('usuario S{inputValues.email} logado com sucesso.');
    navigate ('/')
    
    loginUser(inputValues);
    
  }

  return (
   <main className='h-screen w-full banner'>
    <div className='flex flex-col items-center pt-20 h-screen'>
        <img className='w-52' src={logo} alt='logotipo food app'/>
        <form onSubmit={handleSubmit} className='b-white w-96 mt-6 p-4 rounded-lg shadow-lg'>
           <div className='flex flex-col space-y-6'>
            <input 
            type="mail" placeholder="Digite seu email" name="email" className="w-full px-4 py3 rounded-lg ring-red-200 border border-gray-300 focus:outline-none transition duration-300"
            onChange={handleChangeValues}/>
            <input 
            type="password" placeholder="Digite sua senha" name="senha" className="w-full px-4 py3 rounded-lg ring-red-200 border border-gray-300 focus:outline-none transition duration-300"
            onChange={handleChangeValues}/>
            </div> 
            <button type="submit" className="w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300">Entrar</button>
            <p className="text-base text-primary text-center my-6 hover:underline cursor-pointer">Precisa de uma conta?</p>
        </form>
    </div>
   </main>
  )
}

export default Login