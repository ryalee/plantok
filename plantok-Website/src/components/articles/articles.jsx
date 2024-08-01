import './articlesStyle.css';

import article1 from '../../assets/images/article1.jpg'
import article2 from '../../assets/images/article2.jpg'
import article3 from '../../assets/images/article3.jpg'


export default function Articles() {
  return (
    <div className='articles-container'>
      <h1>Latest Articles</h1>

      <div className="articles-grid">
        <article>
          <img src={article1}/>

          <div className="article-text">
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
            <a href="#">See More</a>
          </div>
        </article>

        <article>
          <img src={article2}/>

          <div className="article-text">
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
            <a href="#">See More</a>
          </div>
        </article>

        <article>
          <img src={article3}/>

          <div className="article-text">
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
            <a href="#">See More</a>
          </div>
        </article>
      </div>
    </div>
  );
}