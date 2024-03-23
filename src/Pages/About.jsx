import React from 'react'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ContactHeader from './Components/ContactHeader';
import ContactText from './Components/ContactText';
import ContactForm from './Components/ContactForm';
import ContactMap from './Components/ContactMap';
import AboutHeader from './AboutHeader';
import AboutText from './AboutText';


function About() {
    document.title = "Sobre nós";
    return (
      <div>
          <Navbar  active={2} />  
             <div className="fd-about-page">
                <AboutHeader />
                <AboutText    
                   bg="silver" 
                   text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus explicabo, atque totam ducimus suscipit nemo velit ipsam aut sed. Quos, quibusdam officia nihil assumenda vel excepturi ipsum quam officiis iste odio libero dolorum repellendus, nemo similique saepe fugit  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus explicabo, atque totam ducimus suscipit nemo velit ipsam aut sed." 
                   title="A Missão e o impacto que trazemos" 
                   image="https://www.decorilla.com/online-decorating/wp-content/uploads/2023/02/Interior-design-trends-2023-imagined-by-Decorilla.jpg" 
                   pos="right"
                 />
                  <AboutText    
                   bg="main" 
                   text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus explicabo, atque totam ducimus suscipit nemo velit ipsam aut sed. Quos, quibusdam officia nihil assumenda vel excepturi ipsum quam officiis iste odio libero dolorum repellendus, nemo similique saepe fugit  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus explicabo, atque totam ducimus suscipit nemo velit ipsam aut sed." 
                   title="Mudando o setor imobiliário" 
                   image="https://stories.site/woodenstreetfurniture/interior-design-ideas-of-2022/assets/1.jpeg" 
                   pos="left"
                 />
                  <AboutText    
                   bg="silver" 
                   text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus explicabo, atque totam ducimus suscipit nemo velit ipsam aut sed. Quos, quibusdam officia nihil assumenda vel excepturi ipsum quam officiis iste odio libero dolorum repellendus, nemo similique saepe fugit  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus explicabo, atque totam ducimus suscipit nemo velit ipsam aut sed." 
                   title="Trazendo mais dinheiro para nossos clientes" 
                   image="https://www.artshub.com.au/wp-content/uploads/sites/2/2021/11/2023-image-for-article.jpg?w=1000" 
                   pos="right"
                 />
             </div>
          <Footer />
      </div>
    )
}

export default About