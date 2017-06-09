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
            trigger: 'axis'
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
            id: 'line',
            type: 'bar',
            smooth: true,
            // slient: true,
            animation: false,
            // 关初始动画
            hoverAnimation: false,
            color: [lineColor],
            data: []
        }]
    };
    return option;
}

let refresh = (Data) => {
    let xAxis = Data.map(item => item.name);
    let yAxis = Data.map(item => item.value);
    let option = {
        xAxis: {
            data: xAxis
        },
        series: [{
            id: 'line',
            data: yAxis,
        }]
    };
    return option;
};

export default { init, refresh };