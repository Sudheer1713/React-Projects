import React from 'react'

const Gallary = ({data}) => {
  return (
    <div>
        <div className="row">
        {data.map((image)=> 
        <div key={image.id}>
           <div className="col-md-2"> 

           <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} height="500" width='1250' />

           </div>
        </div>)}
        </div>
    </div> 
  )
}

export default Gallary
