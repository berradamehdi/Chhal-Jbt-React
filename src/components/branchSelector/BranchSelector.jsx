import { useData } from "../../provider/Data"
import "./branchSelector.css"

const BranchSelector = () => {
    const { examType , regional , national , setBranch } = useData()

    const handleViewBranch = () => {
        if(examType == "Regional") {
            let id = 0
            return (
                <>
                    {
                        regional.map(element => {
                            id++
                            return <option value={element} key={id}>{element}</option>
                        })
                    }
                </>
            )
        }
        else if(examType == "National") {
            let id = 0
            return (
                <>
                    {
                        national.map(element => {
                            id++
                            return <option value={element} key={id}>{element}</option>
                        })
                    }
                </>
            )
        }
    }

    const handleBranch = (value) => {
        setBranch(value)
    }
    return (
        <>
            <div className="branch-selector-card">
                <label htmlFor="branch-selector" className="step-title"> 2) اختار الشعبة </label>
                <select id="branch-selector" className="select-box" onChange={(e) => handleBranch(e.target.value)}>
                    {handleViewBranch()}
                </select>
            </div>
        </>
    )
}

export default BranchSelector