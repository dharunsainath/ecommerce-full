import React from 'react'
import ProductCarousalComponent from '../components/ProductCarousalComponent'
import {Row, Container} from 'react-bootstrap'

import CategoryCardComponent from "../components/CategoryCardComponent"
const HomePage = () => {

  const categories=[
    'Tablets','Monitors','Games','Printers','software','camera','books'
  ]
  return (
      <>
        <ProductCarousalComponent />
    
    <Container className="mt-5 ">
    <Row xs={1} md={2} className="g-4 m-4">
      
      
       
          {
          
          categories.map((category,idx)=><CategoryCardComponent category={category} idx={idx} />)
          } 
        
        
      
     

    </Row>
    </Container>

      
        
      
      </>
    

    
  )
}

export default HomePage