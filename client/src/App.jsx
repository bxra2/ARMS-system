import "./App.css";
// Modules
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import Sidebar from "./layout/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import TopBar from "./components/TopBar/TopBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Phase1 from "./components/BITPhases/Phase1";
import Phase2 from "./components/BITPhases/Phase2";
import Phase3 from "./components/BITPhases/Phase3";
import Phase4 from "./components/BITPhases/Phase4";
import Phase5 from "./components/BITPhases/Phase5";

import BoardofStudies from "./pages/Phase4/BoardofStudies";
import Assessors from "./pages/Phase4/Assessors";
import CurriculumReviewProposal from "./pages/Phase4/CurriculumReviewProposal";
import DokumenSemakan from "./pages/Phase4/DokumenSemakan";
import ProgrammeCurriculum from "./pages/Phase4/ProgrammeCurriculum";
import SelfSWOT from "./pages/Phase4/SelfSWOT";
import Survey from "./pages/Phase4/Survey";
import Bechmarking from "./pages/Phase4/Bechmarking";

// Pages
import About_us_page from "./pages/About_us_page";
import TCR from "./pages/TCR";
import AcademicProgram from "./pages/AcademicProgram";
import AccountPage from "./pages/AccountPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BIT from "./pages/BIT";
import BCS from "./pages/BCS";

function App() {
  return (
    <>
      <div className="app">
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="" element={<PrivateRoute />}>
            <Route
              path="/*"
              element={
                <>
                  <Sidebar />
                  <div className="main-content texture">
                    <TopBar />
                    <Routes>
                      <Route path="/home" element={<Main />} />
                      <Route index element={<AcademicProgram />} />
                      <Route path="bcs" element={<BCS />} />
                      <Route path="bit">
                        <Route index element={<BIT />} />
                        <Route path="phase1" element={<Phase1 />} />
                        <Route path="phase2" element={<Phase2 />} />
                        <Route path="phase3" element={<Phase3 />} />
                        <Route path="phase4">
                          <Route index element={<Phase4 />} />
                          <Route path="s1" element={<BoardofStudies />} />
                          <Route path="s2" element={<Assessors />} />
                          <Route path="s3" element={<Survey />} />
                          <Route path="s4" element={<Bechmarking />} />
                          <Route path="s5" element={<ProgrammeCurriculum />} />
                          <Route
                            path="s6"
                            element={<SelfSWOT />}
                          />
                          <Route path="s7" element={<CurriculumReviewProposal />} />
                          <Route path="s8" element={<DokumenSemakan />} />
                        </Route>
                        <Route path="phase5" element={<Phase5 />} />
                      </Route>
                      <Route path="/TCR" element={<TCR />} />
                      <Route path="/account" element={<AccountPage />} />
                      <Route path="/about_us" element={<About_us_page />} />
                      <Route path="*" element={<h1>Page Not Found</h1>} />
                    </Routes>
                  </div>
                </>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
