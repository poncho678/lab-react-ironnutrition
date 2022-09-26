import './App.css';
import { useState } from 'react';
import foods from './foods.json';

import { Card, Row, Col, Divider, Input, Button } from 'antd';
import 'antd/dist/antd.min.css';
import logo from './logo.svg';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [listOfFood, setListOfFood] = useState(foods);
  const [userSearchInput, setUserSearchInput] = useState('');
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <AddFoodForm
        listOfFood={listOfFood}
        setListOfFood={setListOfFood}
        showForm={showForm}
      />

      <Button onClick={() => setShowForm(!showForm)}>
        {' '}
        {showForm ? 'Hide Form' : 'Add New Food'}{' '}
      </Button>

      <Search
        userSearchInput={userSearchInput}
        setUserSearchInput={setUserSearchInput}
      />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {listOfFood
          .filter((food) => {
            return food.name
              .toLowerCase()
              .includes(userSearchInput.toLowerCase());
          })
          .map((food) => {
            return (
              <FoodBox
                food={food}
                key={food.name}
                listOfFood={listOfFood}
                setListOfFood={setListOfFood}
              />
            );
          })}
      </Row>
    </div>
  );
}

export default App;
