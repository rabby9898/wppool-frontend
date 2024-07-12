import "./Style.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/*******Custom Tooltip Component**********/
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        {payload.map((entry, index) => (
          <div key={index} className="tooltip-entry">
            <div
              className="color-box"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="entry-name">{entry.name}:</span>
            {`${entry.value}%`}
          </div>
        ))}
      </div>
    );
  }

  return null;
};

/*******Random Data Generate**********/
const getRandomPercentage = (min = 0, max = 100) => {
  return (Math.random() * (max - min) + min).toFixed(1);
};

/*******Generate Data for First Day of Each Month**********/
const generateFirstDayOfMonthData = (start, end) => {
  const dateArray = [];
  let currentDate = new Date(start);
  const endDate = new Date(end);
  while (currentDate <= endDate) {
    dateArray.push(new Date(currentDate));
    currentDate.setMonth(currentDate.getMonth() + 1);
    currentDate.setDate(1); // Set to the first day of the month
  }
  return dateArray;
};

const dates = generateFirstDayOfMonthData("2024-01-01", "2024-07-01");
const data = dates.map((date) => ({
  date: date.toISOString().split("T")[0],
  WPPOOL: getRandomPercentage(10, 80),
  Google: getRandomPercentage(50, 100),
  Microsoft: getRandomPercentage(10, 70),
  TwitterIndex: getRandomPercentage(20, 90),
}));

const staticMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const CustomizedAxisTick = ({ x, y, index }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
      {staticMonths[index % staticMonths.length]}
    </text>
  </g>
);

const renderCustomLegend = () => (
  <div className="custom-legend">
    <div className="legend-item">
      <div className="color-box" style={{ backgroundColor: "#FC714D" }}></div>
      WPPOOL
    </div>
    <div className="legend-item">
      <div className="color-box" style={{ backgroundColor: "#615DE3" }}></div>
      Google
    </div>
    <div className="legend-item">
      <div className="color-box" style={{ backgroundColor: "#AFCD80" }}></div>
      Microsoft
    </div>
    <div className="legend-item">
      <div className="color-box" style={{ backgroundColor: "#6F34A1" }}></div>
      Twitter
    </div>
  </div>
);

const Chart = () => (
  <div className="chart-container">
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={<CustomizedAxisTick />} interval={0} />
        <YAxis
          domain={[0, 100]}
          ticks={[-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          tickFormatter={(tick) => `${tick}%`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend content={renderCustomLegend} />
        <Line type="monotone" dataKey="WPPOOL" stroke="#FC714D" />
        <Line type="monotone" dataKey="Google" stroke="#615DE3" />
        <Line type="monotone" dataKey="Microsoft" stroke="#AFCD80" />
        <Line type="monotone" dataKey="TwitterIndex" stroke="#6F34A1" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Chart;
