import { Link } from "react-router-dom";
import React from 'react';
import Carousel from "../components/common/Carousel";
import Footer from "../components/layout/Footer";
import { useSelector } from "react-redux";
import banner1 from "/banner-1.png";
import banner2 from "/banner-2.jpeg";
import banner3 from "/banner-3.jpeg";

const Home = () => {
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
const user = useSelector((state) => state.auth.user); 
const slides = [banner1, banner2, banner3];

return (
    <div className="min-h-screen bg-base-100 text-base-content">
        <div className="hero min-h-[70vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse animate-slide-in-right">
                <div className="w-full lg:w-1/2">
                    <Carousel slides={slides} />
                </div>
            <div className="w-full lg:w-1/2 animate-zoom-in">
                {isLoggedIn ? (
                    <>
                    <h1 className="text-3xl font-bold">Welcome back,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            {user?.name || "User"}!
                        </span>
                    </h1>
                    <p className="py-6">
                        Thank you for using my react website. I hope you had a great experience here.
                        This website provides a robust and user-friendly platform for testing JSON Web Token (JWT).
                    </p>
                    </>
                ) : (
                    <>
                    <h1 className="text-3xl font-bold">Signup to{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            Continue:
                        </span>
                    </h1>
                    <p className="py-6">
                        This website provides a robust and user-friendly platform for testing JSON Web Token (JWT).
                        It allows developers to create an account, login, and test JWTs with ease.
                    </p>
                    <Link to={"/signup"}
                        className="text-white no bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
                        Signup
                    </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;