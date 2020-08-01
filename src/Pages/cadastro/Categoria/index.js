/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';


function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([...categories, values]);
    setValues(initialValues);
  }

  function handleChange(eventInfo) {
    setValue(eventInfo.target.getAttribute('name'), eventInfo.target.value);
  }

  const url = 'http://localhost:8080/categorias'

  useEffect(()=> {
    fetch(url)
    .then(async(res) => {
      const response = await res.json();
      setCategories([
        ...response,
      ])
    })
  },[]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Cadastrar Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <div />
        <div>
          <FormField
            label="Descrição: "
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
        </div>
        <div>
          <FormField
            label="Cor: "
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
        </div>

        <Button>Cadastrar</Button>
      </form>
      <ul>
        {categories.map((category) => (
          <li key={category.nome}>
            {category.nome}
            {category.descricao}
            {category.cor}
          </li>
        ))}
      </ul>
      <Link to="/cadastro/video">Cadastrar Video</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
