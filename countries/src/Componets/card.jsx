import styles from "./page.module.css";
import Link from "next/link";
export default function Card({name, flag, population, region}){
    let nname = name
    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <h2>{name.toString()}</h2>
                <img className={styles.flag} src={flag} alt=""/>
            </div>
            <div>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
                <Link href={"/"+name.replaceAll(" ","_")}>Click here</Link>

            </div>
        </div>
    )
}