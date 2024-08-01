import './newsletterStyle.css'

export default function Newsletter() {
  return (
    <div className='newsletter-container'>
      <div className="newsletter-header">
        <h1>Subscribe</h1>
        <p>Sign up to our newsletter</p>
      </div>

      <div className="form">
        <input type="email" placeholder='Email'/>
        <input type="button" value="Submit"/>
      </div>
    </div>
 );
}