import * as axios from "axios"
import React from "react"
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/userPhoto.jpg"

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }
        // props.setUsers([
            // {
            //     id: "1",
            //     photoURL:
            //         "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png",
            //     followed: false,
            //     fullName: "Maxym F",
            //     status: "I am boss",
            //     location: { city: "Kiyv", country: "Ukraine" },
            // },
            // {
            //     id: "2",
            //     photoURL:
            //         "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png",
            //     followed: true,
            //     fullName: "Dmitriy",
            //     status: "teacher",
            //     location: { city: "Minsk", country: "Belarus" },
            // },
            // {
            //     id: "3",
            //     photoURL:
            //         "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png",
            //     followed: false,
            //     fullName: "Minin",
            //     status: "Mentor",
            //     location: { city: "Moscow", country: "Russia" },
            // }])
    

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {props.users.map(u => <div key={u.id}>
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

export default Users