// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';
import FoodBox from './FoodBox';

// Iteration 4
function AddFoodForm({ listOfFood, setListOfFood, showForm }) {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  function submitForm(e) {
    e.preventDefault();
    setListOfFood([...listOfFood, newFood]);
    setNewFood({
      name: '',
      image: '',
      calories: 0,
      servings: 0,
    });
  }

  return (
    <form
      onSubmit={(e) => submitForm(e)}
      style={{ display: showForm ? 'block' : 'none' }}
    >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={newFood.name}
        type="text"
        onChange={(e) => {
          setNewFood({ ...newFood, name: e.target.value });
        }}
      />

      <label>Image</label>
      <Input
        value={newFood.image}
        type="url"
        onChange={(e) => {
          setNewFood({ ...newFood, image: e.target.value });
        }}
      />

      <label>Calories</label>
      <Input
        value={newFood.calories}
        type="number"
        onChange={(e) => {
          setNewFood({ ...newFood, calories: e.target.value });
        }}
      />

      <label>Servings</label>
      <Input
        value={newFood.servings}
        type="number"
        onChange={(e) => {
          setNewFood({ ...newFood, servings: e.target.value });
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
