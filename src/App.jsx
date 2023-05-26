import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ContentContainer from './Components/Content/ContentContainer.jsx'
import DialogsContainer from './Components/Dialogs/DialogsContainer.jsx'
import HeaderContainer from './Components/Header/HeaderContainer.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Friends from './Components/Friends/Friends.jsx'
import News from './Components/News/News.jsx'
import Music from './Components/Music/Music.jsx'
import Settings from './Components/Settings/Settings'
import UsersContainer from './Components/Users/UsersContainer'
import Login from './Components/Login/login.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/profile/:id" element={<ContentContainer />}></Route>
            <Route exact path="/profile" element={<ContentContainer />}></Route>
            <Route exact path="/messages" element={<DialogsContainer />} />
            <Route exact path="/friends" element={<Friends />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/music" element={<Music />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/users" element={<UsersContainer />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
