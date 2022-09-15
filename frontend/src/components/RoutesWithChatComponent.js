import React from 'react'
import {Outlet, Navigate} from "react-router-dom"
import UserChatComponent from './user/UserChatComponent'

const RoutesWithChatComponent = () => {
  return (
    <>
    
    <Outlet />
    <UserChatComponent />

    </>
  )
}

export default RoutesWithChatComponent