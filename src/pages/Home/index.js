import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';
import '../../components/Menu';
import Menu from '../../components/Menu';
function Home(){
    return(
        <div style={{ background: "#141414" }}>

        <Menu/>

        <BannerMain
    videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
    url={dadosIniciais.categorias[0].videos[0].url}
    videoDescription={"Nada definido até o momento"}
  />

  <Carousel
    ignoreFirstVideo
    category={dadosIniciais.categorias[0]}
  />

  <Carousel
    category={dadosIniciais.categorias[1]}
  />

  <Carousel
    category={dadosIniciais.categorias[2]}
  />

  <Carousel
    category={dadosIniciais.categorias[3]}
  />

  <Carousel
    category={dadosIniciais.categorias[4]}
  />

  <Carousel
    category={dadosIniciais.categorias[5]}
  />

  <Footer />
        </div>
    );
}

export default Home; 