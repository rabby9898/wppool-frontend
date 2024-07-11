const data = [
  {
    company: "Adyen",
    ticker: "AFRM",
    vertical: "Payments",
    price: "$17.15",
    marketCap: "$50.5",
    revenueGrowth: "49.0%",
    grossMargin: "15.8%",
    evRevenue: "6.3",
    ytdPerformance: "24.3%",
  },
  {
    company: "Affirm",
    ticker: "AFRM",
    vertical: "Lending",
    price: "$16.12",
    marketCap: "$4.7",
    revenueGrowth: "32.0%",
    grossMargin: "48.7%",
    evRevenue: "4.9",
    ytdPerformance: "77.1%",
  },
  {
    company: "Alkami Technology",
    ticker: "ALKT",
    vertical: "B2B SaaS",
    price: "$16.27",
    marketCap: "$1.5",
    revenueGrowth: "34.0%",
    grossMargin: "53.0%",
    evRevenue: "7.0",
    ytdPerformance: "10.0%",
  },
  {
    company: "AvidXchange",
    ticker: "AVDX",
    vertical: "Payments",
    price: "$10.21",
    marketCap: "$2.0",
    revenueGrowth: "27.0%",
    grossMargin: "61.5%",
    evRevenue: "6.0",
    ytdPerformance: "10.5%",
  },
  {
    company: "Bakkt Holdings",
    ticker: "BKKT",
    vertical: "Wealth",
    price: "$1.32",
    marketCap: "$0.1",
    revenueGrowth: "38%",
    grossMargin: "--",
    evRevenue: "0.4",
    ytdPerformance: "13.8%",
  },
  {
    company: "Virtu Financial Inc",
    ticker: "VIRT",
    vertical: "Wealth",
    price: "$17.0",
    marketCap: "$3.1",
    revenueGrowth: "-22.0%",
    grossMargin: "38.2%",
    evRevenue: "2.6",
    ytdPerformance: "-17.8%",
  },
  {
    company: "Adyen",
    ticker: "AFRM",
    vertical: "Payments",
    price: "$17.15",
    marketCap: "$50.5",
    revenueGrowth: "49.0%",
    grossMargin: "15.8%",
    evRevenue: "6.3",
    ytdPerformance: "24.3%",
  },
  {
    company: "Affirm",
    ticker: "AFRM",
    vertical: "Lending",
    price: "$16.12",
    marketCap: "$4.7",
    revenueGrowth: "32.0%",
    grossMargin: "48.7%",
    evRevenue: "4.9",
    ytdPerformance: "77.1%",
  },
  {
    company: "Alkami Technology",
    ticker: "ALKT",
    vertical: "B2B SaaS",
    price: "$16.27",
    marketCap: "$1.5",
    revenueGrowth: "34.0%",
    grossMargin: "53.0%",
    evRevenue: "7.0",
    ytdPerformance: "10.0%",
  },
  {
    company: "AvidXchange",
    ticker: "AVDX",
    vertical: "Payments",
    price: "$10.21",
    marketCap: "$2.0",
    revenueGrowth: "27.0%",
    grossMargin: "61.5%",
    evRevenue: "6.0",
    ytdPerformance: "10.5%",
  },
];

const CompanyTable = () => {
  return (
    <div className="w-full mx-auto my-8 md:my-10">
      <div className="overflow-x-auto">
        <table className="w-full bg-white font-nantes">
          <thead>
            <tr>
              <th className="w-1/6 py-3 px-3 text-left bg-white font-semibold text-base">
                Company
              </th>
              <th className="w-1/12 py-3 px-3 text-left bg-white font-semibold text-base">
                Ticker
              </th>
              <th className="w-1/6 py-3 px-3 text-left bg-white font-semibold text-base">
                Vertical
              </th>
              <th className="w-1/12 py-3 px-3 text-left bg-white font-semibold text-base">
                Price
              </th>
              <th className="w-1/6 py-3 px-3 text-left bg-white font-semibold text-base">
                Market Cap ($B)
              </th>
              <th className="w-1/12 py-3 px-3 text-left bg-white font-semibold text-base">
                Revenue Growth
              </th>
              <th className="w-1/12 py-3 px-3 text-left bg-white font-semibold text-base">
                Gross Margin
              </th>
              <th className="w-1/12 py-3 px-3 text-left bg-white font-semibold text-base">
                EV/Revenue
              </th>
              <th className="w-1/12 py-3 px-3 text-left bg-white font-semibold text-base">
                YTD Performance
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-[#F3F3F3] rounded-md" : ""}
              >
                <td className="py-3 px-3 text-base">{row.company}</td>
                <td className="py-3 px-3 text-base">{row.ticker}</td>
                <td className="py-3 px-3 text-base">{row.vertical}</td>
                <td className="py-3 px-3 text-base">{row.price}</td>
                <td className="py-3 px-3 text-base">{row.marketCap}</td>
                <td className="py-3 px-3 text-base">{row.revenueGrowth}</td>
                <td className="py-3 px-3 text-base">{row.grosbaseargin}</td>
                <td className="py-3 px-3 text-base">{row.evRevenue}</td>
                <td className="py-3 px-3 text-base">{row.ytdPerformance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;
