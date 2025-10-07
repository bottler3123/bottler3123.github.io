import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider, useDispatch } from 'react-redux';
import { Provider as ChakraProvider } from "./components/ui/provider"
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './modules/rootReducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const store = configureStore({
  reducer : rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
