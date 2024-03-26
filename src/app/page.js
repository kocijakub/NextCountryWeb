import styles from "./page.module.css";
import Card from "@/Componets/card";
async function getData(){
    const input = await fetch("https://restcountries.com/v3.1/all")
    if (!input.ok){
        throw new Error("failed to fetch")
    }
    return input.json()
}
export const data = await getData()
export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>
        Countries
      </h1>
      <div className={styles.cards}>
          {data.map( item => {
              return <Card name={item.name.common} flag={item.flags.svg} population={item.population} region={item.region}/>
          })}
      </div>
    </main>
  );
}
