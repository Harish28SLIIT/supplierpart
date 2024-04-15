import React, { useState, useEffect } from 'react';React;
import Footer from '../../component/Footer';
import { Link } from 'react-router-dom';

export default function CalculateTotalPrice() {
    const [unitPrice, setUnitPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    useEffect(() => {
        // Calculate total price whenever unit price or quantity changes
        const calculateTotalPrice = () => {
            const totalPrice = parseFloat(unitPrice) * parseFloat(quantity);
            setTotalPrice(isNaN(totalPrice) ? '' : totalPrice.toFixed(2));
        };

        calculateTotalPrice(); // Calculate total price initially
    }, [unitPrice, quantity]);

    return (
        <>
            <div className="flex justify-between mt-4 px-14">
                <div>
                    <h1 className="text-xl font-bold text-center">Calculate Total Price</h1>
                </div>
                 <div>
                    <ul className='flex gap-6'>
                        <li className='hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif'>Product Details</li>
                    </ul>
                </div>
        
            </div>

            <div className="flex flex-row">
                <div className='w-[20%] h-[650px] flex-grow border pl-[100px]'>
                    <div className='w-1/2 p-3 ml-[300px]'>
                        <div className='bg-gray-200 rounded-lg p-4'>
                            <h2 className='text-2xl font-bold mb-4 font-serif text-center'>Enter Details</h2>
                            <div className='mb-2 font-serif'>
                                <label htmlFor='unitPrice'>Unit Price (Rs.)</label>
                                <input
                                    type='text'
                                    placeholder='Enter the Unit Price'
                                    className='w-full p-2 border rounded'
                                    id='unitPrice'
                                    name='unitPrice'
                                    autoComplete='off'
                                    value={unitPrice}
                                    onChange={(e) => { setUnitPrice(e.target.value) }}
                                />
                            </div>
                            <div className='mb-2 font-serif'>
                                <label htmlFor='quantity'>Quantity</label>
                                <input
                                    type='text'
                                    placeholder='Enter the Quantity'
                                    className='w-full p-2 border rounded'
                                    id='quantity'
                                    name='quantity'
                                    autoComplete='off'
                                    value={quantity}
                                    onChange={(e) => { setQuantity(e.target.value) }}
                                />
                            </div>
                            <div className='mb-2 font-serif'>
                                <label htmlFor='totalPrice'>Total Price (Rs.)</label>
                                <input
                                    type='text'
                                    placeholder='Total Price'
                                    className='w-full p-2 border rounded'
                                    id='totalPrice'
                                    name='totalPrice'
                                    autoComplete='off'
                                    value={totalPrice}
                                    readOnly // Make it read-only
                                />
                            </div>
                            <div className='flex flex-row p-3 justify-between font-serif'>
                                <Link to='/createproduct' className='new_btn ml-4 m-[30px]'>Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
