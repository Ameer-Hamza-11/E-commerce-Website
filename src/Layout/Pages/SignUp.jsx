import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { addSignUp } from '../../Features/SignUpSlice'
import { useCookies } from 'react-cookie'


const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(['users'])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      alert('please fill all the fields')
      return
    }

    setCookie('users', JSON.stringify({ name, email, password }), { path: '/', maxAge: 86400 })

    dispatch(addSignUp(formData))

    setFormData({ name: '', email: '', password: '' })

    setIsSubmitted(true)
    // console.log('Form submitted:', formData)
  }

  useEffect(() => {
    if (cookies.users && typeof cookies.users === 'string' && cookies.users.startsWith('[object')) {
      removeCookie('users', { path: '/' })
      console.warn('Invalid cookie removed');
    }
  }, [])
  useEffect(()=>{
    if (!cookies.users) return;

    try {
      const parsed = typeof cookies.users === 'string' 
      ? JSON.parse(cookies.users) : cookies.users
      console.log('parsed cookie:', parsed);
      
    } catch (error) {
      console.log('Invalid cookie format, removing:', error);
      removeCookie('users', { path: '/' });
    }
  },[cookies.users])



  useEffect(() => {
    if (isSubmitted) {
      navigate('/signin')
    }
  }, [isSubmitted, navigate]) // dependency array zaroori hai
  return (
    <div className="min-h-screen font-[Montserrat] bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-6">Create Account 📝</h2>

        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account? <NavLink to="/signin" className="text-violet-600 hover:underline">Sign In</NavLink>
        </p>
      </div>
    </div>
  )
}

export default SignUp
