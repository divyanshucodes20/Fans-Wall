"use client"
import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import { fetchuser,updateprofile } from '@/actions/useraction'
const Dashboard = () => {
  const { data: session,update } = useSession()
  const router=useRouter()
  const [form,setform]=useState({})
  useEffect(()=>{
    getdata()
    if(!session) {
        router.push('/login')
      }
  },[router,session])
const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
}
const handlesubmit=async (e)=>{
  let a=await updateprofile(e,session.user.name)
  alert("Profile Updated")
}
const getdata=async ()=>{
  let u= await fetchuser(session.user.name)
  setform(u)
}
  return (
    <div className='container mx-auto py-5'>
        <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>
        <form className='max-w-2xl mx-auto' action={handlesubmit}>
        <div className="my-2">
          <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
          <input type="text" value={form.name?form.name:""} onChange={handlechange} name='name' id='name' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
          bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>
        <div className="my-2">
          <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
          <input type="email" value={form.email?form.email:""} onChange={handlechange} name='email' id='email' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
          bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>
        <div className="my-2">
          <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>UserName</label>
          <input type="text" value={form.username?form.username:""} onChange={handlechange} name='username' id='username' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
          bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>
        <div className="my-2">
          <label htmlFor="profilepic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Profile</label>
          <input type="text" value={form.profilepic?form.profilepic:""} onChange={handlechange} name='profilepic' id='profilepic' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
          bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>
        <div className="my-2">
          <label htmlFor="coverpic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Cover Picture</label>
          <input type="text" value={form.coverpic?form.coverpic:""} onChange={handlechange} name='coverpic' id='coverpic' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
          bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>
        <div className="my-2">
          <label htmlFor="razorpayid" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>RazorPay Id</label>
          <input type="text" value={form.razorpayid?form.razorpayid:""} onChange={handlechange} name='razorpayid' id='razorpayid' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
          bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>
        <div className="my-2">
          <label htmlFor="razorpaysecret" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>RazorPay Secret</label>
          <input type="text" value={form.razorpaysecret?form.razorpaysecret:""} onChange={handlechange} name='razorpaysecret' id='razorpaysecret' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
          bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>
        <div className="my-6">
          <button type='submit' className='block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none
          dark:focus:ring-blue-800 font-medium text-sm'>Save</button>
        </div>
        </form>
    </div>
  )
}

export default Dashboard