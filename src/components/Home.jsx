import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"
import Cardsdata from './CardsData';

const Home = () => {
  const [data, setdata] = useState(Cardsdata)

  return (

    <section className="container mt-4 iteam_section">
      <h2 className='px-4' style={{fontweight:400}}>Restaurants in Ahmedabad Open now</h2>
      <div className="row mt-2 d-flex  justify-content-around  align-items-center">
        {
          data.map((element, k) => {

            return (
              <>
               <Card style={{ width: '22rem' ,border:"none"}} className='hove mb-4'>
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className='cd' />
                 
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className='mt-2'>{element.dish}</h4>
                      <span>{element.rating}&nbsp; ★</span>
                    </div>
                    <div className="lower_data d-flex justify-content-between align-items-center">
                      <h5 className=''>{element.somedata}</h5>
                      <p>₹ {element.price}</p>
                      
                    </div>
                    <div className="extra"></div>

                    <div className="last_data d-flex justify-content-between align-items-center">
                     <img src={element.arrimg} className='limg' alt="" />
                      <Button style={{width:"150px",background:"#ff3054db",border:"none"}} variant='outline-light' className='mt-2 mb-2'> Add To Cart </Button>
                      <img src={element.delimg} className='laimg' alt="" />
                    </div>

                  </div>                
                 
                </Card>
              </>
            )
          })}

      </div>
    </section>

  )
}

export default Home