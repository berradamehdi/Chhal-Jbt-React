import "./examSelector.css"
import { useData } from "../../provider/Data"

const ExamSelector = () => {
    const { examType , setExamType } = useData()
    return (
        <>
            <div className="exam-selector-card">
                <label className="step-title"> 1) أش باغي تحسب؟ </label>
                <div className="exam-options">
                    <button className={examType == "National" ? "option-btn is-active" : "option-btn"} onClick={() => setExamType("National")}>الامتحان الوطني</button>
                    <button className={examType == "Regional" ? "option-btn is-active" : "option-btn"} onClick={() => setExamType("Regional")}>الامتحان الجهوي</button>
                </div>
            </div>
        </>
    )
}

export default ExamSelector