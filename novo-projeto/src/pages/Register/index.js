import React from "react";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {

const [ inputValues, setInputValues ] = useState ({
       nome: '',
       email:'',
       senha:'',
       imagem: ''
      })

      const navigate = useNavigate();

      const handleChangeValues = (evento) => {
          setInputValues({
           ...inputValues,
          [evento.target.name]: evento.target.value
          
      })
      console.log(inputValues);
      } 
      
      const handleSubmit = async (evento) => {
        evento.preventDefault();
        console.log(inputValues);
        const response = await registerUser(inputValues);

        if(response.data) {
            alert(`Usuario ${response.data.nome} cadastrado com sucesso!`)
            navigate('/login')
        }

      }

  return (
    <main className="h-screen w-full banner">
      <div className="flex pt-20 flex-col items-center h-screen">
        <img src={logo.png} alt="Logotipo do food app" className="w-52" />
        <h1 className="text-2xl text-gray-600 ">Cadastro de usuario</h1>
        <form onSubmit={handleSubmit} className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-6">
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome:"
              className="w-full px-4 py-3 rounded-lg focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus-shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="email"
              name="email"
              placeholder="Digite seu email:"
              className="w-full px-4 py-3 rounded-lg focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus-shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha:"
              className="w-full px-4 py-3 rounded-lg focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus-shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="text"
              name="imagem"
              placeholder="logo.png"
              className="w-full px-4 py-3 rounded-lg focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus-shadow-xl"
              onChange={handleChangeValues}
            />
            <button type="submit" className="w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300">Cadastrar</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;