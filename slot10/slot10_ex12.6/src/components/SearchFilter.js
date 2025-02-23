import React, { useState } from "react";

const SearchFilter = () => {
  const [query, setQuery] = useState("");
  const items = ["React", "NodeJs", "MongoDB", "Express", "Angular", "VueJs"];
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const styles = {
    containerSearch: {
      width: "300px",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    searchContainer: {
      marginBottom: "20px",
    },
    label: {
      fontSize: "16px",
      marginRight: "10px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      width: "200px",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      padding: "5px 0",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.containerSearch}>
      <div style={styles.searchContainer}>
        <label style={styles.label}>Search:</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
      </div>
      <ul style={styles.list}>
        {filteredItems.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
