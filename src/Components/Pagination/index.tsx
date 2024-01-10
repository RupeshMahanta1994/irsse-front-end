import { useState } from "react";
import "./style.css";

type Props = {
  data: any;
  columns: any;
  title?: string;
};

const index = (props: Props) => {
  const [value, setValue] = useState(10);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = value;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = props.data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(props.data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  return (
    <div className="pagination w-full min-h-[400px] flex items-start justify-center relative mt-10 mb-20">
      <div>
        <div className="px-2 sm:px-0 my-10">
          <h1 className="text-red-20 font-bold text-2xl">{props.title}</h1>
          <div className="w-[20%] md:w-[8%]  bg-red-20 h-[2px]"></div>
        </div>
        <div className="flex items-center justify-between mb-5">
          <div>
            Shwo{" "}
            <span>
              <select
                className="px-3 py-1"
                name=""
                id=""
                onChange={(e) => setValue(Number(e.target.value))}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </span>{" "}
            entries
          </div>
          <div>
            Search{" "}
            <input
              className="px-3 py-1"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="w-[100%] overflow-x-scroll">
          {
            <table className={` md:w-[1200px]`}>
              <thead>
                <tr>
                  {props.columns.map((head: any) => (
                    <>
                      <td>{head.header}</td>
                    </>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records
                  .filter((item: any) => {
                    return search.toLowerCase() == ""
                      ? item
                      : item.subject.toLowerCase().includes(search);
                  })
                  .map((item: any) => (
                    <>
                      <tr>
                        {props.columns.map((col: any) => (
                          <>
                            <td>
                              <p className="text-center">{item[col.field]}</p>
                            </td>
                          </>
                        ))}
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          }
        </div>
      </div>
      <div className="absolute -bottom-10 flex gap-5 font-roboto font-medium">
        <ul className="flex gap-5">
          <li
            className="cursor-pointer"
            onClick={() =>
              currentPage == 1
                ? setCurrentPage(numbers.length)
                : setCurrentPage(currentPage - 1)
            }
          >
            <button className="bg-red-20 text-gray-50 px-4 py-1 rounded-md">
              Prev
            </button>
          </li>

          {numbers.map((item: any, index: number) => (
            <li className="cursor-pointer">
              <button
                className={` px-4 py-1 rounded-md ${
                  currentPage == index + 1 ? "bg-red-20 text-gray-50" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {item}
              </button>
            </li>
          ))}

          <li
            className="cursor-pointer"
            onClick={() =>
              currentPage == numbers.length
                ? setCurrentPage(1)
                : setCurrentPage(currentPage + 1)
            }
          >
            <button className="bg-red-20 text-gray-50 px-4 py-1 rounded-md">
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
