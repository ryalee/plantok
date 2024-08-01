import About from '../about/about';
import Articles from '../articles/articles';
import Header from '../header/header';
import '../hero/heroStyle.css'
import Background from './../background/background';
import Newsletter from './../newsletter/newsletter';
import Footer from './../footer/footer';

export default function Hero() {
  return (
    <div className='container'>
      <Header/>
      <Background/>
      <About/>
      <Articles/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}