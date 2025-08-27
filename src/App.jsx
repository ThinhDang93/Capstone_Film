import { useState } from "react";
import Home from "./Pages/Home/Home";
import { navigateHistory } from "./utils/interceptor";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const App = () => {
  return (
    <HistoryRouter history={navigateHistory}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          <Routes>
            <Route path="" element={<Home />}></Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </HistoryRouter>
  );
};

export default App;
