import { Card } from 'react-bootstrap'
import './App.css'
import WeatherComponent from './WeaterComponent'


function App() {

  return (
    <>
      


      <div className="container py-5 h-100">

        <div className="row d-flex justify-content-center align-items-center h-100">

          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title className='text-warning ms-2 mb-3'><h1>Weather Forecast</h1></Card.Title>
              <Card.Text>
              <WeatherComponent />
              </Card.Text>
            </Card.Body>
          </Card>

        </div>

      </div>


    </>
  )
}

export default App
