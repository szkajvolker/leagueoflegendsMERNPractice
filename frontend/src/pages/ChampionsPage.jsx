import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLocationSearching } from "react-icons/md";

const ChampionsPage = () => {
  const [champs, setChamps] = useState([]);
  const [selectedRole, setSelectedRole] = useState("all");

  useEffect(() => {
    const fetchChamps = async () => {
      try {
        const response = await fetch("http://localhost:4444/api/champs");
        if (!response.ok) {
          throw new Error("Failed to fetch champions");
        }
        const data = await response.json();
        //console.log(data.champions);
        //console.log(typeof data);
        setChamps(data.champions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChamps();
  }, []);

  /*   const uniqueRoles = [];
  for (const champ of champs) {
    for (const role of champ.role) {
      if (!uniqueRoles.includes(role)) {
        uniqueRoles.push(role);
      }
    }
  } */

  const uniqueRoles = new Set();
  for (const champ of champs) {
    for (const role of champ.role) {
      uniqueRoles.add(role);
    }
  }

  const uniqueArray = Array.from(uniqueRoles);
  console.log(uniqueRoles);
  //console.log(typeof uniqueRoles);

  const filteredChamps =
    selectedRole === "all" ? champs : champs.filter((champ) => champ.role.includes(selectedRole));

  return (
    <div className="overflow-x-auto">
      <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
        <option value="all" key="all">
          All Roles
        </option>
        {uniqueArray.map((role) => (
          <option value={role} key={role}>
            {role}
          </option>
        ))}
      </select>

      <table className="min-w-full border-2 border-gray-500">
        <thead className="p-2 border-2">
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Role</th>
            <th>Origin</th>
            <th>Detail</th>
          </tr>
        </thead>

        <tbody>
          {filteredChamps.map((champ) => (
            <tr className="p-2 border-2" key={champ._id}>
              <td>{champ.name}</td>
              <td>{champ.img}</td>
              <td>{champ.role}</td>
              <td>{champ.origin}</td>
              <td>
                <Link to={`/champ/${champ._id}`}>
                  <MdOutlineLocationSearching />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChampionsPage;
