import React, { useEffect, useState } from "react";React;
import axios from "axios";
import Logo from "../assets/Logo.jpg";
import Footer from "../component/Footer";
import { Link} from "react-router-dom";

const ProfileDisplay = () => {
  // const [InProduct, setInProduct] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8000/server/supplier/getAllProfileDetails")
  //     .then((result) => {
  //       console.log("data: ", typeof result.data.data); // Check the fetched data
  //       console.log("data: ", Object.values(result.data.data)); // Check the fetched data
  //       setInProduct(result.data ? Object.values(result.data.data) : []);
  //     })
  //     .catch((err) => console.error(err)); // Log any errors

  //     console.log(InProduct,"")
  // }, [InProduct]);

  const [SupllierProfile, setSupllierProfile] = useState([]);


  useEffect(() => {
      axios.get("http://localhost:8000/server/supplier/getallProfile")
        .then((result) => {
          console.log("data: ", typeof result.data.data); // Check the fetched data
          console.log("data: ", Object.values(result.data.data)); // Check the fetched data
          setSupllierProfile(result.data ? Object.values(result.data.data) : []);
        })
        .catch((err) => console.error(err)); // Log any errors
  
        console.log(SupllierProfile,"data calling")
    }, []);
  
    const handleDelete = (id)=>
    {
      axios.delete(`http://localhost:8000/server/supplier/Profiledelete/${id}`)
      .then(res=>{console.log(res)
        alert('Supplier Profile details delete successfully!');
  
          window.location.reload()
      } )
      .catch(err=>console.log(err))
    }


  
  return (
    <>
      <div className="flex justify-between mt-4 px-14">
        <div>
          <img className="w-[120px] h-[48px]" src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex gap-6">
            <li className="hover:border-solid cursor-pointer text-2xl font-serif">
              Supplier Dashboard
            </li>
          </ul>
        </div>
        <div>
          <h1 className="bg-white text-[#417702] px-2 py-1 rounded-md hover:opacity-[1.1] cursor-pointer border border-green-800 w-[100px] text-center font-serif active:bg-slate-500">
            Logout
          </h1>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="bg-lime-950 w-[175px] h-[900px] text-center rounded-md">
          <Link to="/ProfileDisplay" className="btn">
            Profile
          </Link>
          <Link to="/productdetails" className="btn">
            Product Details
          </Link>
          <Link to="/createproduct" className="btn">
            Product History
          </Link>
          <Link to="/PaymentDisplay" className="btn">
            Payment Details
          </Link>
        </div>

        <div className="w-[20%] h-[650px] flex-grow border">
          <div className="w-1/2 p-3 ml-[300px]">
            <div className="bg-gray-200 rounded-lg p-4">
              <h2 className="text-2xl font-bold mb-4 font-serif text-center">
                Profile
              </h2>

              <div className="mb-2 font-serif">
                <label htmlFor="Id">ID</label>
                <input
                  type="text"
                  placeholder="001"
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className="mb-2 font-serif">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  placeholder="Harish"
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className="mb-2 font-serif">
                <label htmlFor="Email_address">Email address</label>
                <input
                  type="text"
                  placeholder="harish@gmail.com"
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className="mb-2 font-serif">
                <label htmlFor="Contact_No">Contact Number</label>
                <input
                  type="text"
                  placeholder="0774355655"
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className="mb-2 font-serif">
                <label htmlFor="NIC_number">NIC number</label>
                <input
                  type="text"
                  placeholder="200202802433"
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className='mb-2 font-serif'>

</div>
<div className='flex flex-row justify-center font-serif text-center'>
    <Link to='/' className='new_btn ml-4'>Create New Profile</Link>
    
</div>
            </div>
          </div>
          <div>
          <div className="bg-white rounded p-3  ml-6 pb-20">
                            <table className="w-full border mt-5">
                                <thead>
                                    <tr className="bg-gray-300 font-serif">
                                        <th className="p-3 text-center">ID</th>
                                        <th className="p-3 text-center">Name</th>
                                        <th className="p-3 text-center">Email address</th>
                                         <th className="p-3 text-center">Contact Number</th>
                                        <th className="p-3 text-center">NIC number</th>
                                        <th className="p-3 text-left">Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {SupllierProfile.map((profile, index) => (
                                        <tr key={index}>
                                            <td className="text-center">{profile.Id}</td>
                                            <td className="text-center">{profile.Name}</td>
                                            <td className="text-center">{profile.Email_address}</td>
                                            <td className="text-center">{profile.Contact_No}</td>
                                            <td className="text-center">{profile.NIC_number}</td> 
                                            <td className="flex text-center ">
                                                <Link to={`/UpdateProfileDetails/${profile._id}`} className=" bg-green-950 text-white px-3 py-1 rounded text-center mr-2">Update</Link>
                                                <button className=" bg-red-500 text-white px-3 py-1 rounded text-center mr-2" onClick={() => handleDelete(profile._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
      </div>
        </div>
        
      </div>
     

      <Footer className="footer-prof" />
    </>
  );
};
export default ProfileDisplay