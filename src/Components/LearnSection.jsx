import React from 'react'
import styled from "styled-components";
import ImageLazyLoading from './ImageLazyLoading';
import { Link } from 'react-router-dom';

function LearnSection() {
  return (
    <Container>
        <div className="wrapper">
            <div className="wrap">
                <div className="image-area">
                    <ImageLazyLoading  source="https://thumbs.web.sapo.io/?W=2100&H=0&delay_optim=1&epic=Zjdlxn6pDL11fp8E9qE5EvOTAsbGRqe3UdhHYMtfCZA3iWfUkiNxDUSDBSLLlMGxJALuL+TYL/iC+x4nl1V7h0w8JUV9XUTq5eOrIdGFr5v3WCg=" /> 
                </div>      
                <div className="text">
                  <h1>Deseja publicar um imovel <span className="txt-primary">?</span></h1>
                  <p>Obcaecati minima fugit sint tempora, praesentium excepturi eveniet suscipit, non nam deleniti, voluptatum odio impedit facilis. Amet ratione saepe voluptatum eum dolor est molestias id tenetur ut, eaque labore, porro suscipit eius, ducimus voluptatibus modi consequuntur <br /><br /> quod impedit natus expedita magni quisquam sint ea laudantium. Veritatis praesentium nobis exercitationem, doloremque dicta, architecto eos rem, quaerat eligendi eveniet dolorem nostrum qui itaque nam. Unde eaque placeat, magnam earum quod aliquam asperiores, sapiente perspiciatis doloremque eligendi corporis.</p>
                  <Link to="/post_something"><button className="btn">Anunciar agora</button> </Link>
                </div>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div` 
     margin:40px 0px;
     min-height:400px;  
     position:relative; 
     
    .text{
        padding-left:30px;   
        display:block;
     }

     h1{
        font-size:45px;
        font-weight:700 !important;
        line-height:60px; 
        font-family: 'Open Sans', sans-serif !important;

         span{
            font-size:45px;
            color:#FF6D00;
            margin-left:10px;
         }
     }

      .wrap{
          display:flex;
          width:100%; 
          align-items:center;

          p{ 
            font-weight:400  !important;
            margin-top:10px;
          }
          
          button{
            background:transparent;
            padding:10px 15px; 
            border-radius:30px;
            margin-top:10px;
            transition:all 1s ease-in-out; 
            border:2px solid #000 !important; 
        }

        .image-area{
              max-width:600px;
              height:400px;

              img{
                  border-radius:10px;
                  height:400px;
              }
        }


      }
`;

export default LearnSection
