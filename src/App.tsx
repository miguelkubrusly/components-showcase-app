import Accordion from "./components/Accordion";

function App() {
  return (
    <div>
      <Accordion
        items={[
          {
            id: Math.floor(Math.random() * 10 ^ 9),
            label: "This is a Accordion Label",
            content:
              "And this is a very repetitive content. And this is a very repetitive content. And this is a very repetitive content. And this is a very repetitive content. ",
          },
          {
            id: Math.floor(Math.random() * 10 ^ 9),
            label: "This is a Accordion Label",
            content:
              "And this is a very repetitive content. And this is a very repetitive content. And this is a very repetitive content. And this is a very repetitive content. ",
          },
          {
            id: Math.floor(Math.random() * 10 ^ 9),
            label: "This is a Accordion Label",
            content:
              "And this is a very repetitive content. And this is a very repetitive content. And this is a very repetitive content. And this is a very repetitive content. ",
          },
        ]}
      />
    </div>
  );
}

export default App;
