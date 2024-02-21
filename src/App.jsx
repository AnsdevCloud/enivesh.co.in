import { Route, Routes, useLocation } from "react-router-dom"
import TermInsurance from "./pages/TermInsurance"
import UlipPlan from "./pages/UlipPlan"
import GsavingPlan from "./pages/GsavingPlan"
import { useEffect, useState } from "react"
import PopUpModel from "./components/model/PopUpModel"
import NoDataPage from "./pages/NoDataPage"
import UserProfile from "./pages/UserProfile"
import LoginForm from "./forms/LoginForm"
import MainApp from "./pages/MainApp"
import UserDetail from "./userprofile/UserDetail"
import SignUpForm from "./forms/SignUp"
import EditDetail from "./userprofile/EditDetail"
import LifeInsPage from "./inspages/LifeInsPage"
import HomePage from "./pages/HomePage"
import { useDispatch, useSelector } from "react-redux"
import { hadleModelForm } from "./reduxapp/features/userdata/userSlice"
import LumSum from "./components/elements/homeelm/LumSum"
import Reurring from "./components/elements/homeelm/Reurring"
import WholeBenefit from "./components/elements/homeelm/WholeBenefit"
import MainLifePage from "./inspages/MainLifePage"
import ContentBox from "./components/elements/lifeins/ContentBox"


function App() {
  const location = useLocation();
  const [lifeData, setLifeData] = useState();
  useEffect(() => {
    if (location.state === null) {
      return;
    } else {
      setLifeData(location.state)
    }
    return;
  }, [location])

  const [togglemodel, setToggleModel] = useState(false);
  const modelForm = useSelector((state) => state.user.modelForm)
  const dispatch = useDispatch();
  const haddleToggleModel = () => {
    setToggleModel(!togglemodel)
  }

  return (
    <>
      {modelForm && <PopUpModel funcs={() => dispatch(hadleModelForm(false))} />}
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route index element={<HomePage haddleToggleModel={haddleToggleModel} />} />

          <Route path="life" element={<LifeInsPage />}>
            <Route path="detail" element={<MainLifePage />} >
              <Route index element={<ContentBox data={lifeData} />} />
            </Route>
            <Route path="term_insurance" element={<TermInsurance />} />
            <Route path="granteed_saving_plan" element={<GsavingPlan />} >
              <Route index element={<LumSum />} />
              <Route path="reurring-30-pay-out" element={<Reurring />} />
              <Route path="whole-benefit-99-year" element={<WholeBenefit />} />
            </Route>
            <Route path="ulip_plan" element={<UlipPlan />} />
          </Route>

          <Route path="profile" element={<UserProfile />} >
            <Route index element={<UserDetail />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route path="edit" element={<EditDetail />} />
          </Route>

          <Route path="model" >
            <Route path="enivesh_auth_d23_cunsltnow" element={<PopUpModel />} />
          </Route>
          <Route path="*" element={<NoDataPage />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
