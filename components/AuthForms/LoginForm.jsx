import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <h1 className='my-8 font-bold text-sm text-center'>Welcome Back.</h1>
      <form>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900">Your email</label>
          <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@example.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-900">Your password</label>
          <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm