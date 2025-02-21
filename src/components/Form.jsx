import { useEffect, useState } from "react";

const Form = ({ setValue, value, book_id, setBookId }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const addBook = () => {
    let new_book = {
      name: name,
      author: author,
      year: year,
    };
    let current_data = [...value];
    current_data.push(new_book);
    setValue(current_data);

    setName("");
    setAuthor("");
    setYear("");
  };
  useEffect(() => {
    if (book_id !== null) {
      setName(value[book_id].name);
      setAuthor(value[book_id].author);
      setYear(value[book_id].year);
    }
  }, [book_id]);

  const editBook = () => {
    let current_data = [...value];
    let new_book = {
      name: name,
      author: author,
      year: year,
    };

    current_data.splice(book_id, 1, new_book);
    setValue(current_data);
    setName("");
    setAuthor("");
    setYear("");
    setBookId(null);
  };

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="name">Kitob nomi</label>
        <input
          className="border py-1 px-2 rounded-2xl my-0.5"
          name="name"
          type="text"
          placeholder="name"
          onInput={(val) => {
            setName(val?.target?.value);
          }}
          value={name}
        />
      </div>{" "}
      <div className="flex flex-col">
        <label htmlFor="author">Muallifni nomi</label>
        <input
          className="border py-1 px-2 rounded-2xl my-0.5"
          name="author"
          type="text"
          placeholder="author"
          onInput={(val) => {
            setAuthor(val?.target?.value);
          }}
          value={author}
        />
      </div>{" "}
      <div className="flex flex-col">
        <label htmlFor="author">Kitob nomi</label>
        <input
          className="border py-1 px-2 rounded-2xl my-0.5"
          name="author"
          type="number"
          placeholder="year"
          onInput={(val) => {
            setYear(val?.target?.value);
          }}
          value={year}
        />
      </div>
      <div className="flex justify-center mt-5">
        {book_id == null ? (
          <button
            onClick={() => {
              addBook();
            }}
            className="border rounded-2xl py-2 text-white bg-blue-600  px-4 active:bg-blue-400 "
          >
            {"Qoshish"}
          </button>
        ) : (
          <button
            onClick={() => {
              editBook();
            }}
            className="border rounded-2xl py-2 text-white bg-blue-600  px-4 active:bg-blue-400 "
          >
            {"Tahrirlash"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
