import { ContentRow } from './styles/ContentRow';
import { Tile1 } from './styles/Tile1';
import { Artisanal } from './styles/Artisanal';
import FooterStyles from './styles/FooterStyles';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { ImageRow } from './styles/ImageRow';
import Link from 'next/link';

const HomePage = (props) => {
  return (
    <div className="home-container">
      <Tile1 className="column row-1">
        <div className="eatery">
          <h1>EATERY</h1>
          <p>
            We are uniquely driven by Chef - Farmer partnerships offering
            Breakfast, Midday and main seasonal meals lorem ipsum meals and
            breakfast lunch
          </p>
        </div>
        <button className="menu">
          <FontAwesomeIcon icon={faUtensils} /> <Link href='/menu'><p>Menu</p></Link>
        </button>
      </Tile1>
      <ContentRow className="column row-2">
        <div className="image one">
          <img src="/Images/gg-01.jpg" alt="food" />
        </div>
        <Artisanal className="content">
          <h1>ARTISANAL STORE</h1>
          <p>
            Find whole spice blends, sauces, and condiments, pickles, preserves
            and vinegars.<br></br>
            Rejuvenate your body with our signature kombuchas, specialty tea and
            coffee.
          </p>
          <span className="coming-soon">COMING SOON</span>
          <div className="email-input">
            <input type="text" placeholder="Your Email" />
            <button>Get Notified</button>
          </div>
        </Artisanal>
      </ContentRow>
      <ImageRow className="column row-3">
        <div className="item1 one">
          <img src="/Images/gg-06.jpg" alt="Squid in a jar" />
        </div>
        <div className="item2 two">
          <img src="/Images/gg-09.jpg" alt="Chicken" />
        </div>
      </ImageRow>
      <ContentRow className="column row-4">
        <div className="image one">
          <img src="/Images/bottom.jpeg" alt="" />
        </div>
        <Artisanal className="content">
          <h1>MEAL PROGRAM</h1>
          <p>
            Find whole spice blends, sauces, and condiments, pickles, preserves
            and vinegars.<br></br>
            Rejuvenate your body with our signature kombuchas, specialty tea and
            coffee.
          </p>
          <span className="coming-soon">COMING SOON</span>
          <div className="email-input">
            <input type="text" placeholder="Your Email" />
            <button>Get Notified</button>
          </div>
        </Artisanal>
      </ContentRow>
      <ImageRow className="column row-5">
        <div className="item2 one">
          <img src="/Images/gg-08.jpg" alt="" />
        </div>
        <div className="item1 two">
          <img src="/Images/bowl.jpeg" alt="" />
        </div>
      </ImageRow>
      <FooterStyles className="footer-container">
        <div className="border">
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
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">&copy; 2020 Ghost & Grits</div>
      </FooterStyles>
    </div>
  );
};

export default HomePage;
