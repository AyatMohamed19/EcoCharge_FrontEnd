import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { sendEmailForReset } from '../API/api'


export default function CheckEmail() {
    const [success, setSuccess] = useState('')
    let navigate = useNavigate()
const handleSubmit = (e)=>{
    e.preventDefault()
sendEmailForReset(e.target.email.value).then(res=>setSuccess(res.data))
}   
  return (
    <div className='container w-50 mt-5 bg-white p-5'>
      <div className="row">
        <div className="col-md-12">
        {success && <div className='alert alert-success w-100'>{success}</div>}

        </div>
        <div className="col-md-12">
        <form onSubmit={handleSubmit} className="w-100">
    <label>Email Address</label>
<input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    
                    pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                    
                  />
                      <Button
                    className="m-auto w-100 text-center btn submit"
                    type="submit"
                  >
                    Send Email
                  </Button>
</form>
        </div>
      </div>

                    </div>
  )
}
