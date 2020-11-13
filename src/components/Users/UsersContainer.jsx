import React from "react"
import { connect } from "react-redux"
import { followAC, unfollowAC } from "../../redux/usersReducer"
import Users from "./Users"

let mapStayToProps = (state) => {
    return {
        users: state.usersPage.users
    }
} 

let mapDispatchToProps = (dispatch)=>{
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        }
    }
}

export default connect(mapStaytToProps, mapDispatchToProps)(Users)