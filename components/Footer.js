import FooterStyles from './styles/FooterStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <FooterStyles className="footer-container">
        <div className='border'>
          <h1></h1>
        </div>
        <div className="footer-content">
          <div className="hours-location list">
            <h4> HOURS & LOCATION</h4>
            <ul>
              <li>Mon-Sat: 10a to 8p</li>
              <li>100 Wilton Rd</li>
              <li>Wilton, CT</li>
              <li>203-333-9999</li>
            </ul>
          </div>
          <div className="follow-us list">
            <h4>FOLLOW US</h4>
            <ul>
              <li><FontAwesomeIcon icon={faTwitter} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faFacebook}/></li>
            </ul>
          </div>
        </div>
        <div className="copyright">&copy; 2020 Ghost & Grits</div>
      </FooterStyles>
    )
}

export default Footer
