import * as React from 'react';
import { CChart } from '@coreui/react-chartjs'


interface TrendsProps {
    total_count: number,
    trends: { [name: string]: number },
}

interface DataSet {
    backgroundColor: Array<string>,
    data: Array<number>,
}

interface ChartData {
    labels: Array<string>,
    datasets: Array<DataSet>,
}

export const Trends = (props: TrendsProps) => {
    const dataSet: DataSet = {
        backgroundColor: [],
        data: [],
    };
    const chartData: ChartData = {
        labels: [],
        datasets: [],
    };

    for (let hash in props.trends) {
        chartData.labels.push(hash);
        const color: string = Number(hash.charCodeAt(0)).toString(16) +
            Number(hash.charCodeAt(1)).toString(16) +
            Number(hash.charCodeAt(2)).toString(16);

        dataSet.backgroundColor.push("#"+color);
        dataSet.data.push(props.trends[hash]);
    }
    chartData.datasets.push(dataSet);
    console.log(chartData);
    return (
        <CChart
            type="doughnut"
            data={chartData}
        />
    );
}
