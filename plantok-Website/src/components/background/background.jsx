import heroImage from '../../assets/images/hero-img.jpg'
import '../background/backgroundStyle.css'

export default function Background() {
  return (
    <div className='background-container'>
      <img src={heroImage}/>

      <div className="text">
        <h1>PLANTOK</h1>
        <h4>Beauty and health</h4>
      </div>
    </div>
  );
}