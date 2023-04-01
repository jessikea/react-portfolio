import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    if (currentPage === "about") {
      return <About />;
    }
    if (currentPage === "portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
    if (currentPage === "resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
