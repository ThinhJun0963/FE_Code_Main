import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';

export default function AccordionUsage() {
    return (
        <Box>
            <Accordion sx={{ backgroundColor: '#FAFAFA', marginTop: '10px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Đăng kí khám bệnh qua ứng dụng có tốn phí không?
                </AccordionSummary>
                <Divider sx={{ backgroundColor: 'black', width: '100%' }} />
                <AccordionDetails>
                    Không, dịch vụ đăng ký khám online hoàn toàn miễn phí. Bạn chỉ cần chọn thời gian và bác sĩ phù hợp để đặt lịch hẹn một cách tiện lợi.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: '#FAFAFA', marginTop: '10px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Tôi được lợi ích gì khi sử dụng ứng dụng đăng kí khám bệnh?
                </AccordionSummary>
                <Divider sx={{ backgroundColor: 'black', width: '100%' }} />
                <AccordionDetails>
                    Sử dụng ứng dụng đăng ký khám bệnh mang lại nhiều lợi ích như: tiết kiệm thời gian, dễ dàng chọn lựa bác sĩ và thời gian khám phù hợp, nhận nhắc nhở lịch hẹn, và truy cập thông tin khám chữa bệnh một cách thuận tiện.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: '#FAFAFA', marginTop: '10px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Làm thế nào để đặt lịch hẹn khám bệnh qua ứng dụng?
                </AccordionSummary>
                <Divider sx={{ backgroundColor: 'black', width: '100%' }} />
                <AccordionDetails>
                    Để đặt lịch hẹn khám bệnh qua ứng dụng, bạn chỉ cần chọn mục "Đặt lịch hẹn", sau đó chọn bác sĩ và thời gian phù hợp. Cuối cùng, nhấn "Xác nhận" để hoàn tất việc đặt lịch.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: '#FAFAFA', marginTop: '10px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Tôi có thể hủy lịch hẹn khám bệnh qua ứng dụng không?
                </AccordionSummary>
                <Divider sx={{ backgroundColor: 'black', width: '100%'}} />
                <AccordionDetails>
                    Có, bạn hoàn toàn có thể hủy lịch hẹn khám bệnh qua ứng dụng. Chỉ cần vào mục "Lịch hẹn của tôi", chọn lịch hẹn muốn hủy và nhấn "Hủy lịch hẹn".
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}