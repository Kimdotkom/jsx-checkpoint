
import './App.css';
import image from './image-in-src.jpg';
import './style.css';

function App() {
  return (
    <div className="App">

      <h1>JSX Project</h1>
      <hr></hr>

      <div className='fleex'>

      <div className='elem'>
      <h3>Image in Public</h3>
      <img src='./image-in-public.jpg' alt='image1' />
      </div>

      <hr></hr>

      <div className='elem'>
      <h3>Image in Scr</h3>
      <img src={image} alt='image2' />
      </div>

      </div>

<div style={{border:'solid 1px black', maxWidth:'100vw'}} >

 <h1 className='title red'>Kareem</h1>

 <br />

 <img src={image} alt='' />

 <br />

 <img src='./image-in-public.jpg' alt=''/>

</div>

<video width="320" height="240" controls>

 <source src='myVideo.mp4' type='video/mp4' />

</video>

    </div>
  );
}

export default App;
