import React, { useState, useEffect } from "react";
import {
    Card, Text, Metric, AreaChart, Grid, Flex, Bold, SelectItem, Select, DateRangePicker, DateRangePickerItem, Icon, MultiSelect, MultiSelectItem, BadgeDelta, LineChart, Title, BarChart, TabGroup, TabList, Tab, DonutChart, Legend, TabPanels, Button, TabPanel, BarList, ScatterChart
} from "@tremor/react";
import { BarChart4Icon, LineChartIcon, ExpandIcon, SearchIcon } from 'lucide-react';
// import { Dialog, Transition } from "@headlessui/react";
// import { ExpandIcon, SearchIcon } from 'lucide-react';
// import { popularContentDay, popularContentWeek } from "../data/popularContent";
import { popularGroups, popularUsers } from "../data/popularUsers";
// import { userLoginsDay } from "../data/userLogins";
// import { viewsDay, viewsWeek, viewsDay2, viewsWeek2, viewsYTD } from "../data/views";
import { viewsYTD, viewsDay } from "../data/views";
import { totalsDayHourStripped, totalsDayDay, totalsDayDay2, totalsDayHour, totalsDayHour2 } from "../data/totalsDay";
import { totalsWeekHour, totalsWeekDay, totalsWeekWeek } from "../data/totalsWeek";
import { totalsMonthHour, totalsMonthDay, totalsMonthWeek, totalsMonthMonth } from "../data/totalsMonth";
import { totalsQuarterHour, totalsQuarterDay, totalsQuarterWeek, totalsQuarterMonth, totalsQuarterQuarter } from "../data/totalsQuarter";
import { totalsYearDay, totalsYearWeek, totalsYearMonth, totalsYearQuarter, totalsYearYear } from "../data/totalsYear";
import { blocks, blocksViewsDay, blocksViewsWeek } from "../data/blocks";
import { groups, groupsScatter } from "../data/groups";
import { devices } from "../data/devices";

