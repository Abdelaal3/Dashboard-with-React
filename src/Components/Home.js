import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import StatisticCard from './StatisticCard';
import StatisticLineCard from './StatisticLineCard';

const financialData = [
    { day: 'Mon', revenue: 500, expenses: 300 },
    { day: 'Tue', revenue: 600, expenses: 400 },
    { day: 'Wed', revenue: 550, expenses: 350 },
    { day: 'Thu', revenue: 700, expenses: 500 },
    { day: 'Fri', revenue: 800, expenses: 600 },
    { day: 'Sat', revenue: 750, expenses: 580 },
    { day: 'Sun', revenue: 900, expenses: 650 },
];

export default function Home() {
    return (
        <div style={{
            width: '80%',
            margin: '30px auto',
        }}>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <StatisticCard
                            title="Total Users"
                            percentage={10}
                            isIncrease={true}
                            chartData={[
                                {
                                    name: 'Customer',
                                    value: 30
                                },
                                {
                                    name: 'Visitors',
                                    value: 70
                                },

                            ]}

                        />
                    </Grid>
                    <Grid item xs={3}>
                        <StatisticCard
                            title="Total Customers"
                            percentage={20}
                            isIncrease={false}
                            chartData={[
                                {
                                    name: 'Consumer',
                                    value: 50
                                },
                                {
                                    name: 'Developer',
                                    value: 50
                                },

                            ]}
                        />

                    </Grid>
                    <Grid item xs={3}>
                        <StatisticCard
                            title="Conversions"
                            percentage={60}
                            isIncrease={true}
                            chartData={[
                                {
                                    name: 'Imperession',
                                    value: 80
                                },
                                {
                                    name: 'Click',
                                    value: 20
                                },

                            ]}

                        />

                    </Grid>
                    <Grid item xs={3}>
                        <StatisticCard
                            title="Event count"
                            percentage={90}
                            isIncrease={false}
                            chartData={[
                                {
                                    name: 'Application',
                                    value: 65
                                },
                                {
                                    name: 'Web Site',
                                    value: 35
                                },

                            ]}
                        />
                    </Grid>
                </Grid>

            </Box>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

                <StatisticLineCard title="The Product Sale " data={financialData} />
            </div>

        </div>
    );
}