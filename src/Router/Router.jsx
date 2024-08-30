import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Footer from "../components/Footer";

import Dashboard from "../components/DashboardComponent/Dashboard";
import About from "../pages/About";
import Navbars from "../components/Navbars";
import Transporters from "../pages/Transporters";
import FullService from "../pages/FullService";
import FreightForworders from "../pages/FreightForworders";
import Pricing from "../pages/Pricing";
import DashboardLayout from "../dasboard/DashboardLayout";
import SearchLoads from "../components/DashboardComponent/SearchLoads";
import MyRequest from "../components/DashboardComponent/MyRequest";
import PostaLoad from "../components/DashboardComponent/PostaLoad";
import PostTruck from "../components/DashboardComponent/PostTruck";
import MyTrucks from "../components/DashboardComponent/MyTrcuk";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbars />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbars />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/transporters"
            element={
              <>
                <Navbars />
                <Transporters />
                <Footer />
              </>
            }
          />
          <Route
            path="/full-sevice-broker"
            element={
              <>
                <Navbars />
                <FullService />
                <Footer />
              </>
            }
          />
          <Route
            path="/freight-forworders"
            element={
              <>
                <Navbars />
                <FreightForworders />
                <Footer />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Navbars />
                <Pricing />
                <Footer />
              </>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard/>} />
            <Route path="search-loads" element={<SearchLoads/>} />
            <Route path="my-request" element={<MyRequest/>} />
            <Route path="post-a-load" element={<PostaLoad/>} />
            <Route path="my-trucks" element={<MyTrucks/>} />
            <Route path="post-a-truck" element={<PostTruck/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
