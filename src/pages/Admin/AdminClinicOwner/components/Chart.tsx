import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, LineChart, axisClasses } from '@mui/x-charts';
import Title from './Title';

// Generate Sales Data
function createData(
    time: string,
    amount?: number,
): { time: string; amount: number | null } {
    return { time, amount: amount ?? null };
}


const dataTest = [
    { dayOfWeek: 'Mon', amount: 0 },
    { dayOfWeek: 'Tue', amount: 1 },
    { dayOfWeek: 'Wed', amount: 3 },
    { dayOfWeek: 'Thu', amount: 5 },
    { dayOfWeek: 'Fri', amount: 10 },
    { dayOfWeek: 'Sat', amount: 4 },
    { dayOfWeek: 'Sun', amount: 2 },
]

export default function Chart() {
    return (
        <React.Fragment>
            <Title>Hôm nay</Title>
            <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
                <BarChart
                    dataset={dataTest}
                    xAxis={[{ scaleType: 'band', dataKey: 'dayOfWeek' }]}
                    series={[{ dataKey: 'amount', label: 'Lịch hẹn', color: '#3f51b5'}]}
                    margin={{
                        top: 16,
                        right: 20,
                        left: 70,
                        bottom: 30,
                    }}
                />
            </div>
        </React.Fragment>
    );
}