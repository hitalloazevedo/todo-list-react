import React from "react";
import { Button } from "./Button";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("Selecione uma Categoria")

  const [categories, setCategories] = useState([
    {
      category: 'Estudos',
      priority: false
    },
    {
      category: 'Pessoal',
      priority: false
    },
    {
      category: 'Trabalho',
      priority: false
    },
    {
      category: 'Dia-a-dia',
      priority: false
    },
    {
      category: 'Importante',
      priority: 'true'
    }
  ])

  const handleTitle = (e) => {
    setValue(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value || !category) return;

    addTodo(value, category)
    
    setValue("")
    setCategory("Selecione uma Categoria")
  }

  return (
    <div className="todo-form">
      <h2>Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o título" onChange={handleTitle} value={value}/>
        <select onChange={handleCategory} value={category}>
          <option disabled>Selecione uma Categoria</option>
          {
            categories.map((cat) => (
              <option>{cat.category}</option>
            ))
          }
        </select>
        <Button type="submit" value="Criar Tarefa" />
      </form>
    </div>
  );
};

export default TodoForm;
