import React, { useState } from "react";
import "style.css";

const profiles = [
  { name: "Sayali Rathod", role: "Frontend Developer", image: "img5.jpg" },
  { name: "Nilesh Gudhe", role: "Product and Technology Evangelist", image: "img2.jpg" },
  { name: "Avani Shroff", role: "Director-Operations", image: "image/img3.jpg" },
  { name: "Sudeep Purohit", role: "Partner Manager", image: "image/img4.jpg" },
];

const App = () => {
  const [query, setQuery] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);

    // Filter profiles based on query
    const results = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchQuery) ||
      profile.role.toLowerCase().includes(searchQuery)
    );

    setFilteredProfiles(results);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <nav>
          <img src="logo.jpg" className="logo" alt="Logo" />
          <div>
            <button>Sign In</button>
          </div>
        </nav>
        <div className="header-text">
          <h1>Explore Profiles and Locations</h1>
          <h3>Navigate profiles with ease and explore their geographic connections.</h3>
        </div>
        <div className="Search">
          <input
            type="text"
            className="text"
            placeholder="Search here"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </header>

      {/* Profiles Section */}
      <main>
        <div className="profile-grid">
          {filteredProfiles.map((profile, index) => (
            <div className="profile-card" key={index}>
              <img src={profile.image} alt={`${profile.name}'s Profile`} />
              <h3>{profile.name}</h3>
              <p>{profile.role}</p>
              <button className="summary-button">View on Map</button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Explore Profiles. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};


