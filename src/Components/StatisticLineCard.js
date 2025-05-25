
import { Card, CardContent, Typography } from '@mui/material';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const StatisticLineCard = ({ title, data }) => {
    return (
        <Card sx={{ width:'100%', marginTop: 10, borderRadius: 3, boxShadow: 3, height: 350 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <Line
                            type="monotone"
                            dataKey="revenue"
                            name="Revenue"
                            stroke="#4caf50"
                            strokeWidth={3}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="expenses"
                            name="Expenses"
                            stroke="#f44336"
                            strokeWidth={3}
                            strokeDasharray="5 5"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default StatisticLineCard;


