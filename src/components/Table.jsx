const Table = ({ arr, setArr, setBookId }) => {
  const deleteBook = (i) => {
    let current_data = [...arr];
    current_data.splice(i, 1);
    setArr(current_data);
  };
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="border">Kitob nomi </th>
          <th className="border">Kitob muallifi</th>
          <th className="border">Kitob chop etilgan yili</th>
          <th className="border">Amallar</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((item, index) => (
          <tr
            className="items-center border-b hover:bg-gray-100 transition duration-200 "
            key={index}
          >
            <td className=" border px-4 py-2 text-center">{item?.name}</td>
            <td className="border px-4 py-2 text-center">{item?.author}</td>
            <td className="border px-4 py-2 text-center">{item?.year}</td>
            <td className="border">
              <td className="flex gap-2">
                {" "}
                <button
                  onClick={() => {
                    setBookId(index);
                  }}
                  className="py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 transition"
                >
                  Tahrirlash
                </button>
                <button
                  className="py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 active:bg-red-700 transition"
                  onClick={() => {
                    deleteBook(index);
                  }}
                >
                  O`chirish
                </button>
              </td>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
