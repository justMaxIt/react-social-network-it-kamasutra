import * as axios from "axios"
import React from "react"
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/userPhoto.jpg"

class Users extends React.Component {
    render() {
        return <div>
        <button onClick={getUsers}>Get Users</button>
        {this.props.users.map(u => <div key={u.id}>
            <span>
                <div><img src={u.photos.small != null ? u.photos.small :  userPhoto } className={styles.userPhoto}/></div>  
                <div>
                    {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
</span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                 </span>
            </span>
        </div>)}
    </div>
    
    }
}

export default Users