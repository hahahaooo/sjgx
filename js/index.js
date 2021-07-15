// 字体大小适配
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt =
        "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 1920) + "px";
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);

function echarts_user() {
    var myChart = echarts.init(document.getElementById('chart_user'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#dddc6b'
                }
            }
        },
        grid: {
            left: '0',
            top: '10',
            right: '10',
            bottom: '0',
            containLabel: true
        },

        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }

            },

            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

        }, {

            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,

        }],

        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            splitNumber: 4,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 14,
                },
            },

            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    type: 'dotted',
                }
            }
        }],
        series: [{
                name: '增长率',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {

                    normal: {
                        color: 'rgba(31, 174, 234, 1)',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(37, 205, 254, 1)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(37, 205, 254, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#1f7eea',
                        borderColor: 'rgba(31, 174, 234, .1)',
                        borderWidth: 5
                    }
                },
                data: [3, Math.round(Math.random() * 10), 3, Math.round(Math.random() * 10), 3, 9, 3, Math.round(Math.random() * 10), 6, 8, 3, 5, 9, 3]

            },

        ]

    };

    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

function echarts_user_bar() {
    var myChart = echarts.init(document.getElementById('user_bar'));
    var ageArea = ['0~10岁', '11~30岁', '30~60岁', '60~100岁', '100岁以上'];
    var MbarData = [-42, -12, -30, -31, -21]; //男
    var FbarData = [11, Math.round(Math.random() * 100), 42, Math.round(Math.random() * 100), 23]; //女

    option = {
        title: {
            text: '狮岭',
            bottom: '5%',
            left: '40%',
            textStyle: {
                color: 'rgba(138, 173, 217, 1)',
                fontSize: 14,
            }
        },
        tooltip: {
            formatter: function(params) {
                return params.seriesName + ' : ' + Math.abs(params.value)
            }
        },
        color: ['rgba(244, 234, 0, 1)', 'rgba(0, 233, 255, 1)'],
        grid: {
            left: '5%',
            top: '10',
            right: '10',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            type: 'category',
            axisTick: { show: false },
            data: ageArea,
            axisLabel: {
                color: "rgba(138, 173, 217, 1)",
                fontSize: 12
            }
        }],
        series: [{
                type: 'bar',
                name: '女',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderRadius: [0, 10, 10, 0]
                    }
                },
                data: FbarData,
            },
            {
                name: '男',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderRadius: [10, 0, 0, 10]
                    }
                },
                data: MbarData,

            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

