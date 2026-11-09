import "./home.css"
import logo from "./../assets/logo-transparent.png" 
import ExamSelector from "../components/examSelector/ExamSelector"
import BranchSelector from "../components/branchSelector/BranchSelector"
import GradesForm from "../components/gradesForm/GradesForm"
import ResultSelector from "../components/resultSelector/ResultSelector"

const Home = () => {
  return (
    <>
        {/* -- container -- */}
        <div className="container">
            {/* -- hero-backdrop -- */}
            <div className="hero-backdrop">
                <div className="blue-shadow"></div>
                <div className="red-shadow"></div>
            </div>
            {/* -- content -- */}
            <div className="content">
                {/* -- logo -- */}
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                {/* -- hero-header -- */}
                <div className="hero-header">
                    <div className="hero-title"> حاسبة نقطة الباك </div>
                    <div className="hero-subtitle"> الجهوي ولا الوطني؟ دخل النقط وشوف النتيجة </div>
                </div>
                {/* -- ExamSelector -- */}
                <ExamSelector />
                {/* -- BranchSelector -- */}
                <BranchSelector />
                {/* -- GradesForm -- */}
                <GradesForm />
                {/* -- ResultSelector -- */}
                <ResultSelector />
                {/* -- footer -- */}
                <div className="footer">
                    <p className="note"> المواد والمعاملات حسب جداول تنظيم امتحانات البكالوريا (مصدر: tawjih.info، 2026). </p>
                    <p className="by"> © 2026 Berrada Mehdi </p>
                </div>
            </div>
            {/* -- bottom-backdrop -- */}
            <div className="bottom-backdrop">
                <div className="blue-shadow"></div>
                <div className="red-shadow"></div>
            </div>
        </div>
    </>
  )
}

export default Home