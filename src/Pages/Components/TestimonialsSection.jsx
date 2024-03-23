import React from 'react'; 
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import ImageLazyLoading from './ImageLazyLoading';
import HomeBox from './HomeBox';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function TestimonialsSection() {
    const Data = [
        {
          title:"Oasis sands Resort Homestay", visitors:123, code:"8398393",location:"Launda, Angola,   Mutamba",
          src:"https://i.ebayimg.com/thumbs/images/g/kLgAAOSw2k5lMIch/s-l1200.jpg",
          user:{name:"Carlota pedro", country:"Angola", avatar:"https://cdn.standardmedia.co.ke/sdemedia/sdeimages/wednesday/vqxglytud1pip3r6010f6744ef8f.jpg"}
        },
        {
          title:"Yelow Blue room for Nasty ", visitors:123, code:"8398393",location:"Launda, Angola,   Mutamba",
          src:"https://assets-news.housing.com/news/wp-content/uploads/2018/01/30130410/Decor-trends-that-will-define-2018-FB-1200x700-compressed.jpg",
          user:{name:"Mateus Diogo", country:"USA", avatar:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"}
        },
        {
          title:"Relaxing room for mans", visitors:123, code:"8398393",location:"Launda, Angola,   Mutamba",
          src:"https://www.nobroker.in/blog/wp-content/uploads/2021/07/home-decor-trends.jpg",
          user:{name:"Sara olimpos", country:"Nigeria", avatar:"https://www.ohchr.org/sites/default/files/2023-03/20230307-Sara-Wahedi-hero.jpg"}
        }  ,
        {
            title:"Relaxing room for mans", visitors:123, code:"8398393",location:"Launda, Angola,   Mutamba",
            src:"https://hips.hearstapps.com/hmg-prod/images/harder-jett-008-1643379018.jpg?crop=1xw:1xh;center,top&resize=980:*",
            user:{name:"Marlene Olindia", country:"India", avatar:"https://c.ndtvimg.com/2021-07/cke2iks_sara-ali-khan_650x400_26_July_21.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384"}
        }  
      ];

  return ( 
    <section className="fd-testimonials">
    <img className="brush-top" src="https://res.cloudinary.com/dpmroh94y/image/upload/v1653393126/brush-border-top-white_ntsfmr.png" alt=""/>
      <div className="container h-100">
        <div className="row h-100">
          <div className="center text-center">
          <div className="wrapper">
         <div className="text-block-area center">
             <div> <h2>Vamos ouvir suas experiências<br /> Usando nossa plataforma  </h2></div> 
            </div>
            <br />
            <section className="testimonials-carousel">
             <Swiper 
              modules={[Navigation, Pagination, Scrollbar, A11y]} 
               spaceBetween={30}  
               slidesPerView={window.innerWidth <= 900 ? 1 : 3.2}>
                 {Data.map((item, index)=>(
                     <SwiperSlide>
                     <div className="card-test">
                      <div className="dets">
                     <div className="desc"> 
                       <p><small>"</small>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Hic distinctio repellendus  saepe ipsa aspernatur cumque quasi suscipit modi
                         officia aliquam.  
                      <small>"</small></p>
                    
                     </div>
                        <div className="d-flex user-data">
                          <div className="img">
                          <ImageLazyLoading source={item.user.avatar}  height={50} />
                          </div>
                           <div className="block">
                               <h4>{item.user.name}</h4>
                               <span>{item.user.country}</span>
                           </div>
                        </div>
                      </div>
                        <HomeBox type="cm" data={item} />
                     </div>
                  </SwiperSlide> 
                 ))}
              </Swiper>
            </section>
          </div>
          </div>
        </div> 
      </div> 
    <img className="brush-bottom" src="https://res.cloudinary.com/dpmroh94y/image/upload/v1653393126/brush-border-bottom-white_mzzdu0.png" alt=""/>
    </section> 

  )
}

export default TestimonialsSection