export default function Users() {

    const [selectedChart1, setSelectedChart1] = useState(0);
    const [selectedChart2, setSelectedChart2] = useState(0);

    const [isModal, setIsModal] = useState(false);

    const [week] = useState(false);
    const [showLikes, setShowLikes] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [showUGC, setShowUGC] = useState(false);
    const [showTotalViews, setShowTotalViews] = useState(false);

    const [displayTotals1, setDisplayTotals1] = useState(totalsDayHourStripped);
    const [displayTotals1Index, setDisplayTotals1Index] = useState('hour');
    const [displayTotals1ToggleHour, setDisplayTotals1ToggleHour] = useState(totalsDayHourStripped);
    const [displayTotals1ToggleDay, setDisplayTotals1ToggleDay] = useState(totalsDayDay);
    const [displayTotals1ToggleWeek, setDisplayTotals1ToggleWeek] = useState(totalsWeekDay);
    const [displayTotals1ToggleMonth, setDisplayTotals1ToggleMonth] = useState(totalsMonthWeek);
    const [displayTotals1ToggleQuarter, setDisplayTotals1ToggleQuarter] = useState(totalsQuarterMonth);
    const [displayTotals1ToggleYear, setDisplayTotals1ToggleYear] = useState(totalsYearQuarter);
    const [displayTotals1Label, setDisplayTotals1Label] = useState('Today');


    /// DUPE

    const [showLikes2, setShowLikes2] = useState(false);
    const [showComments2, setShowComments2] = useState(false);
    const [showUGC2, setShowUGC2] = useState(false);
    const [showTotalViews2, setShowTotalViews2] = useState(false);

    const [displayTotals2, setDisplayTotals2] = useState(totalsDayHour);
    const [displayTotals2Index, setDisplayTotals2Index] = useState('hour');
    const [displayTotals2ToggleHour, setDisplayTotals2ToggleHour] = useState(totalsDayHour);
    const [displayTotals2ToggleDay, setDisplayTotals2ToggleDay] = useState(totalsDayDay);
    const [displayTotals2ToggleWeek, setDisplayTotals2ToggleWeek] = useState(totalsWeekDay);
    const [displayTotals2ToggleMonth, setDisplayTotals2ToggleMonth] = useState(totalsMonthWeek);
    const [displayTotals2ToggleQuarter, setDisplayTotals2ToggleQuarter] = useState(totalsQuarterMonth);
    const [displayTotals2ToggleYear, setDisplayTotals2ToggleYear] = useState(totalsYearQuarter);
    const [displayTotals2Label, setDisplayTotals2Label] = useState('Yesterday');

    const [data2, setData2] = useState(["Views"]);

    // DUPE END

    // totalsQuarterWeek

    // let showCategories = useState(["Views"]);

    // const showCategories = ['Views'];

    const [data, setData] = useState(["Views"]);

    const [value, setValue] = useState({
        from: new Date(),
        to: new Date(),
    });

    const [value2, setValue2] = useState({
        from: new Date(2024, 1, 1),
        to: new Date(),
    });

    const today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    function handleDateInput($date, $index) {

        setDisplayTotals1($date);
        setDisplayTotals1Index($index);

        // handleDateInput2($date, $index);

        if ($date == totalsDayHour || $date == totalsDayDay || $date == totalsDayHourStripped) {
            setDisplayTotals1ToggleHour(totalsDayHourStripped);
            setDisplayTotals1ToggleDay(totalsDayDay);
            setDisplayTotals1ToggleWeek(false);
            setDisplayTotals1ToggleMonth(false);
            setDisplayTotals1ToggleQuarter(false);
            setDisplayTotals1ToggleYear(false);
            setDisplayTotals1Label('Today');
        } else if ($date == totalsWeekHour || $date == totalsWeekDay || $date == totalsWeekWeek) {
            setDisplayTotals1ToggleHour(totalsWeekHour);
            setDisplayTotals1ToggleDay(totalsWeekDay);
            setDisplayTotals1ToggleWeek(totalsWeekWeek);
            setDisplayTotals1ToggleMonth(false);
            setDisplayTotals1ToggleQuarter(false);
            setDisplayTotals1ToggleYear(false);
            setDisplayTotals1Label('Past 7 Days');
        } else if ($date == totalsMonthHour || $date == totalsMonthDay || $date == totalsMonthWeek || $date == totalsMonthMonth) {
            setDisplayTotals1ToggleHour(totalsMonthHour);
            setDisplayTotals1ToggleDay(totalsMonthDay);
            setDisplayTotals1ToggleWeek(totalsMonthWeek);
            setDisplayTotals1ToggleMonth(totalsMonthMonth);
            setDisplayTotals1ToggleQuarter(false);
            setDisplayTotals1ToggleYear(false);
            setDisplayTotals1Label('This Month');
        } else if ($date == totalsQuarterHour || $date == totalsQuarterDay || $date == totalsQuarterWeek || $date == totalsQuarterMonth || $date == totalsQuarterQuarter) {
            setDisplayTotals1ToggleHour(totalsQuarterHour);
            setDisplayTotals1ToggleDay(totalsQuarterDay);
            setDisplayTotals1ToggleWeek(totalsQuarterWeek);
            setDisplayTotals1ToggleMonth(totalsQuarterMonth);
            setDisplayTotals1ToggleQuarter(totalsQuarterQuarter);
            setDisplayTotals1ToggleYear(false);
            setDisplayTotals1Label('This Quarter');
        } else if ($date == totalsYearDay || $date == totalsYearWeek || $date == totalsYearMonth || $date == totalsYearQuarter || $date == totalsYearYear) {
            setDisplayTotals1ToggleHour(false);
            setDisplayTotals1ToggleDay(totalsYearDay);
            setDisplayTotals1ToggleWeek(totalsYearWeek);
            setDisplayTotals1ToggleMonth(totalsYearMonth);
            setDisplayTotals1ToggleQuarter(totalsYearQuarter);
            setDisplayTotals1ToggleYear(totalsYearYear);
            setDisplayTotals1Label('This Year');
        } else {
            setDisplayTotals1ToggleHour(false);
            setDisplayTotals1ToggleDay(false);
            setDisplayTotals1ToggleWeek(false);
            setDisplayTotals1ToggleMonth(false);
            setDisplayTotals1ToggleQuarter(false);
            setDisplayTotals1ToggleYear(false);
            setDisplayTotals1Label('NADA');
        }
    };

    return (
        <>
            <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-4  border-b pb-4">

                <div className='flex items-center'>
                    <Text className='mr-2 flex-none'>Show Insights for</Text>

                    <DateRangePicker
                        className="max-w-md mx-auto"
                        value={value}
                        onValueChange={setValue}
                        defaultValue="today"
                        selectPlaceholder="Select"
                        color="rose"
                    >

                        <DateRangePickerItem key="today" value="today" from={new Date()} to={new Date()} onClick={() => handleDateInput(totalsDayHourStripped, 'hour')}>
                            Today
                        </DateRangePickerItem>
                        <DateRangePickerItem key="yesterday" value="yesterday" from={new Date(yyyy, mm - 1, dd - 1)} to={new Date(yyyy, mm - 1, dd)} onClick={() => handleDateInput(totalsDayHour, 'hour')}>
                            Yesterday
                        </DateRangePickerItem>
                        <DateRangePickerItem key="7days" value="7days" from={new Date(yyyy, mm - 1, dd - 7)} onClick={() => handleDateInput(totalsWeekDay, 'day')}>
                            Last 7 Days
                        </DateRangePickerItem>
                        <DateRangePickerItem
                            key="mtd"
                            value="mtd"
                            from={new Date(yyyy, mm - 1, 1)}
                            to={new Date(yyyy, mm - 1, dd)}
                            onClick={() => handleDateInput(totalsMonthWeek, 'week')}
                        >
                            Month to Date
                        </DateRangePickerItem>
                        <DateRangePickerItem
                            key="half"
                            value="half"
                            from={new Date(2024, 3, 1)}
                            to={new Date(2024, 6, 31)}
                            onClick={() => handleDateInput(totalsQuarterMonth, 'month')}
                        >
                            This Quarter
                        </DateRangePickerItem>
                        <DateRangePickerItem key="ytd" value="ytd" from={new Date(2024, 0, 1)} onClick={() => handleDateInput(totalsYearQuarter, 'quarter')}>
                            Year to date
                        </DateRangePickerItem>
                    </DateRangePicker>

                </div>
                <div className='flex items-center'>
                    <Text className='mr-2 flex-none'>Exclude</Text>
                    <MultiSelect>
                        <MultiSelectItem value="1">Recognition Posts</MultiSelectItem>
                        <MultiSelectItem value="2">User Generated Content</MultiSelectItem>
                        {/* <MultiSelectItem value="3">Home Page</MultiSelectItem> */}

                    </MultiSelect>
                </div>
                <div className='flex items-center'>
                    <Text className='mr-2 flex-none'>Workspace</Text>
                    <Select value="1">
                        <SelectItem value="1">
                            Engage
                        </SelectItem>
                        <SelectItem value="2">
                            Test Environment
                        </SelectItem>
                    </Select>
                </div>

            </Grid>

            <Grid numItemsSm={1} numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between lg:col-span-2'>
                    <Flex className="flex-col align-start items-start">
                        <Flex className="mb-2" alignItems="center">
                            <Title className="flex w-full">Active Users</Title>
                            <TabGroup index={selectedChart1} onIndexChange={setSelectedChart1} className="flex justify-end">
                                <TabList variant="solid">
                                    <Tab icon={BarChart4Icon}>Bar</Tab>
                                    <Tab icon={LineChartIcon}>Line</Tab>
                                </TabList>
                            </TabGroup>
                        </Flex>
                        <div className="flex align-end full">
                            {/* <MultiSelect placeholder="Include..." className="max-w-100">
                                <MultiSelectItem value="1" onClick={() => setShowLikes(!showLikes)}>Likes</MultiSelectItem>
                                <MultiSelectItem value="2" onClick={() => setShowComments(!showComments)}>Comments</MultiSelectItem>
                                <MultiSelectItem value="25">Published Content</MultiSelectItem>
                                <MultiSelectItem value="26">User Logins</MultiSelectItem>
                                <MultiSelectItem value="3" onClick={() => setShowUGC(!showUGC)}>UGC Posts</MultiSelectItem>
                                <MultiSelectItem value="4" onClick={() => setShowTotalViews(!showTotalViews)}>Total Views</MultiSelectItem>
                            </MultiSelect> */}
                            <Select className="max-w-100" placeholder="Select Range..">
                                <SelectItem key="1" value="1" onClick={() => handleDateInput(displayTotals1ToggleHour, 'hour')} className={!displayTotals1ToggleHour ? 'hidden' : ''}>Hourly</SelectItem>
                                <SelectItem key="2" value="2" onClick={() => handleDateInput(displayTotals1ToggleDay, 'day')} className={!displayTotals1ToggleDay ? 'hidden' : ''}>Daily</SelectItem>
                                <SelectItem key="3" value="3" onClick={() => handleDateInput(displayTotals1ToggleWeek, 'week')} className={!displayTotals1ToggleWeek ? 'hidden' : ''}>Weekly</SelectItem>
                                <SelectItem key="4" value="4" onClick={() => handleDateInput(displayTotals1ToggleMonth, 'month')} className={!displayTotals1ToggleMonth ? 'hidden' : ''}>Monthly</SelectItem>
                                <SelectItem key="5" value="5" onClick={() => handleDateInput(displayTotals1ToggleQuarter, 'quarter')} className={!displayTotals1ToggleQuarter ? 'hidden' : ''}>Quarterly</SelectItem>
                                <SelectItem key="6" value="6" onClick={() => handleDateInput(displayTotals1ToggleYear, 'year')} className={!displayTotals1ToggleYear ? 'hidden' : ''}>Yearly</SelectItem>

                                {/* {displayTotals1ToggleHour != false ? <SelectItem key="1" value="1" onClick={() => handleDateInput(displayTotals1ToggleHour, 'hour')}>Hourly</SelectItem> : ''} */}
                                {/* {displayTotals1ToggleDay ? <SelectItem key="2" value="2" onClick={() => handleDateInput(displayTotals1ToggleDay, 'day')}>Daily</SelectItem> : ''}
                                {displayTotals1ToggleWeek ? <SelectItem key="3" value="3" onClick={() => handleDateInput(displayTotals1ToggleWeek, 'week')}>Weekly</SelectItem> : ''}
                                {displayTotals1ToggleMonth ? <SelectItem key="4" value="4" onClick={() => handleDateInput(displayTotals1ToggleMonth, 'month')}>Monthly</SelectItem> : ''}
                                {displayTotals1ToggleQuarter ? <SelectItem key="5" value="5" onClick={() => handleDateInput(displayTotals1ToggleQuarter, 'quarter')}>Quarterly</SelectItem> : ''}
                                {displayTotals1ToggleYear ? <SelectItem key="6" value="6" onClick={() => handleDateInput(displayTotals1ToggleYear, 'year')}>Yearly</SelectItem> : ''} */}
                            </Select>
                        </div>
                    </Flex>
                    {/* <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex> */}
                    {selectedChart1 === 0 ? (
                        <BarChart
                            className=" mt-4"
                            data={displayTotals1}
                            index={displayTotals1Index}
                            categories={["Logged In", "Registered"]}
                            colors={["emerald", "cyan"]}
                            startEndOnly={false}
                            showLegend={true}
                            // curveType={"linear"}
                            showAnimation={true}
                            onValueChange={() => { console.log('test') }}
                        />) : (
                        <>
                            <AreaChart
                                className=" mt-4"
                                data={displayTotals1}
                                index={displayTotals1Index}
                                categories={["Logged In", "Registered"]}
                                colors={["emerald", "cyan"]}
                                startEndOnly={false}
                                showLegend={true}
                                // curveType={"monotone"}
                                showAnimation={true}
                                showGradient={true}
                                onValueChange={() => { console.log('test') }}
                            />
                        </>)}
                </Card>
                <Card className='flex flex-col justify-between'>
                    <Title>Devices</Title>
                    <DonutChart
                        className="mt-6"
                        data={devices}
                        category="sales"
                        index="name"
                        // valueFormatter={dataFormatter}
                        variant="pie"
                        colors={["cyan", "green", "indigo"]}
                    />
                    <Legend
                        className="mt-3"
                        categories={["iOS", "Android", "WebApp"]}
                        colors={["cyan", "green", "indigo"]}
                    />
                </Card>
            </Grid>

            <Grid numItemsSm={1} numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                <Card className='flex flex-col'>
                    <Flex className="mb-2" alignItems="center">
                        <Title className="flex w-full">Active Groups</Title>
                        <TabGroup index={selectedChart1} className="flex justify-end">
                            <TabList variant="solid">
                                <Tab>By Number</Tab>
                                <Tab>By %</Tab>
                            </TabList>
                        </TabGroup>
                    </Flex>
                    <TabGroup>
                        <TabList className="mt-2">
                            <Tab>Total Views</Tab>
                            <Tab>Unique Views</Tab>
                            <Tab>Likes</Tab>
                            <Tab>Comments</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <BarList
                                    // data={userLoginsDay}
                                    data={popularGroups.slice(0, 6)}
                                    className="mt-8"
                                    showAnimation={false}
                                // valueFormatter={valueFormatter}
                                />
                                <Button
                                    icon={ExpandIcon}
                                    className="mt-4 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                                // onClick={openModal}
                                >
                                    Show More
                                </Button>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </Card>
                <Card className='flex flex-col'>
                    <Title>Active Users</Title>
                    <TabGroup>
                        <TabList className="mt-2">
                            <Tab>Total Views</Tab>
                            <Tab>Unique Views</Tab>
                            <Tab>Likes</Tab>
                            <Tab>Comments</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <BarList
                                    // data={userLoginsDay}
                                    data={popularUsers.slice(0, 6)}
                                    className="mt-8"
                                    showAnimation={false}
                                // valueFormatter={valueFormatter}
                                />
                                <Button
                                    icon={ExpandIcon}
                                    className="mt-4 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                                // onClick={openModal}
                                >
                                    Show More
                                </Button>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </Card>
                {/* <Card className='flex flex-col justify-between'>
                    <Title>Groups Activity</Title>
                    <Text>The most active user groups, relative to their number of users.</Text>
                    <ScatterChart
                        className="h-80 mt-6 -ml-2"
                        yAxisWidth={50}
                        data={groupsScatter}
                        category="Group_Name"
                        x="Members"
                        y="Views"
                        size="Comments"
                        showOpacity={true}
                        // minYValue={60}
                        // valueFormatter={{
                        //   x: (amount) => `$${(amount / 1000).toFixed(1)}K`,
                        //   y: (lifeExp) => `${lifeExp} yrs`,
                        //   size: (population) => `${(population / 1000000).toFixed(1)}M people`,
                        // }}
                        showLegend={false}
                        showXAxis={true}
                        showYAxis={true}
                    />
                </Card> */}
            </Grid>

        </>
    )
}