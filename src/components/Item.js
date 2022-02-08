import React, { useContext, useState } from "react";
import SingleItem from "./SingleItem";
import { ErrorContext } from "../ErrorContext";
import { SearchContext } from "../SearchContext";
import { GotOrNotContext } from "../GotOrNotContext";
import { ResultContext } from "../Result";
import Error from "./Error";
import Empty from "./Empty";
import Searching from "./Searching";
import Welcome from "./Welcome";
import ReactPaginate from "react-paginate";

const Item = () => {
  // eslint-disable-next-line
  const [error, setError] = useContext(ErrorContext);
  // eslint-disable-next-line
  const [search, setSearch] = useContext(SearchContext);
  // eslint-disable-next-line
  const [gotOrNot, setGotOrNot] = useContext(GotOrNotContext);
  // eslint-disable-next-line
  const [magneticResult, setMagneticResult] = useContext(ResultContext);
  const [sort, setSort] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const contentPerPage = 10;
  const pagesVisited = pageNumber * contentPerPage;
  const pageCount = Math.ceil(magneticResult.length / contentPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayContent = magneticResult
    .slice(pagesVisited, pagesVisited + contentPerPage)
    .map((single, i) => {
      return (
        <SingleItem
          key={i}
          age={single.age}
          leecher={single.leecher}
          magnet={single.magnet}
          name={single.name}
          seeder={single.seeder}
          site={single.site}
          size={single.size}
          type={single.type}
          url={single.url}
        />
      );
    });

  const sortBySize = () => {
    if (sort === true) {
      const sorted = magneticResult.sort((a, b) => {
        return b.seeder - a.seeder;
      });
      setMagneticResult(sorted);
    } else {
      const sorted = magneticResult.sort((a, b) => {
        return a.seeder - b.seeder;
      });
      setMagneticResult(sorted);
    }
  };

  const sortfiles = () => {
    setSort(!sort);
    sortBySize();
  };

  if (error === true) {
    return <Error />;
  } else if (gotOrNot === true && magneticResult.length >= 0) {
    return (
      <div className="flex flex-col m-5 w-screen md:w-auto">
        <div className="flex items-end self-end ml-2">
          <button
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={sortfiles}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
            <span>Sort Based On Seeder</span>
          </button>
        </div>
        {displayContent}
        <ReactPaginate
          previousLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          }
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          }
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationContainer"}
          disabledClassName={"previousBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          activeClassName={"activeBtn"}
        />
      </div>
    );
  } else if (gotOrNot === false && search === true) {
    return <Searching />;
  } else if (gotOrNot === true && magneticResult.length === 0) {
    return <Empty />;
  } else if (gotOrNot === false && search === false) {
    return <Welcome />;
  } else {
    return <Welcome />;
  }
};

export default Item;
