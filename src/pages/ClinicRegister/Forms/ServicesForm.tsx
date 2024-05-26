import services from './data'
import './ServicesForm.css'

const ServicesForm = () => {
    return (
        <div>
            <div>Các dịch vụ</div>

            <div className="row">
                {services.map((service) =>
                    <div className="col-3 mt-3">
                        <input key={service.id} id={service.id} type="checkbox" className="btn-check" />
                        <label className="btn btn-outline-secondary" style={{ width: "150px", whiteSpace: "nowrap" }} htmlFor={service.id}>{service.name}</label>
                    </div>
                )}
            </div>


        </div>
    )
}

export default ServicesForm