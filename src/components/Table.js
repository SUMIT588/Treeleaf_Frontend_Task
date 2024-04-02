import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { remove } from "../store/postSlice";

// Importing icons

function Table({  setValue, setIsUpdate }) {
  const userData = useSelector((state) => state.userData);
  const heading = [
    "SN",
    "Name",
    "Phone Number",
    "Date of Birth",
    "Country",
    "District",
    "City",
    "Province",
    "Email",
  ];

  const dispatch = useDispatch();
  const perPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(userData.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentPageData = userData.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleEdit = (userId) => {
    const editData = userData.filter((data) => userId === data.userId);
    const data = editData[0];
    setValue(data);
    setIsUpdate(true);
  };

  const handleDelete = (userId) => {
    if (userId) {
      dispatch(remove(userId));
    }
  };

  return (
    <div className="overflow-x-auto mt-5 mb-5">
      {userData.length !== 0 && (
        <div className="shadow border-b border-gray-200 sm:rounded-lg">
          <table className="w-full table-auto divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {heading.map((data, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {data}
                  </th>
                ))}
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-sm">
              {currentPageData.map((item, index) => (
                <tr key={item?.userId}>
                  <td className="px-2 py-4 whitespace-nowrap">
                    {startIndex + index + 1}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">{item?.name}</td>
                  <td className="px-2 py-4 whitespace-nowrap">
                    {item?.phoneNumber}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">
                    {item?.dateOfBirth}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">
                    {item?.country}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">
                    {item?.district}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">{item?.city}</td>
                  <td className="px-2 py-4 whitespace-nowrap">
                    {item?.province}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">{item?.email}</td>
                  <td className="px-2 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit(item?.userId)}
                      className="mr-2 text-indigo-600 hover:text-indigo-900"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item?.userId)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                    <button>
                      
                    <Link to= {`/viewDetails/${item?.userId}`}>
                        <EyeIcon className="w-5 h-5" />
                    </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {totalPages > 1 && (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Previous
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="ml-3 px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                  </p>
                </div>
                <div>
                  <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                  >
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <span className="border-t border-gray-200"></span>
                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Table;
