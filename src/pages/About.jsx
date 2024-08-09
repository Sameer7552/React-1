import React from "react";
import Content from "../components/Content";

const About = () => (
  <Content
    title="About Us"
    content="Here we’re committed to crafting modern and engaging web experiences using the latest technologies. Our expertise in React JS allows us to create highly interactive websites that are both functional and visually appealing."
    heading="My Approach"
    values={[
      { title: 'Hooks', description: 'I implement dark mode functionality to enhance user experience and accessibility. My approach uses React hooks to toggle between light and dark themes, providing a personalized and comfortable viewing experience.' },
      { title: 'Reusable Components', description: 'My website features reusable components like the Header and Footer, which streamline development and ensure a consistent look and feel across all pages.' },
      { title: 'Props Drilling', description: 'I utilize a Content component to manage and pass data efficiently throughout our application. This ensures that content is dynamically rendered and up-to-date.' },
      { title: 'Routing', description: 'My site includes intuitive navigation with React Router, offering seamless transitions between our Home, About, and Contact pages. This structure helps users easily explore and interact with our content.' }
    ]}
  />
);

export default About;
