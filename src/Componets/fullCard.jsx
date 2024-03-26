import Link from "next/link";
import styles from "./page.module.css"

export default function FullCard({name, flag, region, ofName,capital,time,status,}){
    return(
        <>
            <Link href={"/"}>Go Back</Link>
            <div className={styles.header}>
                <div className={styles.info}>
                    <h1>{name}</h1>
                    <p className={styles.titles}>Official name</p>
                    <p className={styles.infoP}>{ofName}</p>
                    <p className={styles.titles}>Region</p>
                    <p className={styles.infoP}>{region}</p>
                    <p className={styles.titles}>Capital</p>
                    <p className={styles.infoP}>{capital}</p>
                    <p className={styles.titles}>Timezone</p>
                    <p className={styles.infoP}>{time}</p>
                    <p className={styles.titles}>Status</p>
                    <p className={styles.infoP}>{status}</p>
                </div>
                <img className={styles.flag} id={styles.flag} src={flag} alt=""/>
            </div>
        </>
    )
}