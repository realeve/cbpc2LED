let color = ['#ffcc00', "#ffda26", '#ffba26', '#ff9a26', "#ff7a26"].reverse();
// color = ['#ffcc00', "#ffda26", '#ffba26', '#d50938', "#e10d34"].reverse();

function getPlaceHolderStyle(i) {
    return {
        normal: {
            label: {
                show: false,
                position: "center"
            },
            labelLine: {
                show: false
            },
            color: color[i],
            borderColor: color[i],
            borderWidth: 1
        }
    }
}

function getDataItemStyle(i) {
    return {
        normal: {
            label: {
                show: true,
                position: 'outside'
            },
            labelLine: {
                show: true,
                length: 10 + i * 30,
                smooth: 0.5
            },
            borderWidth: 8,
            shadowBlur: 40,
            borderColor: color[i],
            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
        }
    };
}

function init(Data) {
    let center = ['50%', '55%'];
    let curColor = [];
    color.forEach(item => {
        curColor.push(item);
        curColor.push('rgba(0, 0, 0, 0)')
    });
    let maxCircleRadius = 120;
    let series = Data.map((item, i) => {
        let curRadius = maxCircleRadius - i * 20;
        return {
            type: 'pie',
            center,
            hoverAnimation: false, //鼠标移入变大
            radius: [curRadius - 1, curRadius],
            itemStyle: getDataItemStyle(i),
            data: [{
                value: item.value,
                name: item.name
            }, {
                value: 1 - item.value,
                itemStyle: getPlaceHolderStyle(i)
            }]
        };
    })
    let option = {
        color: curColor,
        series
    };
    console.log(JSON.stringify(option));
    return option;
}

let refresh = () => {
    return init();
};

export default { init, refresh };