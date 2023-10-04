import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "../redux/sliceLanguage"

export default configureStore({
  reducer: {
    language: languageReducer,
  },
})