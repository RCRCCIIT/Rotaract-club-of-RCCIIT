import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Context/Auth/AuthContext'
import { CiLogout } from 'react-icons/ci'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'


const Profile = () => {

  const context = useContext(AuthContext);
  const userInfo = context.user;
  const isAuthenticated = context.isAuthenticated;
  const setIsAuthenticated = context.setIsAuthenticated;

  const [user, setUser] = useState(userInfo.username);
  const [roll, setRoll] = useState(userInfo.roll);
  const [rid, setRid] = useState(userInfo.rid);
  const [email, setEmail] = useState(userInfo.email);
  const [phone, setPhone] = useState(userInfo.phone);
  const [dob, setDob] = useState(userInfo.dob);
  const [bloodGroup, setBloodGroup] = useState(userInfo.blood);
  const [doi, setDoi] = useState(userInfo.doi);


  const logout = () => {
    setIsAuthenticated(false);
  }


  const updateProfile = () => {
    const profileID = userInfo.id;
    const updatedProfile = {
      username: user,
      roll: roll,
      rid: rid,
      email: email,
      phone: phone,
      dob: dob,
      blood: bloodGroup,
      doi: doi
    }
    axios.put(`https://aodzylv2p2.execute-api.ap-south-1.amazonaws.com/dev/user/${profileID}`, updatedProfile)
      .then((response) => {
        console.log(response.data);
        toast.success("Profile Updated Successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Profile Updation Failed")
      });
  }



  return (
    <div>

      <Navbar />

      <div className='mt-4 pt-2 container'>
        {/* heading with buttons */}
        <div className='d-flex flex-column justify-content-start align-items-start mx-3'>

          <div className='display-6 d-flex justify-content-start mb-3' style={{ fontFamily: "Lora", width: "350px" }}> <em>User Dashboard</em></div>

          <div className='d-flex mb-3'>
            <button className="my-1 mx-0 btn fw-semibold btn-sm rounded-pill" style={{ backgroundColor: "#B4637A", color: "white" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit Details</button>
            {/* Modal  */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    {/* Modal Title */}
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Your Profile Details</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className='d-flex justify-content-around flex-wrap mb-4'>
                      {/* Modal form */}
                      <div style={{ width: "340px" }}>
                        <div className="mt-4 d-flex rounded-pill">
                          <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Name</div>
                          <input className='text-center fw-semibold py-1' style={{ width: "180px", border: "4px solid #D7ECEF" }} value={user} onChange={(e) => { setUser(e.target.value) }} />
                        </div>
                        <div className="mt-4 d-flex rounded-pill">
                          <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Phone</div>
                          <input className='text-center fw-semibold py-1' style={{ width: "180px", border: "4px solid #D7ECEF" }} value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                        </div>
                        <div className="mt-4 d-flex rounded-pill">
                          <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Rotaract ID</div>
                          <input className='text-center fw-semibold py-1' style={{ width: "180px", border: "4px solid #D7ECEF" }} value={rid} onChange={(e) => { setRid(e.target.value) }} />
                        </div>
                        <div className="mt-4 d-flex rounded-pill">
                          <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your DOB</div>
                          <input className='text-center fw-semibold py-1' type='date' style={{ width: "180px", border: "4px solid #D7ECEF" }} value={dob} onChange={(e) => { setDob(e.target.value) }} />
                        </div>
                        <div className="mt-4 d-flex rounded-pill">
                          <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Roll</div>
                          <input className='text-center fw-semibold py-1' style={{ width: "180px", border: "4px solid #D7ECEF" }} value={roll} onChange={(e) => { setRoll(e.target.value) }} />
                        </div>
                        <div className="mt-4 d-flex rounded-pill">
                          <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Email</div>
                          <input className='text-center fw-semibold py-1' style={{ width: "180px", border: "4px solid #D7ECEF" }} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mt-4 d-flex rounded-pill">
                          <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your Blood Group</div>
                          <input className='text-center fw-semibold py-1' style={{ width: "180px", border: "4px solid #D7ECEF" }} value={bloodGroup} onChange={(e) => { setBloodGroup(e.target.value) }} />
                        </div>
                        <div className="mt-4 d-flex rounded-pill">
                          <div className='text-center fw-semibold py-1' style={{ width: "160px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Your DOI</div>
                          <input className='text-center fw-semibold py-1' type='date' style={{ width: "180px", border: "4px solid #D7ECEF" }} value={doi} onChange={(e) => { setDoi(e.target.value) }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Modal Footer with buttons */}
                  <div className="modal-footer">
                    <button type="button" className="btn fw-semibold" style={{ backgroundColor: "#D0B9EC" }} data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn fw-semibold" style={{ backgroundColor: "#B4637A", color: "white" }} data-bs-dismiss="modal" onClick={updateProfile} >Save & Update</button>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Modal */}

            <Toaster position="top-center" reverseOrder={false} />

            {/* logout button */}
            <button className="my-1 mx-3 btn fw-semibold btn-sm rounded-pill" style={{ backgroundColor: "#D0B9EC" }} type="submit" onClick={logout}><CiLogout color='black' size={20} /> Logout</button>
          </div>

        </div>


        {/* user's details */}

        {/* User Details Heading */}
        <div className='fs-3 d-flex justify-content-center pt-4 mt-2' style={{ fontFamily: "Lora" }}> <em>Your Details</em></div>

        {/* User Details in tabulation form*/}
        <div className='d-flex justify-content-around flex-wrap mb-4 pb-4'>
          {/* left-column */}
          <div style={{ width: "340px" }}>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "120px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Name</div>
              <div className='text-center fw-semibold py-1' style={{ width: "240px", border: "4px solid #D7ECEF" }}>{user}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "120px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Phone</div>
              <div className='text-center fw-semibold py-1' style={{ width: "240px", border: "4px solid #D7ECEF" }}>{phone}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "120px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Rotaract ID</div>
              <div className='text-center fw-semibold py-1' style={{ width: "240px", border: "4px solid #D7ECEF" }}>{rid}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "120px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>DOB</div>
              <div className='text-center fw-semibold py-1' style={{ width: "240px", border: "4px solid #D7ECEF" }}>{dob}</div>
            </div>
          </div>
          {/* right column */}
          <div style={{ width: "340px" }}>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "120px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Roll</div>
              <div className='text-center fw-semibold py-1' style={{ width: "240px", border: "4px solid #D7ECEF" }}>{roll}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "120px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Email</div>
              <div className='text-center fw-semibold py-1' style={{ width: "240px", border: "4px solid #D7ECEF" }}>{email}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "120px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>Blood Group</div>
              <div className='text-center fw-semibold py-1' style={{ width: "240px", border: "4px solid #D7ECEF" }}>{bloodGroup}</div>
            </div>
            <div className="mt-4 d-flex rounded-pill">
              <div className='text-center fw-semibold py-1' style={{ width: "120px", backgroundColor: "#D7ECEF", border: "4px solid #D7ECEF" }}>DOI</div>
              <div className='text-center fw-semibold py-1' style={{ width: "240px", border: "4px solid #D7ECEF" }}>{doi}</div>
            </div>
          </div>

        </div>
        {/* End of User Details */}


        {/* make payment */}

        <div className='fs-3 d-flex justify-content-center ' style={{ fontFamily: "Lora" }}> <em>Make Payment</em></div>

        <div className='d-flex justify-content-center mt-3 mb-4 pb-4'>
          <div className='d-flex flex-column justify-content-start align-items-start p-3 rounded-5' style={{ backgroundColor: "#D7ECEF", width: "340px" }}>
            <div className='fs-5 fw-semibold'>Club Membership of Month June</div>
            <div className='mt-3'>Make your membership payment here </div>
            <div className='d-flex justify-content-between mt-3' style={{ width: "100%" }}>
              <div className='d-flex flex-column align-items-start'>
                <div className='fw-semibold'>Due Date</div>
                <div>30th June 2021</div>
              </div>
              <button className="my-1 mx-0 py-2 btn fw-semibold rounded-pill" style={{ backgroundColor: "#B4637A", color: "white" }} type="submit">Pay Now</button>
            </div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Profile