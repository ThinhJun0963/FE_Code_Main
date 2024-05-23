import 'bootstrap/dist/css/bootstrap.css';
import './BookingStep.css';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import TimeSlot from './TimeSlot/TimeSlot';
import Calendar from './Calendar/Calendar';
import ExaminationType from './ExaminationType/ExaminationType';

const BookingStep = () => {
  
    const data = [
        { title: '1. Chọn hình thức khám', content: <ExaminationType />},
        { title: '2. Chọn ngày', content: <Calendar /> },
        { title: '3. Chọn giờ', content: <TimeSlot /> },
        { title: '4. Xác nhận thông tin', content: '' },
        { title: '5. Thanh toán', content: '' }
    ];

    const [active, setActive] = useState<number | null>(null);

    const toggle = (index: number) => {
        if (active === index) {
            return setActive(null);
        }

        setActive(index);
    }

    return (
        <div className="wrapper">
            <div className="accordion">
                {data.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="title" onClick={() => toggle(index)}>
                            <h2>{item.title}</h2>
                            <span className="icon">
                                {active === index ? <ChevronUpIcon boxSize={8} /> : <ChevronDownIcon boxSize={8} />}
                            </span>
                        </div>
                        {active === index && <div className='content'>{item.content}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookingStep;