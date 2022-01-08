import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import AddEmployeeScreen from './screens/AddEmployeeScreen'
import EmployeeListScreen from './screens/EmployeeListScreen'

function App() {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
            <Route path='/register' element={<AddEmployeeScreen></AddEmployeeScreen>}></Route>
            <Route path='/list' element={<EmployeeListScreen></EmployeeListScreen>}></Route>


          </Routes>
        </Container>
      </main>

      <Footer></Footer>
    </Router>

  );
}

export default App;



r