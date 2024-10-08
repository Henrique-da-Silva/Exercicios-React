import styles from "./style.module.css"

export default function Profile ({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}){

    return (
        <div className={styles.container}>
        <img className={styles.avatar} src={avatar} alt={name} />
        <h2 className={name}>{name}</h2>
        <div>{bio}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <div className={styles.links}>
            <a href={githubUrl} target="_blank">GitHub</a>
            <a href={linkedinUrl} target="_blank">LinkedIn</a>
            <a href={twitterUrl} target="_blank">Twitter</a>
        </div>
        </div>
    )
}