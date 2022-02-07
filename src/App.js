import React from "react";
import Item from "./components/Item";
import Search from "./components/Search";
import logo from "./images/magnet.png";
import { ToastProvider } from "react-toast-notifications";
import { ResultProvider } from "./Result";
import { SearchProvider } from "./SearchContext";
import { GotOrNotProvider } from "./GotOrNotContext";
import { ErrorProvider } from "./ErrorContext";

function App() {
  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000}>
      <div className="flex flex-col justify-center items-center mt-4">
        <img src={logo} alt="logo" className="mx-auto w-20" />
        <ResultProvider>
          <SearchProvider>
            <GotOrNotProvider>
              <ErrorProvider>
                <Search />
                <Item />
              </ErrorProvider>
            </GotOrNotProvider>
          </SearchProvider>
        </ResultProvider>
      </div>
    </ToastProvider>
  );
}

export default App;
