import React from 'react'

export default function Result() {
  return (
    <div>
            <div className='container my-4'>
<div class="mb-3">
    <img src='https://www.medicaps.ac.in/sitefront/university/assets/img/logo_transparent.png' alt='medicaps' className='my-4 alert alert-dark'  style={{ borderRadius:"4px",padding:"10px"}}/>
    <h2 for="exampleFormControlTextarea1" class="form-label text">WORD SENSE DISAMBIGUATION FOR HINDI LANGUAGE USING MACHINE LEARNING</h2>
  <br/>
  <div className='row'>
  <h2 for="exampleFormControlTextarea1" class="form-label col col-lg-3 my-4" style={{paddingTop:"40px"}}>Input Sentence:</h2>
  <br/>
  <textarea class="form-control mx-4 col" id="exampleFormControlTextarea1"  type="text" name="text"                placeholder="Enter Text Here"
                rows="7"></textarea>
  </div>
  <br/>
  <a className='btn btn-success mx-3' onClick={()=>{ alert("submited") }} >Submit</a>
</div>
<br/>
      </div>
    <div className='container mx-4 my-4'>
    {/* <div class="alert alert-dark" role="alert"  style={{paddingLeft:"30px",paddingRight:"30px",backgroundColor:"gray"}}>
    <div class="alert alert-dark row">
      <div class="btn btn-secondary col col-lg-2"> Sense 1    </div>
      <div className='alert alert-dark col col-lg-6'>dfskkjdfalks</div>
    </div>
              </div> */}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Sense 1: A simple primary list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Sense 2: A simple secondary list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success">Sense 3: A simple success list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Sense 4: A simple danger list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Sense 5: A simple warning list group item</a>

</div>
    </div>
    </div>
  )
}
