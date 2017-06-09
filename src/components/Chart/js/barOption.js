function init() {
    let axisColor = '#fefefe';
    let lineColor = '#17b8f0';
    let option = {
        grid: {
            left: '0',
            right: '3%',
            bottom: '0',
            top: '5px',
            containLabel: true
        },
        tooltip: {
            trigger: 'item'
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: true
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: axisColor,
                    width: 2,
                }
            },
            data: []
        },
        yAxis: [{
            type: 'value',
            splitNumber: 4,
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: axisColor,
                    width: 1,
                }
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            id: 'stack',
            type: 'bar',
            // stack: 'all',
            silent: true,
            barGap: '-100%',
            color: ['#153465'],
            barMaxWidth: 20,
            data: []
        }, {
            id: 'line',
            type: 'bar',
            // stack: 'all',
            hoverAnimation: false,
            color: [lineColor],
            barMaxWidth: 20,
            data: []
        }]
    };
    return option;
}

let refresh = (Data) => {
    let xAxis = Data.map(item => item.name);
    let yAxis = Data.map(item => item.value);
    let stackData = yAxis.map(item => yAxis[0]);
    let option = {
        xAxis: {
            data: xAxis
        },
        series: [{
            id: 'line',
            data: yAxis,
        }, {
            id: 'stack',
            data: stackData
        }]
    };
    return option;
};

export default { init, refresh };