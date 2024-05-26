import 'bootstrap/dist/css/bootstrap.css';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import ExaminationType from './ExaminationType/ExaminationType';
import Calendar from './Calendar/Calendar';
import TimeSlot from './TimeSlot/TimeSlot';

const BookingStep = ({ activeStep, setActiveStep }: { activeStep: number, setActiveStep: (index: number) => void }) => {
    const data = [
        { title: '1. Chọn hình thức khám', content: <ExaminationType /> },
        { title: '2. Chọn ngày', content: <Calendar /> },
        { title: '3. Chọn giờ', content: <TimeSlot /> },
        { title: '4. Xác nhận thông tin', content: '' },
        { title: '5. Thanh toán', content: '' }
    ];

    const toggle = (index: number) => {
        if (activeStep === index) {
            return setActiveStep(-1);
        }
        setActiveStep(index);
    };

    return (
        <div className="wrapper">
            <div className="accordion">
                {data.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="title" onClick={() => toggle(index)}>
                            <h2>{item.title}</h2>
                            <span className="icon">
                                {activeStep === index ? <ChevronUpIcon boxSize={8} /> : <ChevronDownIcon boxSize={8} />}
                            </span>
                        </div>
                        {activeStep === index && <div className='content'>{item.content}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookingStep;
