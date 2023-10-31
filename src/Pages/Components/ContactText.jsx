import React from 'react'

function ContactText() {
  return (
    <div className='contact-text'> 
        <h1>What will  <br /> be the next step ?</h1>
        <p>You are one step closer to get your perfect home.</p> 
        <div className="steps">
           <article className="step-box">
           <div className="count-content">
                <div className="count"><div className="dt"></div></div>
                <div className="bar"></div>
            </div>
            <div className="text">
                <h5><span>1-</span>We'll prepare a proposal</h5>
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
                <h5><span>2-</span>How we handle your business</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cum voluptatem molestiae iure ea nostrum.</p>
            </div>
           </article>
           <article className="step-box">
           <div className="count-content">
                <div className="count"><div className="dt"></div></div>
                <div className="bar"></div>
            </div>
            <div className="text">
                <h5><span>3-</span>We help you rich more customers</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cum voluptatem molestiae iure ea nostrum.</p>
            </div>
           </article>

        </div>
    </div>
  )
}

export default ContactText