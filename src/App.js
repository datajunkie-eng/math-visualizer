
import './App.css';
import { useState, useEffect } from "react";

import Plot from 'react-plotly.js';
import {defaultTheme, 
Flex,
View,
Picker, 
Item,
Divider,
Slider,
Switch,
Text,
Button,
  Provider} from '@adobe/react-spectrum';


const fnConfig = {
  "sin": {fn:Math.sin, layout:{xaxis:{range:[-6.28,6.28]},yaxis:{range:[-6,6]}}},
  "cos": {fn:Math.cos, layout:{xaxis:{range:[-6.28,6.28]},yaxis:{range:[-6,6]}}},
  "tan": {fn:Math.tan, layout:{xaxis:{range:[-6.28,6.28]},yaxis:{range:[-12,12]}}},
  "csc": {fn:x => 1/Math.sin(x), layout:{xaxis:{range:[-6.28,6.28]},yaxis:{range:[-12,12]}}},
  "sec": {fn:x => 1/Math.cos(x), layout:{xaxis:{range:[-6.28,6.28]},yaxis:{range:[-12,12]}}},
  "cot": {fn:x => 1/Math.tan(x), layout:{xaxis:{range:[-6.28,6.28]},yaxis:{range:[-12,12]}}}
}


function Controls({fn, setFn, controls, setControls}) {
  const setValue = dim => v => {
    const newData = {...controls}
    newData[dim] = v;
    setControls(newData)
  }

  const resetAll = () => {
    setControls({a:1,b:1,c:0,d:0,refOnly:true})
  }

  return (
    <Flex direction="column" gap="size-100" alignItems="center">
      <Picker label="Select Function" onSelectionChange={setFn} defaultSelectedKey={fn}>
        <Item key="sin">Sine</Item>
        <Item key="cos">Cosine</Item>
        <Item key="tan">Tangent</Item>
        <Item key="csc">Cosecant</Item>
        <Item key="sec">Secant</Item>
        <Item key="cot">Cotangent</Item>
      </Picker>
      <Switch value={controls.refOnly} onChange={setValue("refOnly")} defaultSelected>Use Reference Points Only</Switch>
      <Divider />
        <Text>y={controls.a}*{fn}({controls.b}*x+{controls.c})+{controls.d}</Text>
        <Slider label="A" value={controls.a} minValue={-2} maxValue={2} step={.1} defaultValue={1} onChange={setValue("a")}/>
        <Slider label="B" value={controls.b} minValue={-2} maxValue={2} step={.1} defaultValue={1} onChange={setValue("b")}/>
        <Slider label="C" value={controls.c} minValue={-2} maxValue={2} step={.1} defaultValue={0} onChange={setValue("c")}/>
        <Slider label="D" value={controls.d} minValue={-2} maxValue={2} step={.1} defaultValue={0} onChange={setValue("d")}/>
        <Divider />
        <Button onClick={resetAll}>Reset</Button>
    </Flex>
  )
}



function Chart({data, fn}) {
  return (
    <Plot
      data={[
        {type: 'line', x:data.x, y:data.y,text:data.text},
      ]}
      layout={fnConfig[fn].layout}
    />
  )
}


