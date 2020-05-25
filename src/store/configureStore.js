import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducer';

export default function() {
  return configureStore({
    reducer: rootReducer,
  });
}
