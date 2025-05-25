import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';




export default function StatisticCard({
    title,
    percentage,
    isIncrease,
    chartData = [],
    colors = ['red', '#1f5783'],
    width = 100,
    height = 100,
}) {
    const theme = useTheme();

    return (
        <Card sx={{ width: 300, borderRadius: 3, boxShadow: 4 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>

                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <PieChart width={width} height={height}>
                        <Pie
                            data={chartData}
                            innerRadius={30}
                            outerRadius={40}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>

                    <Box textAlign="right">
                        <Typography variant="h5" fontWeight="bold">
                            {percentage}%
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="flex-end">
                            {isIncrease ? (
                                <ArrowUpward sx={{ color: theme.palette.success.main, fontSize: 20 }} />
                            ) : (
                                <ArrowDownward sx={{ color: theme.palette.error.main, fontSize: 20 }} />
                            )}
                            <Typography
                                variant="body2"
                                color={isIncrease ? 'success.main' : 'error.main'}
                                ml={0.5}
                            >
                                {isIncrease ? 'Increase' : 'Decrease'}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

