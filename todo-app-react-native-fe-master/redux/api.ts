import axios from "axios";

const API_URL = "https://todo-django-be.onrender.com/todos";

export interface ITodo {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
}

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (todo: ITodo) => {
  const response = await axios.post(API_URL + "/", todo);
  return response.data;
};

export const updateTodo = async (todoId: string, updatedTodo: ITodo) => {
  console.log("todoId", todoId, "updatedTodo", updatedTodo);
  const response = await axios.put(`${API_URL}/${todoId}`, updatedTodo);
  return response.data;
};

export const deleteTodo = async (todoId: string) => {
  const response = await axios.delete(`${API_URL}/${todoId}`);
  return response.data;
};
