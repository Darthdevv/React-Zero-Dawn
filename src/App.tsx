import "./App.css";
import ProfileCards from "./components/ProfileCards";

const profiles = [
  {
    name: "Salem Maza",
    role: "Experienced leader in social impact",
    description:
      "Working at the intersection of innovation and sustainable finance.",
    image: "/images/salem.jpg",
    socials: { linkedin: "#", x: "#" },
  },
  {
    name: "Ibrahim Almas",
    role: "Dynamic professional",
    description:
      "Building and scaling ventures with a passion for positive change.",
    image: "/images/ibrahim.jpg",
    socials: { linkedin: "#", x: "#" },
  },
  // ... add the rest
];


function App() {
  return (
    <>
      {/* <Home/> */}
      <ProfileCards profiles={profiles} />
    </>
  );
}

export default App;
