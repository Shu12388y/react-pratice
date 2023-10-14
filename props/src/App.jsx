import Card from "./components/card";
function App() {
  const obj={
    username:"shubham",
    text:"vist me"
  }
  return (
    <>
      <div className="flex items-center shrink-0 p-6">
        <Card myObj={obj} />
      </div>
    </>
  );
}

export default App;
