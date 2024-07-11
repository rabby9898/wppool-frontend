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
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p className="label">{`${label}`}</p>
        {payload.map((entry, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: entry.color,
                marginRight: 5,
              }}
            ></div>
            <span style={{ color: entry.color, fontWeight: "bold" }}>
              {entry.name}:
            </span>{" "}
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

/*******every 10 days between two dates**********/
const generateDates = (start, end) => {
  const dateArray = [];
  let currentDate = new Date(start);
  const endDate = new Date(end);
  while (currentDate <= endDate) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 10);
  }
  return dateArray;
};

const dates = generateDates("2024-01-01", "2024-07-31");
const data = dates.map((date) => ({
  date: date.toISOString().split("T")[0],
  WPPOOL: getRandomPercentage(10, 80),
  Google: getRandomPercentage(50, 100),
  Microsoft: getRandomPercentage(10, 70),
  TwitterIndex: getRandomPercentage(20, 90),
}));

const getMonthName = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = new Date(date).getMonth();
  return monthNames[month];
};

const CustomizedAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
      {getMonthName(payload.value)}
    </text>
  </g>
);

const renderCustomLegend = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      width: "100%",
      marginTop: "16px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: 10,
          height: 10,
          backgroundColor: "#FC714D",
          marginRight: 5,
        }}
      ></div>
      WPPOOL
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: 10,
          height: 10,
          backgroundColor: "#615DE3",
          marginRight: 5,
        }}
      ></div>
      Google
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: 10,
          height: 10,
          backgroundColor: "#AFCD80",
          marginRight: 5,
        }}
      ></div>
      Microsoft
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: 10,
          height: 10,
          backgroundColor: "#6F34A1",
          marginRight: 5,
        }}
      ></div>
      Twitter
    </div>
  </div>
);

const Chart = () => (
  <div style={{ width: "100%", height: 500 }}>
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
