import React from "react";
import { useToasts } from "react-toast-notifications";
import * as clipboard from "clipboard-polyfill/text";

const SingleItem = ({
  age,
  leecher,
  magnet,
  name,
  seeder,
  site,
  size,
  type,
  url,
  key,
}) => {
  const { addToast } = useToasts();
  return (
    <div
      className="m-8 relative block p-6 overflow-hidden border border-gray-100 rounded-lg"
      key={key}
    >
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          <h5 className="text-xl font-bold text-gray-900">{name}</h5>
          <p className="mt-1 text-xs font-medium text-gray-600">{site}</p>
        </div>
      </div>

      <dl className="flex mt-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">{age}</dt>
          <dd className="text-xs text-gray-500">Age</dd>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-gray-600">{seeder}</dt>
          <dd className="text-xs text-gray-500">Seeders</dd>
        </div>
        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-gray-600">{leecher}</dt>
          <dd className="text-xs text-gray-500">Leechers</dd>
        </div>
        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-gray-600">{size}</dt>
          <dd className="text-xs text-gray-500">Size</dd>
        </div>
        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-gray-600">{type}</dt>
          <dd className="text-xs text-gray-500">Type</dd>
        </div>
      </dl>

      <dl className="flex mt-6 place-content-between">
        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                clipboard.writeText(magnet).then(
                  function () {
                    addToast("Copied..!!", { appearance: "success" });
                  },
                  function () {
                    addToast("Sorry Some Error Occured..!!", {
                      appearance: "warning",
                    });
                  }
                );
                // navigator.clipboard.writeText(magnet);
                // addToast("Copied..!!", { appearance: "success" });
              }}
            >
              Copy Magnetic Link
            </span>
            <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
            <a href={magnet} target="_blank" rel="noopener noreferrer">
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
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
            <a href={url} target="_blank" rel="noopener noreferrer">
              URL
            </a>
            <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </dl>
    </div>
  );
};

export default SingleItem;
