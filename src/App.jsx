import { Suspense, lazy, useEffect, useState } from "react"
import './App.css'
import { Route, Routes, useLocation } from "react-router-dom"
import { pdfjs } from 'react-pdf';
import { LinearProgress } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { hadleModelForm } from "./reduxapp/features/userdata/userSlice"
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";


const Index = lazy(() => import("./pages/policy/Index"))
const TermInsurance = lazy(() => import("./pages/TermInsurance"))
const UlipPlan = lazy(() => import("./pages/UlipPlan"))
const GsavingPlan = lazy(() => import("./pages/GsavingPlan"))
const PopUpModel = lazy(() => import("./components/model/PopUpModel"))
const NoDataPage = lazy(() => import("./pages/NoDataPage"))
const UserProfile = lazy(() => import("./pages/UserProfile"))
const LoginForm = lazy(() => import("./forms/LoginForm"))
const SignUpForm = lazy(() => import("./forms/SignUp"))
const UserDetail = lazy(() => import("./userprofile/UserDetail"))
const EditDetail = lazy(() => import("./userprofile/EditDetail"))
const LifeInsPage = lazy(() => import("./inspages/LifeInsPage"))
const HomePage = lazy(() => import("./pages/HomePage"))
const LumSum = lazy(() => import("./components/elements/homeelm/LumSum"))
const Reurring = lazy(() => import("./components/elements/homeelm/Reurring"))
const WholeBenefit = lazy(() => import("./components/elements/homeelm/WholeBenefit"))
const PremiumType = lazy(() => import("./components/admin/PortalElements/PremiumType"))
const CoveragePremium = lazy(() => import("./components/admin/PortalElements/CoveragePremium"))
const Features = lazy(() => import("./components/admin/PortalElements/Features"))
const PortalSummary = lazy(() => import("./components/admin/PortalElements/PortalSummary"))
const Upload = lazy(() => import("./components/admin/plansupload/Upload"))
const PlanIndex = lazy(() => import("./components/elements/planelm/PlanIndex"))
const MainPlan = lazy(() => import("./components/elements/planelm/MainPlan"))
const MainLifePage = lazy(() => import("./inspages/MainLifePage"))
const Company = lazy(() => import("./components/admin/PortalElements/Company"))
const Category = lazy(() => import("./components/admin/PortalElements/Category"))
const ContentBox = lazy(() => import("./components/elements/lifeins/ContentBox"))
const MainApp = lazy(() => import("./pages/MainApp"))
const HTMLToPDF = lazy(() => import("./components/elements/planelm/PDFPage"))
const LinkGenerator = lazy(() => import("./components/pdf/LinkGenerator"))
const OTP = lazy(() => import("./components/pdf/OTP"))
const DslMain = lazy(() => import("./components/pdf/DslMain"))
const PDFViewers = lazy(() => import("./components/pdf/PDFViewer"))
const OptionViewPlans = lazy(() => import("./components/elements/planelm/OptionViewPlans"))
const HeathPage = lazy(() => import('./components/elements/healthins/HealthIndex'));
const HealthMain = lazy(() => import("./components/elements/healthins/HealthMain"));
import policda from './jsondata/policy/privacypolicy.json'
import Preview from "./components/blogs/Preview";
import PostContainer from "./components/postcreate/PostContainer";
const Bindex = lazy(() => import("./components/blogs/Bindex"));
const Landing = lazy(() => import("./components/blogs/Landing"));
const Editor = lazy(() => import("./components/blogs/Editor"));
const Show = lazy(() => import("./components/blogs/Show"));



pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


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
  const handle = () => {
    console.log("click");
    return
  }


  return (
    <>

      {modelForm && <Suspense fallback={<LinearProgress />}><PopUpModel funcs={() => dispatch(hadleModelForm(false))} /></Suspense>}
      <Routes>
        <Route path="/" element={<Suspense fallback={<LinearProgress />} ><MainApp /></Suspense>}>
          <Route index element={<Suspense fallback={<LinearProgress />}><HomePage haddleToggleModel={haddleToggleModel} /></Suspense>} />

          <Route path="life" element={<Suspense fallback={<LinearProgress />}><LifeInsPage /></Suspense>}>
            <Route path="detail" element={<Suspense fallback={<LinearProgress />}><MainLifePage /></Suspense>} >
              <Route index element={<Suspense fallback={<LinearProgress />}><ContentBox data={lifeData} /></Suspense>} />
            </Route>
            <Route path="term_insurance" element={<Suspense fallback={<LinearProgress />}><TermInsurance /></Suspense>} />
            <Route path="granteed_saving_plan" element={<Suspense fallback={<LinearProgress />}><GsavingPlan /></Suspense>} >
              <Route index element={<Suspense fallback={<LinearProgress />}><LumSum /></Suspense>} />
              <Route path="reurring-30-pay-out" element={<Suspense fallback={<LinearProgress />}><Reurring /></Suspense>} />
              <Route path="whole-benefit-99-year" element={<Suspense fallback={<LinearProgress />}><WholeBenefit /></Suspense>} />
            </Route>
            <Route path="ulip_plan" element={<Suspense fallback={<LinearProgress />}><UlipPlan /></Suspense>} />
          </Route>
          <Route path="health" element={<Suspense fallback={<LinearProgress />}><HealthMain /></Suspense>}>
            <Route index element={<Suspense fallback={<LinearProgress />}><HeathPage /></Suspense>} />
            <Route path=":id" element={<h1> iD Health</h1>} />
          </Route>

          <Route path="profile" element={<Suspense fallback={<LinearProgress />}><UserProfile /></Suspense>} >
            <Route index element={<Suspense fallback={<LinearProgress />}><UserDetail /></Suspense>} />
            <Route path="login" element={<Suspense fallback={<LinearProgress />}><LoginForm /></Suspense>} />
            <Route path="signup" element={<Suspense fallback={<LinearProgress />}><SignUpForm /></Suspense>} />
            <Route path="edit" element={<Suspense fallback={<LinearProgress />}><EditDetail /></Suspense>} />
          </Route>
          <Route path="admin" element={<Suspense fallback={<LinearProgress />}><Upload /></Suspense>}>
            <Route index element={<Suspense fallback={<LinearProgress />}><Category /></Suspense>} />
            <Route path="1" element={<Suspense fallback={<LinearProgress />}><Company /></Suspense>} />
            <Route path="2" element={<Suspense fallback={<LinearProgress />}><PremiumType /></Suspense>} />
            <Route path="3" element={<Suspense fallback={<LinearProgress />}><CoveragePremium /></Suspense>} />
            <Route path="4" element={<Suspense fallback={<LinearProgress />}><Features /></Suspense>} />
            <Route path="5" element={<Suspense fallback={<LinearProgress />}><PortalSummary /></Suspense>} />


          </Route>

          <Route path="model" >
            <Route path="enivesh_auth_d23_cunsltnow" element={<Suspense fallback={<LinearProgress />}><PopUpModel /></Suspense>} />
          </Route>


          <Route path="insurance" element={<Suspense fallback={<LinearProgress />}><MainPlan /></Suspense>} >
            <Route index element={<Suspense fallback={<LinearProgress />}><PlanIndex /></Suspense>} />
            <Route path="plans" element={<Suspense fallback={<LinearProgress />}><OptionViewPlans /></Suspense>} />


          </Route>

          <Route path="pdf" element={<Suspense fallback={<LinearProgress />}><HTMLToPDF /></Suspense>} />
          <Route path="link_generator" element={<Suspense fallback={<LinearProgress />}><LinkGenerator /></Suspense>} />
          <Route path="dacl" element={<Suspense fallback={<LinearProgress />}><DslMain /></Suspense>}>
            <Route index element={<Suspense fallback={<LinearProgress />}><LinkGenerator /></Suspense>} />
            <Route path="otp" element={<Suspense fallback={<LinearProgress />}><OTP /></Suspense>} />
          </Route>
          <Route path="pdfdacldoc" element={<Suspense fallback={<LinearProgress />}><PDFViewers /></Suspense>} />

          {/* Privacy Policy Routes */}
          <Route path="privacy" element={<Suspense fallback={<LinearProgress />}><PrivacyPolicy /></Suspense>}>
            <Route index element={<Suspense fallback={<LinearProgress />}><ContentBox data={lifeData} /></Suspense>} />


          </Route>

          {/* // blogs routes */}
          <Route path="blogs" element={<Suspense><Bindex /></Suspense>}>
            <Route index element={<Suspense><Landing /></Suspense>} />
            <Route path="create" element={<Suspense><Editor /></Suspense>} />
            <Route path=":bid" element={<Suspense><Show /></Suspense>} />
            <Route path="preview" element={<Suspense><Preview /></Suspense>} />

          </Route>
          <Route path="/ai_post_gen" element={<Suspense fallback={<LinearProgress />}><PostContainer /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<LinearProgress />}><NoDataPage /></Suspense>} />

        </Route>
      </Routes>


    </>
  )
}

export default App
