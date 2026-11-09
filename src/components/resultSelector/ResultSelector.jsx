import { useEffect } from "react"
import { useData } from "../../provider/Data"
import "./resultSelector.css"

const ResultSelector = () => {
    const {result} = useData()

    return (
        <>
            <div className="box-result">
                <p className="text"> المعدل ديالك </p>
                <div className="result"> {isNaN(result.toFixed(2)) ? 0 : result.toFixed(2)} </div>
            </div>
        </>
  )
}

export default ResultSelector