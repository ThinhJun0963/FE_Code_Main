import typeOfExamination from './data'

const ExaminationType = () => {
    return (
        
        <div className="exam-type-container">
            {typeOfExamination.map((type, index) => <div className="exam-type" key={index}>{type.name}</div>)}
        </div>
    )
}

export default ExaminationType