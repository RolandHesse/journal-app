import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer.js";
import "./App.css";
// import "./index.css";

const initialEntries = [
  {
    motto: "A Day of Adventure",
    notes:
      "Today, I embarked on a spontaneous road trip with friends. We explored hidden trails, laughed until our stomachs hurt, and discovered a charming little diner for lunch. Life is all about these unexpected moments.",
    date: "2023-09-08",
  },
  {
    motto: "Quiet Reflection",
    notes:
      "Spent the afternoon in the park, sitting by the pond, and reading my favorite book. The gentle breeze and the rustling leaves were the perfect backdrop for some much-needed solitude.",
    date: "2023-09-07",
  },
  {
    motto: "Unexpected Kindness",
    notes:
      "A stranger in the coffee shop paid for my morning latte. It's amazing how a small act of kindness can brighten your entire day. I'm inspired to pay it forward.",
    date: "2023-09-06",
  },
];

function App() {
  return (
    <>
      <Header />
      <Main entries={initialEntries} />
      <Footer />
    </>
  );
}

export default App;
