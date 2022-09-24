import logo from './logo.svg';
import './App.css';
import './components/Image'
import './components/Prediction'
import UploadAndDisplayImage from './components/Image';
import { useState } from 'react';
import ImagePrediction from './components/Prediction';


function App () {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const read = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', (reader) => {
      fetch("https://hf.space/embed/msc/artrash/+/api/predict", {
        method: "POST",
        body: JSON.stringify({data: [reader.target.result]}),
        headers: { "Content-Type": "application/json" }
      })
      .then((res) => res.json())
      .then( data => {
        setPrediction(data.data[0]);
      });
    })
    reader.readAsDataURL(file);
  }

  const handleUpload = (event) => {
    setPrediction(null);
    const image = event.target.files[0];
    console.log(`Uploading new photo to predictor: ${image}`);
    setSelectedImage(image);
    read(image);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <UploadAndDisplayImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleUpload={handleUpload}
          setPrediction={setPrediction}
        />
        {prediction && <ImagePrediction
          result={prediction}
        />}
      </header>
    </div>
  );
}

export default App;
