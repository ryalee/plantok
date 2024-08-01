import '../header/headerStyle.css';

export default function Header() {
  return (
    <div className='header-container'>
      <div className="logo">PNK.</div>

      <div className="nav-menu">
        <ul>
          <li>about</li>
          <li>gallery</li>
          <li className="contact">contact</li>
        </ul>
      </div>
    </div>
  )
}