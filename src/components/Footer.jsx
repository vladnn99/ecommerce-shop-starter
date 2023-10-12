import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <p className="text-white text-center">
          Copyright &copy; Ecommerce Shop {date}. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
