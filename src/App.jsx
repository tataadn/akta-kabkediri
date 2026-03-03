import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Requirement from "./components/requirement";
import DownloadSection from "./components/downloadsection";
// import Validation40Days from "./components/validation";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {/* <Validation40Days /> */}
      <Requirement />
      <DownloadSection />
      <Footer />
    </div>
  );
}
