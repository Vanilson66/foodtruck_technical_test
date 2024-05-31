import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Importing Pages:
import HomePage from './pages/HomePage'
import SearchResults from './pages/SearchResults'

export default () => {

      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
            </BrowserRouter>
      )
}