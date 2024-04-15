import React, { useState } from 'react';React;
import Logo from '../../assets/Logo.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../component/Footer';
import { useNavigate } from 'react-router-dom';

export default function SupplierCreateProduct() {
    const [Id, setID] = useState('');
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');
    const [netweight, setWeight] = useState('');
    const [unitprice, setUnitprice] = useState('');
    const [totalprice, setTotalprice] = useState('');

    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/server/supplier/supplierCreate', {
                Id,
                name,
                qty,
                netweight,
                unitprice,
                totalprice
            });

            if (response.status === 201) {
                console.log(response.data);
                alert('Product created successfully!');
                navigate('/productdetails');
            } else {
                throw new Error(response.statusText || 'Failed to create product');
            }
        } catch (error) {
            const errorMessage = error.response ? JSON.stringify(error.response.data) : error.message;
            console.error('Error creating product:', errorMessage);
            alert('Failed to create product. Please try again.');
        }
    };

    return (
        <>
            <div className="flex justify-between mt-4 px-14">
                <div>
                    <img className="w-[120px] h-[48px]" src={Logo} alt="Logo" />
                </div>
                <div>
                    <ul className="flex gap-6">
                        <li className="hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif">
                            <Link to="/dashboard">Supplier Dashboard</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="bg-white text-[#417702] px-2 py-1 rounded-md hover:opacity-[1.1] cursor-pointer border border-green-800 w-[100px] text-center font-serif active:bg-slate-500">
                        <Link to="/logout">Logout</Link>
                    </h1>
                </div>
            </div>

            <div className="flex flex-row">
            <div className="white w-[175px] h-[750px] text-center rounded-md"></div>
                <div className='w-[20%] h-[650px] flex-grow border '>
                    <div className='w-1/2 p-3 ml-[300px]'>
                        <div className='bg-gray-200 rounded-lg p-4'>
                            <form onSubmit={handleSubmit} >
                                <h2 className='text-2xl font-bold mb-4 font-serif text-center'>Add Product</h2>
                                <div className='flex flex-row justify-center font-serif text-center'>
    <Link to='/CalculateTotalPrice' className='newly_btn ml-9'>Calculate Total Price</Link> </div>
                                <div className='mb-2 font-serif'>
                                    <label htmlFor='ID'>ID</label>
                                    <input
                                        type='text'
                                        placeholder='Enter the Id'
                                        className='w-full p-2 border rounded'
                                        id='ID'
                                        name='ID'
                                        autoComplete='off'
                                        value={Id}
                                        onChange={(e) => { setID(e.target.value) }}
                                    />
                                </div>
                                <div className='mb-2 font-serif'>
                                    <label htmlFor='Name'>Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter the Name'
                                        className='w-full p-2 border rounded'
                                        id='Name'
                                        name='Name'
                                        autoComplete='off'
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className='mb-2 font-serif'>
                                    <label htmlFor='Quantity'>Quantity</label>
                                    <input
                                        type='text'
                                        placeholder='Enter the Quantity'
                                        className='w-full p-2 border rounded'
                                        id='Quantity'
                                        name='Quantity'
                                        autoComplete='off'
                                        value={qty}
                                        onChange={(e) => { setQty(e.target.value) }}
                                    />
                                </div>
                                <div className='mb-2 font-serif'>
                                    <label htmlFor='Brand'>NetWeight(g)</label>
                                    <input
                                        type='text'
                                        placeholder='Enter the Brand'
                                        className='w-full p-2 border rounded'
                                        id='Brand'
                                        name='Brand'
                                        autoComplete='off'
                                        value={netweight}
                                        onChange={(e) => { setWeight(e.target.value) }}
                                    />
                                </div>
                                <div className='mb-2 font-serif'>
                                    <label htmlFor='unitprice'>Unit Price(Rs)</label>
                                    <input
                                        type='text'
                                        placeholder='Enter the Unit Price'
                                        className='w-full p-2 border rounded'
                                        id='unitprice'
                                        name='unitprice'
                                        autoComplete='off'
                                        value={unitprice}
                                        onChange={(e) => { setUnitprice(e.target.value) }}
                                    />
                                </div>

                            
                                <div className='mb-4 font-serif' style={{ marginTop: '1rem' }}>
                                    <label htmlFor='totalprice'>Total Price(Rs.)</label>
                                    <input
                                        type='text'
                                        placeholder='Enter the Total Price'
                                        className='w-full p-2 border rounded'
                                        id='totalprice'
                                        name='totalprice'
                                        autoComplete='off'
                                        value={totalprice}
                                        onChange={(e) => { setTotalprice(e.target.value) }}
                                    />
                                </div>
                                <div className='mb-2 font-serif'></div>
                                <div className='flex flex-row p-3 justify-between font-serif'>
                                    <Link to='/productdetails' className='new_btn ml-4'>Back</Link>
                                    <button type='submit' className='new_btn m-[30px]'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
