import { useEffect, useState } from "react";
import "./App.jsx";
import Table from "./components/Table.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [data, setdata] = useState([
    {
      name: "Sariq devni menib",
      author: "Xudoyberdi Tuxtaboyev",
      year: 2023,
    },
  ]);
  const [book_id, setBookId] = useState(null);
  useEffect(() => {}, []);

  return (
    <div className="container flex flex-col gap-y-5">
      <Form
        setValue={setdata}
        value={data}
        book_id={book_id}
        setBookId={setBookId}
      />
      <Table arr={data} setArr={setdata} setBookId={setBookId} />
    </div>
  );
}

export default App;
