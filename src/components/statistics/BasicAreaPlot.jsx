//BasicAreaPlot.jsx

import React from 'react'
import { Area } from '@ant-design/plots';

const BasicAreaPlot = () => {
    const config = {
        data: {
            type: 'fetch',
            value: 'https://assets.antv.antgroup.com/g2/aapl.json',
        },
        xField: (d) => new Date(d.date),
        yField: 'close',
    };

    return (
        <Area {...config} />
    );
}

export default BasicAreaPlot