function echarts_user_pie() {
    var myChart = echarts.init(document.getElementById('user_pie'));
    option = {
        title: {},
        tooltip: {
            show: false,
            formatter: "{a} <br/>{b}: {c} ({d}%)",

        },
        legend: {
            right: 5,
            top: 0,
            data: ['男', '女'],
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            orient: "vertical",
            itemGap: 3,
            itemWidth: 12,
            itemHeight: 5
        },
        series: [{
            name: '年龄',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '60%'],
            color: ['#25CDFE', '#F4EA00'],
            label: {
                formatter: '{d}%',
                color: "#fff"
            },
            labelLine: {
                length: 1,
                length2: 10,
                lineStyle: {
                    color: "#fff"
                }
            },
            data: [{
                    value: Math.round(Math.random() * 100),
                    name: '男'
                },
                {
                    value: Math.round(Math.random() * 100),
                    name: '女',
                    selected: true
                }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

function total_pecent() {
    var chartDom = echarts.init(document.getElementById('center_bottom_chart1'));
    option = {
        title: {
            text: '总流水分布概览',
            left: "24",
            top: "16",
            textStyle: {
                fontSize: 16,
                color: '#00E9FF'
            },
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: '20%',
            right: '5%',
            orient: "vertical",
            itemGap: 6,
            itemWidth: 12,
            itemHeight: 5,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '50%'],
            center: ['35%', '60%'],
            color: ['#F56425', '#01DFF4', '#F4EA00', '#3BD07F', '#AE73EB'],
            avoidLabelOverlap: false,
            label: {
                // formatter: '{b}\n{d}%',
                formatter: '{d}%',
                position: 'outside',
                color: "rgba(239, 233, 233, 1)"
            },
            labelLine: {
                length: 8,
                length2: 20,
                lineStyle: {
                    color: "#fff"
                }
            },
            data: [
                { value: Math.round(Math.random() * 1000), name: '总充值', selected: true },
                { value: 735, name: '总押金' },
                { value: 580, name: '总会员费' },
                { value: Math.round(Math.random() * 1000), name: '总骑行费用' },
                { value: 300, name: '总罚款收入' }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    chartDom.setOption(option);
    window.addEventListener("resize", function() {
        chartDom.resize();
    });
}

function total_income() {
    var chartDom = echarts.init(document.getElementById('center_bottom_chart2'));
    option = {
        title: {
            text: '运营区域收入排行',
            left: "24",
            top: "16",
            textStyle: {
                fontSize: 16,
                color: '#00E9FF'
            },
        },
        color: ['rgba(37, 205, 254, 1)', 'rgba(244, 234, 0, 1)'],
        grid: {
            left: '0',
            right: '8%',
            left: '5%',
            bottom: '5',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['定南', '龙南', '惠州', '狮岭', '狮岭', '狮岭', '狮岭'],
            axisLabel: {
                textStyle: {
                    color: "rgba(138, 173, 217, 1)",
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(142, 228, 255, 1)'
                }
            },

            axisTick: {
                show: false
            }
        },
        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            // splitNumber: 4,
            axisLine: {
                lineStyle: {
                    show: false,
                    color: 'rgba(255,255,255,0)'
                },

            },
            axisLabel: {
                formatter: '{value} 万',
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
            },

            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    type: 'dotted',
                }
            }
        }],
        series: [{
            data: [120, 200, Math.round(Math.random() * 1000), 80, 70, Math.round(Math.random() * 1000), 130],
            type: 'bar',
            barMaxWidth: 20
        }]
    };

    chartDom.setOption(option);
    window.addEventListener("resize", function() {
        chartDom.resize();
    });
}

function echarts_car() {
    var myChart = echarts.init(document.getElementById('chart_car'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#dddc6b'
                }
            }
        },
        grid: {
            left: '0',
            top: '10',
            right: '10',
            bottom: '0',
            containLabel: true
        },

        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: "rgba(142, 228, 255, 1)",
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(142, 228, 255, 1)'
                }

            },

            axisTick: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

        }, {

            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,

        }],

        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            splitNumber: 4,
            axisLine: {
                lineStyle: {
                    show: false,
                    color: 'rgba(255,255,255,0)'
                },

            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 14,
                },
            },

            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    type: 'dotted',
                }
            }
        }],
        series: [{
                name: '增长率',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {

                    normal: {
                        color: 'rgba(37, 205, 254, 1)',
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(37, 205, 254, 1)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(37, 205, 254, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#1f7eea',
                        borderColor: 'rgba(37, 205, 254, .1)',
                        borderWidth: 5
                    }
                },
                data: [3, 6, Math.round(Math.random() * 10), 6, 3, Math.round(Math.random() * 10), 3, 6]

            },

        ]

    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

function echart_bar1() {
    var myChart = echarts.init(document.getElementById('bar1'));
    option = {
        title: {
            text: '狮岭车效数据1',
            left: "4",
            top: "4",
            textStyle: {
                fontSize: 12,
                color: '#00E9FF'
            },
        },
        tooltip: {
            show: false
        },
        grid: {
            left: '0',
            top: '30',
            right: '0',
            bottom: '30',
        },

        xAxis: [{
            show: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],

        yAxis: {
            show: false
        },
        series: [{
            name: '增长率',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: 'rgba(31, 174, 234, .8)',
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(37, 205, 254, 1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(37, 205, 254, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                }
            },
            itemStyle: {
                normal: {
                    color: '#1f7eea',
                    borderColor: 'rgba(31, 174, 234, .1)',
                    borderWidth: 5
                }
            },
            data: [3, 6, Math.round(Math.random() * 10), 6, 3, 9, 3, Math.round(Math.random() * 10), 6, 8, 3, Math.round(Math.random() * 10), 9, 3]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

function echart_bar2() {
    var myChart = echarts.init(document.getElementById('bar2'));
    option = {
        title: {
            text: '狮岭车效数据2',
            left: "4",
            top: "4",
            textStyle: {
                fontSize: 12,
                color: '#00E9FF'
            },
        },
        tooltip: {
            show: false
        },
        grid: {
            left: '0',
            top: '30',
            right: '0',
            bottom: '30',
        },

        xAxis: [{
            show: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],

        yAxis: {
            show: false
        },
        series: [{
            name: '增长率',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: 'rgba(31, 174, 234, .8)',
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(37, 205, 254, 1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(37, 205, 254, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                }
            },
            itemStyle: {
                normal: {
                    color: '#1f7eea',
                    borderColor: 'rgba(31, 174, 234, .1)',
                    borderWidth: 5
                }
            },
            data: [3, 6, Math.round(Math.random() * 10), 6, 3, 9, 3, Math.round(Math.random() * 10), 6, 8, 3, Math.round(Math.random() * 10), 9, 3]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

function echart_bar3() {
    var myChart = echarts.init(document.getElementById('bar3'));
    option = {
        title: {
            text: '狮岭车效数据3',
            left: "4",
            top: "4",
            textStyle: {
                fontSize: 12,
                color: '#00E9FF'
            },
        },
        tooltip: {
            show: false
        },
        grid: {
            left: '0',
            top: '30',
            right: '0',
            bottom: '30',
        },

        xAxis: [{
            show: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],

        yAxis: {
            show: false
        },
        series: [{
            name: '增长率',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: 'rgba(31, 174, 234, .8)',
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(37, 205, 254, 1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(37, 205, 254, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                }
            },
            itemStyle: {
                normal: {
                    color: '#1f7eea',
                    borderColor: 'rgba(31, 174, 234, .1)',
                    borderWidth: 5
                }
            },
            data: [3, 6, Math.round(Math.random() * 10), 6, 3, 9, 3, Math.round(Math.random() * 10), 6, 8, 3, Math.round(Math.random() * 10), 9, 3]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

function car_infomation() {
    var chartDom = echarts.init(document.getElementById('car_infomation'));
    option = {
        color: ['rgba(37, 205, 254, 1)', 'rgba(244, 234, 0, 1)'],
        legend: {
            right: '0',
            top: '-0',
            data: ['车辆总数', '正常待租'],
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            itemGap: 3,
            itemWidth: 12,
            itemHeight: 5
        },
        grid: {
            top: '15%',
            left: '-6%',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['定南', '龙南', '惠州', '狮岭', '狮岭', '狮岭', '狮岭'],
            axisLabel: {
                textStyle: {
                    color: "rgba(138, 173, 217, 1)",
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(142, 228, 255, 1)'
                }
            },

            axisTick: {
                inside: true
            }
        },
        label: {
            show: true,
            position: "outside",
            color: 'rgba(138, 173, 217, 1)',
            fontSize: 12
        },
        yAxis: {
            show: false
        },
        series: [{
                name: '车辆总数',
                data: [140, Math.round(Math.random() * 1000), 120, 20, 50, 30, 190],
                type: 'bar',
                barMaxWidth: 20
            },
            {
                name: '正常待租',
                data: [120, Math.round(Math.random() * 1000), 150, 80, 70, Math.round(Math.random() * 100), 130],
                type: 'bar',
                barMaxWidth: 20

            }
        ]
    };

    chartDom.setOption(option);
    window.addEventListener("resize", function() {
        chartDom.resize();
    });
}

function magic_number(value, num) {
    num.animate({
        count: value
    }, {
        duration: 1500, //持续时间  
        step: function() {
            if (this.count)
                num.text($.numFormat(Math.round(this.count)));
        }
    });
}

const up = './img/up.png',
    down = './img/down.png';
var max_count = 8;
var msg = [{
        title: '用户*2567完成订单，已支付1元',
        date: '2021/07/12'
    },
    {
        title: '用户*2567完成订单，已支付2元',
        date: '2021/07/12'
    },
    {
        title: '用户*2567完成订单，已支付3元',
        date: '2021/07/12'
    },
    {
        title: '用户*2567完成订单，已支付4元',
        date: '2021/07/12'
    },
    {
        title: '用户*2567完成订单，已支付5元',
        date: '2021/07/12'
    },
];

var ramdon = Math.round(Math.random() * 100000);

$(document).ready(function() {
    setTimeout(() => {
        echarts_user();
        echarts_user_bar();
        echarts_user_pie();
        total_pecent();
        echarts_car();
        echart_bar1();
        echart_bar2();
        echart_bar3();
        car_infomation();
        total_income();

        getPayList();
        getUserTotal();
        getTotalMoney();
        getCardData();
        getTotalCar();

        $('.content_center .map_show .map_section ul').liMarquee({
            direction: 'up',
            runshort: true, //内容不足时不滚动
            scrollamount: 20, //速度,
        });
    }, 0);

    setInterval(() => {
        ramdon = Math.round(Math.random() * 100000);
        getUserTotal();
        getTotalMoney();
        getCardData();
        getTotalCar();

        echarts_user();
        echarts_user_bar();
        echarts_user_pie();
        total_pecent();
        echarts_car();
        echart_bar1();
        echart_bar2();
        echart_bar3();
        car_infomation();
        total_income();
        getNewOrderList();
    }, 5000);

    function getPayList() {
        $('.wrap').empty();
        for (let i = 0; i < msg.length; i++) {
            var li = `<li style="list-style: none;height: 1.85rem;line-height: 1.85rem;display:flex;justify-content: space-between;width:20rem;border-bottom: 0.05rem solid rgba(81, 196, 238, .2);">
            <span style="display:inline-block;width:100%;">${msg[i].title}${i}</span>
            <span style="display:inline-block;">${msg[i].date}</span>
            </li>`;
            $('.wrap').append(li);
        }

        $('.wrap').liMarquee({
            direction: 'up',
            runshort: true, //内容不足时不滚动
            scrollamount: 30 //速度
        });
    }

    function getNewOrderList() {
        msg = msg.concat([{
            title: `用户*2567完成订单，已支付${Math.round(Math.random() * 100)}元`,
            date: '2021/07/12'
        }])
        msg.shift();
        getPayList();
    }

    function getUserTotal() {
        $('#user_total').empty();
        var num = ramdon;
        var nums = num.toString().split('');
        if (nums.length < this.max_count) {
            for (let i = 0; i < this.max_count - nums.length; i++) {
                var span = document.createElement('span');
                span.textContent = '0';
                $('#user_total').append(span);
            }
        }

        for (let i = 0; i < nums.length; i++) {
            var span = document.createElement('span');
            span.textContent = nums[i];
            $('#user_total').append(span);
        }
    }

    function getTotalMoney() {
        $('#total_money').empty();
        var num = ramdon;
        var nums = num.toString().split('');
        if (nums.length < this.max_count) {
            for (let i = 0; i < this.max_count - nums.length; i++) {
                var span = document.createElement('span');
                span.textContent = '0';
                $('#total_money').append(span);
            }
        }

        for (let i = 0; i < nums.length; i++) {
            var span = document.createElement('span');
            span.textContent = nums[i];
            $('#total_money').append(span);
        }
    }

    function getCardData() {
        var cards = $('.center_main_show').children();
        $(cards[0]).find('.pec').text(Math.round(Math.random() * 100));
        $(cards[0]).find('img').attr('src', true ? up : down);
        $(cards[0]).find('.show_item_money').text($.numFormat(ramdon));

        $(cards[1]).find('.pec').text(Math.round(Math.random() * 100));
        $(cards[1]).find('img').attr('src', true ? up : down);
        $(cards[1]).find('.show_item_money').text($.numFormat(ramdon));

        $(cards[2]).find('.pec').text(Math.round(Math.random() * 100));
        $(cards[2]).find('img').attr('src', true ? up : down);
        $(cards[2]).find('.show_item_money').text($.numFormat(ramdon));

        $(cards[3]).find('.pec').text(Math.round(Math.random() * 100));
        $(cards[3]).find('img').attr('src', true ? up : down);
        $(cards[3]).find('.show_item_money').text($.numFormat(ramdon));

        // $('.show_item_money').each(function() {
        //     magic_number(Number($(this).text()), $(this));
        // })
    }

    function getTotalCar() {
        // 动态加载数字
        // magic_number(ramdon, $(".main_total span"));
        $(".main_total span").text($.numFormat(ramdon));
    }
});