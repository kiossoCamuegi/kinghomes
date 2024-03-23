import React from 'react'

function ContactText() {
  return (
    <div className='contact-text'> 
        <h1>Qual sera<br /> os nossos proximos passos ?</h1>
        <p>Você está um passo mais perto de conseguir sua casa perfeita.</p> 
        <div className="steps">
           <article className="step-box">
           <div className="count-content">
                <div className="count"><div className="dt"></div></div>
                <div className="bar"></div>
            </div>
            <div className="text">
                <h5><span>1-</span>Iremos preparar uma proposta</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cum voluptatem molestiae iure ea nostrum.</p>
            </div>
            <br />
           </article>
           <article className="step-box">
           <div className="count-content">
                <div className="count"><div className="dt"></div></div>
                <div className="bar"></div>
            </div>
            <div className="text">
                <h5><span>2-</span>Como lidamos com o seu negocio</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cum voluptatem molestiae iure ea nostrum.</p>
            </div>
           </article>
           <article className="step-box">
           <div className="count-content">
                <div className="count"><div className="dt"></div></div>
                <div className="bar"></div>
            </div>
            <div className="text">
                <h5><span>3-</span>Alcansaremos mais clientes para voce</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cum voluptatem molestiae iure ea nostrum.</p>
            </div>
           </article>

        </div>
    </div>
  )
}

export default ContactText