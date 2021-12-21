import React from "react"
import { Header } from "./components/Header"
import { FeedbackList } from "./components/FeedbackList"
import { FeedbackStats } from "./components/FeedbackStats"
import { AboutPage } from "./pages/AboutPage"
import { FeedbackForm } from "./components/FeedbackForm"
import { AboutIconLink } from "./components/AboutIconLink"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { Post } from "./components/Post"
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {
  return (
    <>
      <FeedbackProvider>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              ></Route>

              <Route path="/about" element={<AboutPage />} />
              <Route path="/post/*" element={<Post />} />
            </Routes>

            {/* <Card>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </Card> */}

            <AboutIconLink />
          </div>
        </BrowserRouter>
      </FeedbackProvider>
    </>
  )
}

export default App
