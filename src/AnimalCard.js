import React,{useEffect,useState} from 'react'
import "./AnimalCard.css";

export const AnimalCard = () => {
    const [imageUrl,setImageUrl]=useState("");
    const [fact,setFact]=useState("");
    const [loading,setLoading]=useState(true);

    const fetchAnimalData=async()=>{
        setLoading(true);

        const imageRes=await fetch("https://random.dog/woof.json");
        const imageData=await imageRes.json();
        const image=imageData.url;

        const factRes=await fetch("https://catfact.ninja/fact");
        const factData=await factRes.json();

        setImageUrl(image);
        setFact(factData.fact);
        setLoading(false); 
    }
    useEffect(()=>{
            fetchAnimalData();
        },[])
   return (
    <div className="card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img src={imageUrl} alt="Animal" className="animal-img" />
          <p className="fact">{fact}</p>
          <button onClick={fetchAnimalData}>🔄 New Fact + Image</button>
        </>
      )}
    </div>
  )
}

export default AnimalCard;
