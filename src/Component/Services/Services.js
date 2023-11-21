import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom web application development using modern technologies.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Building cross-platform mobile apps for iOS and Android.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing user interfaces and experiences.",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Strategies to boost online presence, SEO, and social media campaigns.",
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      description:
        "Creating scalable and secure e-commerce platforms for online businesses.",
    },
    {
      id: 6,
      title: "Cloud Computing Services",
      description:
        "Implementing cloud solutions for increased efficiency and scalability.",
    },
    {
      id: 7,
      title: "Data Analytics",
      description:
        "Harnessing the power of data to provide actionable insights for business growth.",
    },
    {
      id: 8,
      title: "Cybersecurity Consulting",
      description:
        "Ensuring the security of digital assets and protecting against cyber threats.",
    },
  ];

  return (
    <div className="services-page-container">
      <h1 className="text-center">Our Services</h1>
      {services.map((service) => (
        <div key={service.id} className="service">
          <h2 className="service-title">{service.title}</h2>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
