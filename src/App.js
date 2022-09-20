import { db } from "./firebase/config"
import { useState } from "react"
// import {GeneralStarExample} from './components/str'
import {collection,addDoc,} from "firebase/firestore"
// import { Rating } from 'react-simple-star-rating'
  function App() {
    const [form, setForm] = useState({
      Name: "",
      Email: "",
      mobile: "",
      address:"",
      latitude:"",
      longitude:"",
      services:"",
      rating:"",
      profileImage:"",
      businessAdminCutoff:"",
      portalAdminCutoff:""
    })

    const DatasCollectionRef = collection(db, "Datas")


  // const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  // const handleRating = (rating) => {
  //   setRating()
  //   // other logic
  // }
  const handleSubmit = e => {
    e.preventDefault()

    if (
      !form.Name ||
      !form.Email ||
      !form.mobile ||
      !form.address ||
      !form.latitude ||
      !form.longitude ||
      !form.services ||
      
      !form.profileImage||
      !form.businessAdminCutoff||
      !form.portalAdminCutoff
          ) {
      alert("Please fill out all fields")
      return
    }

    addDoc(DatasCollectionRef, form)

    setForm({
      Name: "",
      Email: "",
      mobile: "",
      address:"",
      latitude:"",
      Services:"",
      longitude:"",
      services:"",
      rating:"",
      profileImage:"",
      businessAdminCutoff:"",
      portalAdminCutoff:""
        })

  }


  return (
    
    <div className="App" class="continer">
      <header>
        <h1>Add business</h1>
      </header>
        <div> 
          <h2>Basic Info</h2>

          <form onSubmit={handleSubmit}>
<div class="row">
            <div className="form-group col-md-3">
              <label>Name</label>
              <input 
                type="text" 
                value={form.Name} 
                onChange={e => setForm({...form, Name: e.target.value})} />
            </div>
{/* <GeneralStarExample/> */}
            <div className="form-group col-md-3">
              <label>Mobile</label>
              <input 
                type="tel"
                pattern="[0-9]{2}[0-9]{4}[0-9]{4}" 
                placeholder="91 5555 5555 "
                value={form.mobile} 
                onChange={e => setForm({...form, mobile: e.target.value})} />
            </div>
            <div class="form-group col-md-3">
    <div class="col1">
    <div className=" form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={form.Email} 
                onChange={e => setForm({...form, Email: e.target.value})} />
            </div>
            </div>
    </div>
    </div>
 <div class="row">
    <div class="col1">
    <div className="form-group">
              <label>Address </label>
              <input 
                type="text" 
                value={form.address} 
                onChange={e => setForm({...form, address: e.target.value})} />
            </div>
    </div>


<div class="two-col">
    <div class="col1">
    <div className="form-group">
              <label>latitude</label>
              <input 
                type="text" 
                value={form.latitude} 
                onChange={e => setForm({...form, latitude: e.target.value})} />   
            </div>
    </div>
    </div>  
    <div class="col1">
    <div className="form-group">
              <label>Longitude</label>
              <input 
                type="text" 
                value={form.longitude} 
                onChange={e => setForm({...form, longitude: e.target.value})} />
            </div>
    </div>
      
</div>
<div class ="row">
<div class="two-col">
    <div class="col1">  
    <div className="form-group">
              <label>Services</label>
              <input 
                type="text" 
                value={form.services} 
                onChange={e => setForm({...form, services: e.target.value})} />
            </div>
    </div>
    </div>
    <div class="rating" id="rating"  value={form.rating} onChange={e => setForm({...form, rating: e.target.value})} >
  
  <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label>
  <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label>
  <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label>
  <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label>
  <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>

</div>
              
<div class="two-col">
    <div class="col1">
            <div className="form-group">
              <label>Profile Image</label>
                <input type="file" accept="image/jpg, image/jpeg"
                value={form.profileImage} 
                onChange={e => setForm({...form, profileImage: e.target.value})} />
            </div>
    </div>          
</div>
</div>
<h2>Split up</h2>
<div class ="row">
<div class="two-col">
    <div class="col2">
    <div className="form-group">
              <label>Business Admin Cut Off</label>
              <input type="text" 
                value={form.businessAdminCutoff} 
                onChange={e => setForm({...form, businessAdminCutoff: e.target.value})} />
            </div>
    </div>

          
</div>
<div class="two-col">
    <div class="col1">
    <div className="form-group">
              <label>Portal Admin Cut Off</label>
              <input type="text" 
                value={form.portalAdminCutoff} 
                onChange={e => setForm({...form, portalAdminCutoff: e.target.value})} />
            </div>
    </div>

          
</div>
</div>
 
    <div className="buttons">
      <button type="submit">Submit</button>
    </div>

          </form>
        </div>
      </div>
  );
}

export default App;