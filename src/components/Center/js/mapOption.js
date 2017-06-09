import settings from './geoCoord';

let geoCoordMap = settings.geoCoord;

let defaultCity = '成都';
const LINE_REPEAT_TIMES = 3;

let convertData = data => {
    let res = [];
    data.forEach(item => {
        let fromCoord = geoCoordMap[item.name];
        let toCoord = geoCoordMap[defaultCity];
        if (fromCoord && toCoord) {
            res.push({
                fromName: item.name,
                toName: defaultCity,
                coords: [fromCoord, toCoord]
            });
        }
    })
    return res;
};

let convertScatterData = data => {
    return data.map(item => {
        return {
            name: item.name,
            value: geoCoordMap[item.name].concat([item.value])
        }
    });
}

let getTopData = data => {
    data.sort((a, b) => b.value - a.value);

    return {
        data: convertScatterData(data.slice(0, 4)),
        sort: {
            max: data[0].value,
            min: data[data.length - 1].value
        }
    }
}

let getSymbolSize = (sort, val) => {
        return Math.ceil(20 * (val - sort.min) / (sort.max - sort.min)) + 5;
    }
    // 加入大规模散点
function getFlightInfo(i) {
    let color = ['rgb(2, 166, 253)', '#a6c84c', '#8a00ec', '#02ebad'];
    return {
        id: 'flight' + i,
        name: 'Flight',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: Math.random() * 6, // * i,
            trailLength: 0.7,
            color: color[i],
            symbolSize: 2,
            opacity: 0.7,
        },
        lineStyle: {
            normal: {
                opacity: 0.02,
                color: color[i],
                width: 0,
                curveness: 0.1 + i / 20
            }
        },
        data: [],
        // 设置混合模式为叠加
        blendMode: 'lighter',
    };
};

function init() {
    let lightBlue = '#0ecdec';
    let option = {
        geo: {
            show: true,
            roam: true,
            map: 'china',
            // center: [105.97, 32],
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#282b76',
                    borderColor: '#fff',
                    opacity: 0.75
                },
                emphasis: {
                    areaColor: '#1273bc'
                }
            },
            zoom: 1.2,
            regions: [{
                name: '四川',
                selected: true
            }]
        },
        series: [{
            //     id: 'flight',
            //     name: 'Flight',
            //     type: 'lines',
            //     zlevel: 1,
            //     effect: {
            //         show: true,
            //         period: 3,
            //         trailLength: 0.6,
            //         // color: '#fff',
            //         color: 'rgb(2, 166, 253)',
            //         symbolSize: 2,
            //     },
            //     lineStyle: {
            //         normal: {
            //             color: '#a6c84c',
            //             width: 0,
            //             curveness: 0.2
            //         }
            //     },
            //     data: [],
            //     // 设置混合模式为叠加
            //     blendMode: 'lighter',
            // },  {
            id: 'scatter',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    textStyle: {
                        color: '#eee'
                    }
                }
            },
            itemStyle: {
                normal: {
                    // color: '#dcd527',
                    color: '#fff',
                    opacity: 0.8
                }
            },
            data: []
        }, {
            id: 'top5',
            name: 'Top5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    // color: '#fc0',
                    color: '#0ecdec',
                }
            },
            data: []
        }]
    };
    for (let i = 0; i < LINE_REPEAT_TIMES; i++) {
        option.series.push(getFlightInfo(i));
    }
    return option;
}

let refresh = Data => {
    let topData = getTopData(Data);
    let option = {
        series: [{
            id: 'scatter',
            symbolSize: val => getSymbolSize(topData.sort, val[2]),
            data: convertScatterData(Data)
        }, {
            id: 'top5',
            symbolSize: val => getSymbolSize(topData.sort, val[2]),
            data: topData.data
        }]
    };
    let flightData = convertData(Data);
    for (let i = 0; i < LINE_REPEAT_TIMES; i++) {
        option.series.push({
            id: 'flight' + i,
            data: flightData
        });
    }
    return option;
};

export default { init, refresh };