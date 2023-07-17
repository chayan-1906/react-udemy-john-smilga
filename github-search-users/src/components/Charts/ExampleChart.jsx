import React, {Component} from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

const ChartComponent = ({data}) => {
    const chartConfigs = {
        type: 'bar3d',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            chart: {
                caption: 'Countries with most oil reserves [2017-18]',
                subCaption: 'In MMbbl = One million barrels',
                xAxisName: 'Country',
                yAxisName: 'Reserves (MMbbl)',
                numberSuffix: 'K',
                theme: 'fusion',
            },
            data: data,
        },
    }

    return <ReactFC {...chartConfigs} />
}

export default ChartComponent