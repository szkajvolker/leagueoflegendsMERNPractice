import React, { useState } from "react";

const HomePage = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [role, setRole] = useState("");
  const [origin, setOrigin] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      img,
      role,
      origin,
    };
    try {
      setLoading(true);
      const response = await fetch("http://localhost:4444/api/champs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to create champion");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          name="name"
          id="name"
        />
        <label htmlFor="img">Img: </label>
        <input
          onChange={(e) => {
            setImg(e.target.value);
          }}
          value={img}
          type="text"
          placeholder="Img"
          name="img"
          id="img"
        />
        <label htmlFor="role">Role: </label>
        <input
          onChange={(e) => setRole(e.target.value)}
          value={role}
          type="text"
          placeholder="Role"
          name="role"
          id="role"
        />
        <label htmlFor="origin">Origin: </label>
        <input
          onChange={(e) => setOrigin(e.target.value)}
          value={origin}
          type="text"
          placeholder="Origin"
          name="origin"
          id="origin"
        />
        <button disabled={loading} type="submit">
          {loading ? "loading..." : "Add new champ"}
        </button>
      </form>
    </div>
  );
};

export default HomePage;
