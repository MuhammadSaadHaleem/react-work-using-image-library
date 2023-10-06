import './App.css';

import Images from './components/Images';

function App() {


 const obj= {

    
    images:["https://media.istockphoto.com/id/546763388/photo/the-perfect-vantage-point.jpg?s=1024x1024&w=is&k=20&c=k7bKITp_kuLMAG9drtj8D8qPoVYG_Ui0ZZy5UAGYY2Q=","https://media.istockphoto.com/id/515518176/photo/photographer-takes-photos-with-camera-on-tripod-spring-in-mountains.jpg?s=612x612&w=0&k=20&c=26L1AUaN2JRQko2o-5Zt3hV-TdLjZPz4noWzI3Ik4R4=","https://media.istockphoto.com/id/546763388/photo/the-perfect-vantage-point.jpg?s=1024x1024&w=is&k=20&c=k7bKITp_kuLMAG9drtj8D8qPoVYG_Ui0ZZy5UAGYY2Q=","https://media.istockphoto.com/id/546763388/photo/the-perfect-vantage-point.jpg?s=1024x1024&w=is&k=20&c=k7bKITp_kuLMAG9drtj8D8qPoVYG_Ui0ZZy5UAGYY2Q=","https://media.istockphoto.com/id/515518176/photo/photographer-takes-photos-with-camera-on-tripod-spring-in-mountains.jpg?s=612x612&w=0&k=20&c=26L1AUaN2JRQko2o-5Zt3hV-TdLjZPz4noWzI3Ik4R4=","https://media.istockphoto.com/id/546763388/photo/the-perfect-vantage-point.jpg?s=1024x1024&w=is&k=20&c=k7bKITp_kuLMAG9drtj8D8qPoVYG_Ui0ZZy5UAGYY2Q="],
    }


  return (
    <div className="App">
      <header className="App-header">

        <Images  title="Saad" images={obj.images} />
       
      </header>
    </div>
  );
}

export default App;
