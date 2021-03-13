import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { EChart } from 'echarts-taro3-react'

class Line extends Component {
  static defaultProps = {
    xData: [],
    yData: []
  }

  componentDidMount() {
    this.refresh()
    this.props.onRef(this)
  }

  refresh() {
    const { xData, yData } = this.props
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: yData,
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#009C9C'
        },
        lineStyle: {
          color: '#009C9C'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#009C9C' // 0% 处的颜色
            }, {
              offset: 1, color: 'white' // 100% 处的颜色
            }]
          }
        }
      }]
    }

    this.lineChart.refresh(option)
  }

  refLineChart = (node) => (this.lineChart = node);

  render() {
    return (
      <View className='line-chart'>
        <EChart ref={this.refLineChart} canvasId='line-chart' />
      </View>
    )
  }
}

export default Line

