// import logo from './logo.svg';
import './App.css';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import {useState} from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(-2)

  const data = [
    {
      name: 'Page A',
      uv: 40,
      pv: 24,
    },
    {
      name: 'Page B',
      uv: 30,
      pv: 13,
    },
    {
      name: 'Page C',
      uv: 40,
      pv: 24,
    },
    {
      name: 'Page D',
      uv: 30,
      pv: 13,
    },
    {
      name: 'Page E',
      uv: 40,
      pv: 24,
    },
    {
      name: 'Page F',
      uv: 30,
      pv: 13,
    },
    {
      name: 'Page G',
      uv: 40,
      pv: 24,
    },
    {
      name: 'Page H',
      uv: 30,
      pv: 13,
    },
  ]

  const handleClick = (data, index) => {
    setActiveIndex(index)
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          My Chart
        </p>
        <div style={{width: 1000, height: 600}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              {/*ajout grille en pointillée CartesianGrid */}
              {/*<CartesianGrid strokeDasharray="3 3" />*/}
              <CartesianGrid vertical={false} />
              {/*Affichage descriptions sur axe X et Y (XAxis, YAxis, Tooltip)*/}
              <XAxis dataKey="name" />
              {/*<YAxis />*/}
              <YAxis domain={[0, 'dataMax + 2']} tickCount={8}/>
              {/*<Tooltip />*/}
              <Tooltip cursor={{fill: 'transparent'}}/>
              <Bar dataKey="uv" fill="#B31E72" radius={[10, 10, 0, 0]} onClick={handleClick}>
                <LabelList dataKey="uv" position="top" style={{fill: '#ffffff'}} />
                {data.map((entry, index) => (
                    <Cell cursor="pointer" fill={activeIndex === -2 ? '#B31E72' : index === activeIndex ? '#B31E72' : '#FAEFF5'} key={`cell-${index}`} />
                ))}
            </Bar>
              <Bar dataKey="pv" fill="#ed7f19" radius={[10, 10, 0, 0]} onClick={handleClick}>
                <LabelList dataKey="pv" position="top" style={{fill: '#ffffff'}} />
                {data.map((entry, index) => (
                    <Cell cursor="pointer" fill={activeIndex === -2 ? '#ed7f19' : index === activeIndex ? '#ed7f19' : '#f8e3be'} key={`cell-${index}`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </header>
    </div>
  );
}

export default App;
