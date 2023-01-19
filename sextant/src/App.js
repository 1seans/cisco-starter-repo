import './Component/Banner/Banner';
import Banner from './Component/Banner/Banner';
import Card from './Component/Exhibit/Card/CardIndex';


  function App() {
    return (
          <div className="App">
            {/* --------------Banner--------------- */}
            <Banner
             title="Sextan MVP"
            />
           {/* --------------Cards--------------- */}
            <div className="card-container">
              <Card className="cardV1">
              </Card>
            </div>

          </div>
    );  
  };
  export default App;
