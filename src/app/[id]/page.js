import styles from "./page.module.css";
import FullCard from "@/Componets/fullCard";

async function getData(){
    const input = await fetch("https://restcountries.com/v3.1/all")
    if (!input.ok){
        throw new Error("failed to fetch")
    }
    return input.json()
}
export default async function page({ params }){
    const data = await getData()
    let cards = data.filter(item =>{
        return item.name.common === params.id.replaceAll("_"," ")
    })
    return(
        <div className={styles.card}>
            <div>
                {cards.map(item =>{
                    return <FullCard name={item.name.common} flag={item.flags.svg} region={item.region} ofName={item.name.official}
                                     capital={item.capital} status={item.status} time={item.timezones}
                    />
                })}
            </div>
        </div>
    )
}