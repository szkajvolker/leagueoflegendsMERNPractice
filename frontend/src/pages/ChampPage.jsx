import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChampPage = () => {
  const [champ, setChamp] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchChamp = async () => {
      try {
        const res = await fetch(`http://localhost:4444/api/champs/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch champ");
        }
        const data = await res.json();
        console.log(data);

        setChamp(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChamp();
  }, [id]);

  return (
    <div>
      <div>
        <p>{champ.name}</p>
        <img className="w-40 h-auto" src={champ.img}></img>
        <p>{champ.role}</p>
        <p>{champ.origin}</p>
      </div>
    </div>
  );
};

export default ChampPage;
