import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./pages/layout/DefaultLayout"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import PostShow from "./pages/PostShow"
import PostEdit from "./pages/PostEdit"
import PostCreate from "./pages/PostCreate"
import { GlobalProvider } from "./contexts/GlobalContext"
import AuthPage from "./middlewares/AuthPage"
import { AuthProvider } from "./contexts/AuthContext"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>

          <Routes>

            {/* Rotte pubbliche */}
            <Route path="/" element={<DefaultLayout />}>

              {/* Home */}
              <Route index element={<Home />} />

              <Route path="posts" >

                {/* Index */}
                <Route index element={<Posts />} />

                <Route path=":slug">

                  {/* Show */}
                  <Route index element={<PostShow />} />

                </Route>

              </Route>

              {/* Rotta Login */}
              <Route path="login" element={<Login />} />

            </Route >

            {/* Rotte private */}
            <Route path="/" element={<AuthPage><DefaultLayout /></AuthPage>}>
              <Route path="posts" >

                <Route path=":slug">

                  {/* Edit */}
                  <Route path="edit" element={<PostEdit />} />

                </Route>

                {/* Create */}
                <Route path="create" element={<PostCreate />} />

              </Route>
            </Route>

          </Routes>

        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
