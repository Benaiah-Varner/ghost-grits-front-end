import HomePage from '../components/HomePage';
import Header from '../components/NavBar';
import {Layout} from '../components/styles/Layout';
import Cart from '../components/Cart';

export default function Home() {
  return (
    <>
    <Layout>
      <Header />
      <HomePage />
    </Layout>
      <Cart />
    </>
  )
}
