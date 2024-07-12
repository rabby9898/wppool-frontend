import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Style.css";
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
    <div className="w-full mx-auto my-8 md:my-10 h-[450px] font-nantes">
      <div className="overflow-y-auto custom-scrollbar h-full">
        <table className="w-full bg-white font-nantes dark:bg-[#2E236C] dark:text-white">
          <thead>
            <tr>
              <th className="py-3 px-3 text-left bg-white font-semibold text-lg whitespace-nowrap md:w-1/6 dark:bg-[#2E236C]">
                Company
              </th>
              <th className="py-3 px-3 text-left bg-white font-semibold text-lg whitespace-nowrap md:w-1/12 dark:bg-[#2E236C]">
                <div className="flex justify-start gap-1 items-center">
                  Ticker <MdOutlineArrowDropDown />
                </div>
              </th>
              <th className="py-3 px-3 text-left bg-white font-semibold text-lg whitespace-nowrap md:w-1/6 dark:bg-[#2E236C]">
                Vertical
              </th>
              <th className="py-3 px-3 text-left bg-white font-semibold text-lg whitespace-nowrap md:w-1/12 dark:bg-[#2E236C]">
                Price
              </th>
              <th className="py-3 px-3 text-left bg-white font-semibold text-lg whitespace-nowrap md:w-1/6 dark:bg-[#2E236C]">
                Market Cap ($B)
              </th>
              <th className="py-3 px-3 text-left bg-white font-semibold text-lg whitespace-nowrap md:w-1/12 dark:bg-[#2E236C]">
                Revenue Growth
              </th>
              <th className="py-3 px-3 text-left bg-white font-semibold text-lg whitespace-nowrap md:w-1/12 dark:bg-[#2E236C]">
                Gross Margin
              </th>
              <th className="py-3 px-3 text-left bg-white font-semibold text-lg whitespace-nowrap md:w-1/12 dark:bg-[#2E236C]">
                EV/Revenue
              </th>
              <th className="py-3 px-3 text-left bg-white font-semibold text-lg whitespace-nowrap md:w-1/12 dark:bg-[#2E236C]">
                YTD Performance
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-[#F3F3F3] rounded-md dark:bg-[#2E236C]"
                    : ""
                }
              >
                <td className="py-3 px-3 text-base font-medium">
                  {row.company}
                </td>
                <td className="py-3 px-3 text-base font-medium">
                  {row.ticker}
                </td>
                <td className="py-3 px-3 text-base font-medium">
                  {row.vertical}
                </td>
                <td className="py-3 px-3 text-base font-medium">{row.price}</td>
                <td className="py-3 px-3 text-base text-center font-medium">
                  {row.marketCap}
                </td>
                <td className="py-3 px-3 text-base text-center font-medium">
                  {row.revenueGrowth}
                </td>
                <td className="py-3 px-3 text-base text-center font-medium">
                  {row.grossMargin}
                </td>
                <td className="py-3 px-3 text-base text-center font-medium">
                  {row.evRevenue}
                </td>
                <td className="py-3 px-3 text-base text-center font-medium">
                  {row.ytdPerformance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;
