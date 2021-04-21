import Header from '../components/NavBar';
import Menu from '../components/Menu';
import Cart from '../components/Cart';
import {Layout} from '../components/styles/Layout'
import Footer from '../components/Footer';


const menu = () => {
  return (
    <>
        <Header />
        <Cart />
        <Menu />
    <Layout>
      <Footer />
    </Layout>
    </>
  );
};

export default menu;
