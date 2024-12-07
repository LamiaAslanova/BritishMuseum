import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import controller from '../../../Services/api/requests'
import { endpoints } from '../../../Services/api/constants'
import Swal from 'sweetalert2'
import './User.css'
import { signOut } from '../../../Services/redux/Slices/userSlice'
import { Helmet } from 'react-helmet'

const User = () => {
  const navigate = useNavigate()
  const userLocal = JSON.parse(localStorage.getItem("user"))
  const data = useSelector((state) => state.user)
  const [user, setUser] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userLocal.id) {
      navigate('/')
    }
  }, [userLocal, navigate])

  useEffect(() => {
    const token = Cookies.get('token')
    controller.getOne(endpoints.users, data.id, token).then((res) => {
      setUser(res.data
      )
      console.log(res.data);
    })
  }, [data])

  return (
    <div className='user'>
      <Helmet>
        <title>{`${user.userName} | British Museum`}</title>
      </Helmet>
      <div className="custom-container user__title__cont">
        <div className="row user__title__row">
          <div className="col-12 user__title__col">
            <h1>My Account</h1>
          </div>
          <div className="col-12 user__title__col">
            <h3>Account Information</h3>
          </div>
        </div>
      </div>
      <div className="custom-container user__cont">
        <div className="row user__row">
          <div className="col-12 user__col">
            <h5>Contact Information</h5>
          </div>
          <div className="col-6 user__col">
            <img src={user.src} width="200px" alt="" />
            <div className="user__info">
              <p>{user.userName}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="col-6 user__col">
            <button onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(signOut());
                  Cookies.remove('token');
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
            }}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default User