const refPoints = [
  {x:0-2*Math.PI, lr:"0"},
  {x:Math.PI/6-2*Math.PI, lr:"𝛑/6", ld:"30"},
  {x:Math.PI/4-2*Math.PI, lr : "𝛑/4"},
  {x:Math.PI/3-2*Math.PI, lr:"𝛑/3"},
  {x:Math.PI/2-2*Math.PI, lr:"𝛑/2"},
  {x:2*Math.PI/3-2*Math.PI, lr:"2𝛑/3"},
  {x:3*Math.PI/4-2*Math.PI, lr:"3𝛑/4"},
  {x:5*Math.PI/6-2*Math.PI, lr:"5𝛑/6"},
  {x:Math.PI-2*Math.PI,  lr:"𝛑"},
  {x:7*Math.PI/6-2*Math.PI, lr:"7𝛑/6"},
  {x:5*Math.PI/4-2*Math.PI, lr:"5𝛑/4"},
  {x:4*Math.PI/3-2*Math.PI, lr:"4𝛑/3"},
  {x:3*Math.PI/2-2*Math.PI, lr:"3𝛑/2"},
  {x:5*Math.PI/3-2*Math.PI, lr:"5𝛑/3"},
  {x:7*Math.PI/4-2*Math.PI, lr:"7𝛑/4"},
  {x:11*Math.PI/6-2*Math.PI, lr:"11𝛑/6"},
  {x:0, lr:"0"},
  {x:Math.PI/6, lr:"𝛑/6", ld:"30"},
  {x:Math.PI/4, lr : "𝛑/4"},
  {x:Math.PI/3, lr:"𝛑/3"},
  {x:Math.PI/2, lr:"𝛑/2"},
  {x:2*Math.PI/3, lr:"2𝛑/3"},
  {x:3*Math.PI/4, lr:"3𝛑/4"},
  {x:5*Math.PI/6, lr:"5𝛑/6"},
  {x:Math.PI,  lr:"𝛑"},
  {x:7*Math.PI/6, lr:"7𝛑/6"},
  {x:5*Math.PI/4, lr:"5𝛑/4"},
  {x:4*Math.PI/3, lr:"4𝛑/3"},
  {x:3*Math.PI/2, lr:"3𝛑/2"},
  {x:5*Math.PI/3, lr:"5𝛑/3"},
  {x:7*Math.PI/4, lr:"7𝛑/4"},
  {x:11*Math.PI/6, lr:"11𝛑/6"},
  {x:2*Math.PI, lr:"2𝛑"},
    {x:0+2*Math.PI, lr:"0"},
  {x:Math.PI/6+2*Math.PI, lr:"𝛑/6", ld:"30"},
  {x:Math.PI/4+2*Math.PI, lr : "𝛑/4"},
  {x:Math.PI/3+2*Math.PI, lr:"𝛑/3"},
  {x:Math.PI/2+2*Math.PI, lr:"𝛑/2"},
  {x:2*Math.PI/3+2*Math.PI, lr:"2𝛑/3"},
  {x:3*Math.PI/4+2*Math.PI, lr:"3𝛑/4"},
  {x:5*Math.PI/6+2*Math.PI, lr:"5𝛑/6"},
  {x:Math.PI+2*Math.PI,  lr:"𝛑"},
  {x:7*Math.PI/6+2*Math.PI, lr:"7𝛑/6"},
  {x:5*Math.PI/4+2*Math.PI, lr:"5𝛑/4"},
  {x:4*Math.PI/3+2*Math.PI, lr:"4𝛑/3"},
  {x:3*Math.PI/2+2*Math.PI, lr:"3𝛑/2"},
  {x:5*Math.PI/3+2*Math.PI, lr:"5𝛑/3"},
  {x:7*Math.PI/4+2*Math.PI, lr:"7𝛑/4"},
  {x:11*Math.PI/6+2*Math.PI, lr:"11𝛑/6"},

]



function App() {

  const [data,setData] = useState({})

  const [fn, setFn]=useState("sin")
  const [controls, setControls]=useState({a:1,b:1,c:0,d:0,refOnly:true})
  const [initialized, setInitialized]=useState(false)





  useEffect(() => {

      const mapped = x => controls.a * fnConfig[fn].fn(controls.b * x + controls.c) + controls.d

      let newData = null;
      if(controls.refOnly) {
        const plotX = refPoints.map(p => p.x)
        const plotY = plotX.map(mapped)
        const plotText = refPoints.map(p => `Ref Point: ${p.lr}`)

        newData = {x:plotX,y:plotY,text:plotText}
      }
      else {

        const lb = fnConfig[fn].layout.xaxis.range[0]
        const ub = fnConfig[fn].layout.xaxis.range[1]

        const plotX = []
        const plotY = []

        for(let x = lb; x < ub; x+=.1) {
          plotX.push(x)
          plotY.push(mapped(x))
        }

        newData = {x:plotX,y:plotY}
      }

      setData(newData)
      if(!initialized) {
        setInitialized(true)
      }
    
  }, [fn, controls,initialized])


  return (
    <Provider theme={defaultTheme}>
        <Flex direction="row">
          <View width="size-3000">
            <Controls fn={fn} setFn={setFn} controls={controls} setControls={setControls}/>
          </View>
          {initialized &&
          <View flex>
            <Chart data={data} fn={fn}/>
          </View>}
        </Flex>
    </Provider>
    );
}

export default App;
