import { useData } from "../../provider/Data"
import "./gradesForm.css"
import { Fragment, useEffect, useState }  from "react"

const GradesForm = () => {
    const {branch , nationalBranch , regionalBranch , examType , valuesListRegional} = useData()
    let coeffs_list = []
    let [ values , setValues] = useState({})
    let id = 0
    const {result , setResult} = useData()
    let point = 0

    useEffect(() => {
        setValues({})
        coeffs_list = []
        id = 0
    },[branch , examType])

    const handelViewGrade = () => {
        if(examType == "National") {
            return nationalBranch.map(element =>{
                if(element[0] == branch) {
                    return element[1].map(element2 => {
                        id++
                        coeffs_list.push({
                            "name" : element2.name,
                            "value" : element2.value,
                        })
                        point = 0
                        return (
                            <Fragment key={id}>
                                <label className="col col-one"> {element2.name} </label>
                                <label className="col-two">{element2.value}</label>
                                <input type="text" placeholder="0-20" className="col-three" value={values[element2.name]} onChange={(e) => {
                                    setValues({...values,[element2.name]:e.target.value})
                                }}/>
                            </Fragment>
                        )
                    })
                }
            } )
        }
        else if (examType == "Regional") {
             return regionalBranch.map(element =>{
                if(element[0] == branch) {
                    return element[1].map(element2 => {
                        id++
                        coeffs_list.push({
                            "name" : element2.name,
                            "value" : element2.value,
                        })
                        return (
                            <Fragment key={id}>
                                <label className="col col-one"> {element2.name} </label>
                                <label className="col-two">{element2.value}</label>
                                <input type="text" placeholder="0-20" className="col-three" value={values[element2.name]} onChange={(e) => {
                                    setValues({...values,[element2.name]:e.target.value})
                                }}/>
                            </Fragment>
                        )
                    })
                }
            } )
        }
    }

    const handleResult = () => {
        let sum = 0
        let div = 0
        coeffs_list.map(element => {
            if(isNaN(element.value)){
                element.value = 0
                console.log(element.value)
            }
            sum += Number.parseInt(element.value) * Number.parseFloat(values[element.name])
            div += Number.parseInt(element.value)
        })
        setResult(sum / div)
    }

    return (
        <>
            <div className="grades-card">
                <label className="step-title"> 3) دخل النقط (من 20) </label>
                <div className="table-form">
                    <label className="col col-one col-header"> المادة  </label>
                    <label className="col col-header"> المعامل </label>
                    <label className="col col-header"> النقطة  </label>
                    {handelViewGrade()}
                </div>
                <button className="calculate-btn" onClick={handleResult}>
                    احسب النتيجة
                </button>
            </div>
        </>
    )
}

export default GradesForm