"use client"
import React,{useState,useEffect} from 'react'
import Script from 'next/script'
import { fetchuser,fetchpayments,initiate } from '@/actions/useraction'
import { useSession } from 'next-auth/react'
const paymentpage = ({username}) => {
    const [paymentform,setpaymentform]=useState({})
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setpayments] = useState([])
    useEffect(() => {
    getdata()
    }, [])
    
    const handleChange=(e)=>{
        setpaymentform({...paymentform,[e.target.name]:e.target.value})
    }
    const getdata=async ()=>{
        let u=fetchuser(username);
        let dbpayments=await fetchpayments(username)
        setpayments(dbpayments)
    }
    const pay=async(amount)=>{
 let a=await initiate(amount,username,paymentform)
 let orderId=a.id;
        var options={ "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Fund Me ", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }}
    var rzp1 = new Razorpay(options);
    rzp1.open();
    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='cover w-full relative'>
                <img className='object-cover w-full h-[350px]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo2MjAsIndlIjoxfQ%3D%3D/16.gif?token-time=1725408000&token-hash=wq5ivWXu9Iaw8f7kPO8-AGTz8exbg5dVqq2GgdLgZWw%3D" alt="" />
                <div className='absolute -bottom-20 right-[46%] border-white border-2 rounded-full'>
                    <img className='rounded-full' width={150} height={150} src="pic.jpg" alt="" />
                </div>
            </div>
            <div className="info flex-col gap-2 flex justify-center items-center my-24">
                <div className='font-bold text-lg'> @{username}</div>
                <div className='text-slate-400'>Creating Animated art </div>
                <div className='text-slate-400'>999 members . 100 posts . ₹100/release</div>
                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-6">
                        {/*Show the list of  all supporters as a leaderboard*/}
                        <h2 className='my-5 text-2xl font-bold '>Supporters</h2>
                        <ul className='mx-5 text-lg '>
                            {payments.length===0 && <li className='my-4'>No payments yet</li>}
                            {payments.map((p,i)=>{
                            return <li key={i} className='my-4 flex gap-2 items-center'>
                                <img width={33} src="avatar.gif" alt="" />
                                <span>{p.name} donated <span> {p.amount} </span> with a message "{p.message}"</span>
                                </li>})}
                        </ul>
                    </div>
                    <div className="makepayment w-1/2 bg-slate-900 rounded-lg text-white p-6">
                        <h2 className='text-2xl font-bold my-5'>Make Payment</h2>
                        <div className="flex gap-2 flex-col">
                            <div>
                                <input onChange={handleChange} name='name' value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            </div>
                            <input onChange={handleChange} name='message' value={paymentform.message}  type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} name='amount' value={paymentform.amount}  type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button  onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg'onClick={()=>pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg'onClick={()=>pay(5000)}>Pay ₹50</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default paymentpage
