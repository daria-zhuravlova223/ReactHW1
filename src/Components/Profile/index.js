import styles from './style.module.css';

function Profile(props) {
    return <div className={styles.userCard}>
        <img src= {props.avatar} alt="user avatar" className={styles.avatar}/>
        <p>{props.username}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
        <div className={styles.container}>
        <div className={styles.stats}>
            <div className="followers">
                <p>Followers</p>
                <p>{props.stats.followers}</p>
            </div>
            <div className="views">
                <p>Views</p>
                <p>{props.stats.views}</p>
            </div>
            <div className="likes">
                <p>Likes</p>
                <p>{props.stats.likes}</p>
            </div>
        </div>
        </div>
    </div>
}
export default Profile;