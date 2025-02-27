import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function FacultyCard({img,text1,text2}){
    return(
      
      <div className='my-3 faculty mx-auto'  >
      <Card.Img  src={img} className='mb-2' />
      <Card.Body className='text-center'>
       
        <Card.Text>
          <h4>{text1}</h4>
          <p>{text2}</p>
        </Card.Text>
      </Card.Body>
    </div>
    );
}