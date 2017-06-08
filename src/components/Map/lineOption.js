let getLineData = (hour = 10) => {
    let date = '2017/6/16';
    let data = [];
    for (let i = 0; i < 60; i++) {
        data.push([date + ' ' + hour + ':' + (i <= 9 ? '0' : '') + i, Math.ceil(Math.random() * 3000)])
    }
    return data;
}

function init() {
    let lightBlue = '#0ecdec';
    let option = {
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            type: 'time',
            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: lightBlue,
                    width: 2,
                }
            }
        }],
        yAxis: [{
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: lightBlue,
                    width: 1,
                }
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            id: 'line',
            type: 'line',
            smooth: true,
            // slient: true,
            animation: false,
            // 关初始动画
            hoverAnimation: false,
            color: [lightBlue, '#F7023f'],
            data: [],
            symbolSize: 0,
            dimensions: ['时间', '评论数']
        }]
    };
    return option;
}

let refresh = () => {
    let option = {
        series: [{
            id: 'line',
            data: getLineData(),
        }]
    };
    return option;
};

let refreshLine = (data) => {
    let hour = 10;
    let date = '2017/6/16';

    let lastTime = data[data.length - 1][0].split(' ')[1].split(':');

    for (var i = 0; i < 1; i++) {
        data.shift();
        let second = parseInt(lastTime[1]) + 1;
        hour = parseInt(lastTime[0]);
        if (second > 59) {
            second = 0;
            hour++;
        }
        let dateString = date + ' ' + hour + ':' + (second <= 9 ? '0' : '') + second;
        data.push([dateString, Math.ceil(Math.random() * 3000)]);
    }

    let option = {
        series: [{
            id: 'line',
            data,
        }]
    };
    return option;
}

export default { init, refresh, refreshLine };