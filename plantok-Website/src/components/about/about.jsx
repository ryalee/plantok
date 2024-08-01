import aboutImage from '../../assets/images/about-img.jpg'
import './aboutStyle.css';

export default function About() {
  return (
    <div className='about-container'>
      <img src={aboutImage}/>

      <div className='about-text'>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum enim, repellendus dicta a neque quo illo incidunt sapiente ullam voluptas nam obcaecati. Possimus illo dignissimos culpa quas neque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, numquam! Et fugit quaerat, voluptatum sed placeat, vitae tempore cupiditate non aspernatur cum quasi, iusto earum soluta rem amet natus dignissimos.</p>

        <button>See More</button>
      </div>
    </div>
  );
}