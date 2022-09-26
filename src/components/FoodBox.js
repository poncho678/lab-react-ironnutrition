import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox({ food, listOfFood, setListOfFood }) {
  const { name, image, calories, servings } = food;

  function deleteItem() {
    setListOfFood(
      listOfFood.filter((item) => {
        return item.name !== name && item.image !== image;
      })
    );
  }

  return (
    <Col>
      <Card title={name} style={{ width: 230, margin: 10 }}>
        <img src={image} height={50} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} kcal</b>
        </p>
        <Button type="primary" onClick={deleteItem}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
