import Chart from "react-apexcharts"

const options ={
    labels:['Expense', 'Income'],
    colors:['#FD5E53','#60A5FA'],
    chart:{
        width:"50px"
    },
    state:{
        hover:{
            filter:{
                type:"none",
            }
        }
    },
    legend:{
        show:false,
    },
    dataLabels:{
        enabled:false,
    },
    hover:{node:null},
    plorOption:{
        donut:{
            expandClick:false,
            donut:{
                label:{
                    show:false,
                }
            }
        }
    },
    fill:{
        colors:['#fD5E53', "#60A5FA"]
    },
    tooltip:{
        enabled:true,
        theme:'dark',
        style:{
            fontSize:"12px",
            fontFamily:undefined,
            background:'#0000'
        }
    }
}

export default function ChartSummary({income=100, expense=100}){
    return <Chart
    options={options}
    series={[expense,income]}
    type="pie"
    width={"100%"}
    height={"100%"}/>
}