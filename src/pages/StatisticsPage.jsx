//StatisticsPage.jsx

import Header from '../components/header/Header';
import BasicAreaPlot from '../components/statistics/BasicAreaPlot';
import BasicDonutPlot from '../components/statistics/BasicDonutPlot';
import StatisticCard from '../components/statistics/StatisticCard';

const StatisticsPage = () => {
    const user = JSON.parse(localStorage.getItem("posUser"));



    return (
        <>
            <Header />
            <div className="px-6 md:pb-0 pb-20">
                <h1 className='text-4xl font-bold text-center mb-4'>Statistics</h1>
                <div className='statistic-section'>
                    <h2 className='text-xl'>Welcome {" "} <span className='text-green-700 font-bold text-xl'>admin</span></h2>
                    <div className='statistic-cards grid xl:grid-cols-4 md:grid-cols-2  my-10 md:gap-10 gap-4'>
                        <StatisticCard title={"Total Customer"} amount={"10"} img={"../../public/images/user.png"} />
                        <StatisticCard title={"Total Profit"} amount={"660.96 $"} img={"../../public/images/money.png"} />
                        <StatisticCard title={"Total Sale"} amount={"6"} img={"../../public/images/sale.png"} />
                        <StatisticCard title={"Total Product"} amount={"28"} img={"../../public/images/product.png"} />
                    </div>
                    <div className='flex justify-between gap-10 lg:flex-row flex-col items-center'>
                        <div className='lg:w-1/2 lg:h-full h-72'>
                            <BasicAreaPlot />
                        </div>
                        <div className='lg:w-1/2 lg:h-full h-72'>
                            <BasicDonutPlot />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatisticsPage;
