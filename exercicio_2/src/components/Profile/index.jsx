import styles from "./style.module.css"

export default function Profile ({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}){

    return (
        <div className={styles.container}>
        <img className={styles.avatar} src={avatar} alt="Imagem de perfil" />
        <h2 className={name}>{name}</h2>
        <div>{bio}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <div className={styles.links}>
            <a href={githubUrl} target="blank">GitHub</a>
            <a href={linkedinUrl} target="blank">LinkedIn</a>
            <a href={twitterUrl} target="blank">Twitter</a>
        </div>
        </div>
    )
}