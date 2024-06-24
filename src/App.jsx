import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./pages/layout/DefaultLayout"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import PostShow from "./pages/PostShow"
import PostEdit from "./pages/PostEdit"
import PostCreate from "./pages/PostCreate"
import { GlobalProvider } from "./contexts/GlobalContext"

function App() {
  return (
    <BrowserRouter>

      <GlobalProvider>

        <Routes>

          <Route path="/" element={<DefaultLayout />}>

            {/* Home */}
            <Route index element={<Home />} />

            <Route path="posts" >

              {/* Index */}
              <Route index element={<Posts />} />
              <Route path=":slug">

                {/* Show */}
                <Route index element={<PostShow />} />

                {/* Edit */}
                <Route path="edit" element={<PostEdit />} />

              </Route>

              {/* Create */}
              <Route path="create" element={<PostCreate />} />

            </Route>

          </Route >

        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
