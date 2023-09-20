import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import  Nav from './components/Nav';
const App = () => (
  <main className = "relative">
    <Nav />
    <section className = "xl:padding-l wide:padding-r padding:b">
      <Hero />
    </section>
    <section className = "padding mt-20">
      <PopularProducts />
    </section>
    <section className = "padding">
      <SuperQuality />
    </section>
    <section className = "padding-x py-10">
      <Services />
    </section>
   

  </main>
); 

export default App; 