import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SingleCard({ img, text }) {
  return (

    <Card className='my-3 single_card' >
      <Card.Img src={img} />
      <Card.Body className='text-center'>

        <Card.Text>
          {text}
        </Card.Text>
        <Button className='course-btn' style={{backgroundColor:'#ff4c60',borderColor:'#ff4c60'}}> <span>View More</span> </Button>
      </Card.Body>
    </Card>
  );
}