import React, { useState, useEffect } from "react";

import {
    Card, Text, Metric, AreaChart, Grid, Flex, Bold, SelectItem, Select, DateRangePicker, DateRangePickerItem, Icon, MultiSelect, MultiSelectItem, BadgeDelta, LineChart, Title, BarChart, TabGroup, TabList, Tab
} from "@tremor/react";
import { BarChart4Icon, LineChartIcon } from 'lucide-react';
import { Dialog, Transition } from "@headlessui/react";
// import { ExpandIcon, SearchIcon } from 'lucide-react';
// import { popularContentDay } from "../data/popularContent";
// import { userLoginsDay } from "../data/userLogins";
// import { viewsDay, viewsWeek, viewsDay2, viewsWeek2, viewsYTD } from "../data/views";
import { viewsYTD, viewsDay } from "../data/views";
import { totalsDayHourStripped, totalsDayDay, totalsDayDay2, totalsDayHour, totalsDayHour2 } from "../data/totalsDay";
import { totalsWeekHour, totalsWeekDay, totalsWeekWeek } from "../data/totalsWeek";
import { totalsMonthHour, totalsMonthDay, totalsMonthWeek, totalsMonthMonth } from "../data/totalsMonth";
import { totalsQuarterHour, totalsQuarterDay, totalsQuarterWeek, totalsQuarterMonth, totalsQuarterQuarter } from "../data/totalsQuarter";
import { totalsYearDay, totalsYearWeek, totalsYearMonth, totalsYearQuarter, totalsYearYear } from "../data/totalsYear";
import { blocks, blocksViewsDay, blocksViewsWeek } from "../data/blocks";


// import { blocks, blocksViewsDay } from "../data/blocks";
// import { compareViewsDay, compareViewsWeek } from "../data/compare";

export default function Compare() {

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

    function handleShowLikes() {

        if (!showLikes) {
            setData((current) =>
                current.filter((item) => item !== 'Likes')
            );
        } else {
            setData(current => [...current, 'Likes']);
        }
    };

    useEffect(() => {
        handleShowLikes();
    }, [showLikes]);

    function handleShowComments() {
        if (!showComments) {
            setData((current) =>
                current.filter((item) => item !== 'Comments')
            );
        } else {
            setData(current => [...current, 'Comments']);
        }
    };

    useEffect(() => {
        handleShowComments();
    }, [showComments]);

    function handleShowUGC() {
        if (!showUGC) {
            setData((current) =>
                current.filter((item) => item !== 'User Generated Posts')
            );
        } else {
            setData(current => [...current, 'User Generated Posts']);
        }
    };

    useEffect(() => {
        handleShowUGC();
    }, [showUGC]);

    function handleShowTotalViews() {
        if (!showTotalViews) {
            setData((current) =>
                current.filter((item) => item !== 'Content Views')
            );
        } else {
            setData(current => [...current, 'Content Views']);
        }
    };

    useEffect(() => {
        handleShowTotalViews();
    }, [showTotalViews]);

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

    // useEffect(() => {
    //     handleDateInput(totalsDayHour, 'hour')
    // });

    // ↓↓ THIS IS ALL DUPLICATE STUFF FOR COMPARE DEMO PURPOSES !!

    function handleShowLikes2() {

        if (!showLikes2) {
            setData2((current) =>
                current.filter((item) => item !== 'Likes')
            );
        } else {
            setData2(current => [...current, 'Likes']);
        }
    };

    useEffect(() => {
        handleShowLikes2();
    }, [showLikes2]);

    function handleShowComments2() {
        if (!showComments2) {
            setData2((current) =>
                current.filter((item) => item !== 'Comments')
            );
        } else {
            setData2(current => [...current, 'Comments']);
        }
    };

    useEffect(() => {
        handleShowComments2();
    }, [showComments2]);

    function handleShowUGC2() {
        if (!showUGC2) {
            setData2((current) =>
                current.filter((item) => item !== 'User Generated Posts')
            );
        } else {
            setData2(current => [...current, 'User Generated Posts']);
        }
    };

    useEffect(() => {
        handleShowUGC2();
    }, [showUGC2]);

    function handleShowTotalViews2() {
        if (!showTotalViews2) {
            setData2((current) =>
                current.filter((item) => item !== 'Content Views')
            );
        } else {
            setData2(current => [...current, 'Content Views']);
        }
    };

    useEffect(() => {
        handleShowTotalViews2();
    }, [showTotalViews2]);

    function handleDateInput2($date, $index) {
        setDisplayTotals2($date);
        setDisplayTotals2Index($index);

        if ($date == totalsDayHour || $date == totalsDayDay) {
            setDisplayTotals2ToggleHour(totalsDayHour);
            setDisplayTotals2ToggleDay(totalsDayDay);
            setDisplayTotals2ToggleWeek(false);
            setDisplayTotals2ToggleMonth(false);
            setDisplayTotals2ToggleQuarter(false);
            setDisplayTotals2ToggleYear(false);
            setDisplayTotals2Label('Yesterday');
        } else if ($date == totalsWeekHour || $date == totalsWeekDay || $date == totalsWeekWeek) {
            setDisplayTotals2ToggleHour(totalsWeekHour);
            setDisplayTotals2ToggleDay(totalsWeekDay);
            setDisplayTotals2ToggleWeek(totalsWeekWeek);
            setDisplayTotals2ToggleMonth(false);
            setDisplayTotals2ToggleQuarter(false);
            setDisplayTotals2ToggleYear(false);
            setDisplayTotals2Label('26/10/23 - 03/10/23');
        } else if ($date == totalsMonthHour || $date == totalsMonthDay || $date == totalsMonthWeek || $date == totalsMonthMonth) {
            setDisplayTotals2ToggleHour(totalsMonthHour);
            setDisplayTotals2ToggleDay(totalsMonthDay);
            setDisplayTotals2ToggleWeek(totalsMonthWeek);
            setDisplayTotals2ToggleMonth(totalsMonthMonth);
            setDisplayTotals2ToggleQuarter(false);
            setDisplayTotals2ToggleYear(false);
            setDisplayTotals2Label('Previous Month');
        } else if ($date == totalsQuarterHour || $date == totalsQuarterDay || $date == totalsQuarterWeek || $date == totalsQuarterMonth || $date == totalsQuarterQuarter) {
            setDisplayTotals2ToggleHour(totalsQuarterHour);
            setDisplayTotals2ToggleDay(totalsQuarterDay);
            setDisplayTotals2ToggleWeek(totalsQuarterWeek);
            setDisplayTotals2ToggleMonth(totalsQuarterMonth);
            setDisplayTotals2ToggleQuarter(totalsQuarterQuarter);
            setDisplayTotals2ToggleYear(false);
            setDisplayTotals2Label('Previous Quarter');
        } else if ($date == totalsYearDay || $date == totalsYearWeek || $date == totalsYearMonth || $date == totalsYearQuarter || $date == totalsYearYear) {
            setDisplayTotals2ToggleHour(false);
            setDisplayTotals2ToggleDay(totalsYearDay);
            setDisplayTotals2ToggleWeek(totalsYearWeek);
            setDisplayTotals2ToggleMonth(totalsYearMonth);
            setDisplayTotals2ToggleQuarter(totalsYearQuarter);
            setDisplayTotals2ToggleYear(totalsYearYear);
            setDisplayTotals2Label('Previous Year');
        }

        // END

    };

    return (
        <>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-4 border-b pb-4 mb-4">

                <div className='flex items-center'>
                    <Text className='mr-2 flex-none'>Content Items</Text>
                    <MultiSelect>
                        <MultiSelectItem value="1">"Share Your Best Logistics Success Story and Win Exciting Prizes!"</MultiSelectItem>
                        <MultiSelectItem value="2">"Join the Fun: Logistics Trivia Challenge - Test Your Knowledge!"</MultiSelectItem>
                        <MultiSelectItem value="3">"Calling All Logistics Enthusiasts: Submit Your Innovative Ideas for Process Improvement!"</MultiSelectItem>
                        <MultiSelectItem value="4">"Logistics Photo Contest: Show Us Your Favorite On-the-Job Moments!"</MultiSelectItem>
                        <MultiSelectItem value="5">"Employee Spotlight: Recognizing Outstanding Contributions in Logistics!"</MultiSelectItem>
                        <MultiSelectItem value="6">"Get Active: Join our Logistics Step Challenge and Win Fitness Goodies!"</MultiSelectItem>
                        <MultiSelectItem value="7">"Announcing the Logistics Book Club: Expand Your Knowledge and Join the Discussion!"</MultiSelectItem>
                        <MultiSelectItem value="8">"Let's Celebrate! Join us for a Virtual Happy Hour with the Logistics Team!"</MultiSelectItem>
                        <MultiSelectItem value="9">"Time to Unwind: Join our Logistics Gaming Tournament and Claim the Champion Title!"</MultiSelectItem>
                        <MultiSelectItem value="10">"Spread the Joy: Share Heartwarming Customer Testimonials and Inspire Others!"</MultiSelectItem>
                    </MultiSelect>
                </div>
                <div className='flex items-center'>
                    <Text className='mr-2 flex-none'>User Groups</Text>
                    <MultiSelect>
                        <MultiSelectItem value="1">Global Team</MultiSelectItem>
                        <MultiSelectItem value="2">Route Planners</MultiSelectItem>
                        <MultiSelectItem value="3">Innovation Crew</MultiSelectItem>
                        <MultiSelectItem value="4">Photo Enthusiasts</MultiSelectItem>
                        <MultiSelectItem value="5">Supply Chain Heroes</MultiSelectItem>
                        <MultiSelectItem value="6">Fitness Buddies</MultiSelectItem>
                        <MultiSelectItem value="7">Book Clubbers</MultiSelectItem>
                        <MultiSelectItem value="8">Virtual Hangout Group</MultiSelectItem>
                        <MultiSelectItem value="9">Gaming Squad</MultiSelectItem>
                        <MultiSelectItem value="10">Customer Support Team</MultiSelectItem>
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

            {/* <div className="bg-green-100 border-2 border-green-400 p-4 rounded">
                <p className="mb-2 font-bold text-center">Test Zone</p>
                <div className="flex">
                    <div className="flex-1 text-center">
                        <p onClick={() => handleDateInput(totalsDayHour, 'hour')}>Day View</p>
                        <p onClick={() => handleDateInput(totalsWeekDay, 'day')}>Week View</p>
                        <p onClick={() => handleDateInput(totalsMonthWeek, 'week')}>Month View</p>
                        <p onClick={() => handleDateInput(totalsQuarterMonth, 'month')}>Quarter View</p>
                        <p onClick={() => handleDateInput(totalsYearMonth, 'month')}>Year View</p>
                    </div>
                    <div className="flex-1 text-center">
                        <p onClick={() => handleDateInput2(totalsDayHour, 'hour')}>Day View</p>
                        <p onClick={() => handleDateInput2(totalsWeekDay, 'day')}>Week View</p>
                        <p onClick={() => handleDateInput2(totalsMonthWeek, 'week')}>Month View</p>
                        <p onClick={() => handleDateInput2(totalsQuarterMonth, 'month')}>Quarter View</p>
                        <p onClick={() => handleDateInput2(totalsYearMonth, 'month')}>Year View</p>
                    </div>
                </div>
            </div> */}

            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-4 border-b pb-4">

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

                </div>
                <div className='flex items-center'>
                    <Text className='mr-2 flex-none'>Compare Against:</Text>

                    <DateRangePicker
                        className="max-w-md mx-auto"
                        value={value2}
                        onValueChange={setValue2}
                        selectPlaceholder="Select"
                        color="rose"
                    >

                        {/* <DateRangePickerItem key="today" value="today" from={new Date()} to={new Date()} onClick={() => handleDateInput2(totalsDayHour, 'hour')}>
                            Today
                        </DateRangePickerItem> */}
                        <DateRangePickerItem key="yesterday2" value="yesterday2" from={new Date(yyyy, mm - 1, dd - 1)} to={new Date(yyyy, mm - 1, dd)} onClick={() => handleDateInput2(totalsDayHour, 'hour')}>
                            Yesterday (11/10/23)
                        </DateRangePickerItem>
                        <DateRangePickerItem key="7days2" value="7days2" from={new Date(yyyy, mm - 1, dd - 7)} onClick={() => handleDateInput2(totalsWeekDay, 'day')}>
                            Previous 7 Days (27/09/23 - 04/10/23)
                        </DateRangePickerItem>
                        <DateRangePickerItem
                            key="mtd2"
                            value="mtd2"
                            from={new Date(yyyy, mm - 1, 1)}
                            to={new Date(yyyy, mm - 1, dd)}
                            onClick={() => handleDateInput2(totalsMonthWeek, 'week')}
                        >
                            Last Month (September)
                        </DateRangePickerItem>
                        <DateRangePickerItem
                            key="half2"
                            value="half2"
                            from={new Date(2024, 3, 1)}
                            to={new Date(2024, 6, 31)}
                            onClick={() => handleDateInput2(totalsQuarterMonth, 'month')}
                        >
                            Last Quarter (Q2)
                        </DateRangePickerItem>
                        <DateRangePickerItem key="ytd2" value="ytd2" from={new Date(2024, 0, 1)} onClick={() => handleDateInput2(totalsYearQuarter, 'quarter')}>
                            Last Year (2022)
                        </DateRangePickerItem>
                    </DateRangePicker>

                </div>

            </Grid>

            <Grid numItemsMd={1} numItemsLg={2} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                    <Flex className="flex-col align-start items-start">
                        <Flex className="mb-2" alignItems="center">
                            <Title className="flex w-full">{displayTotals1Label}</Title>
                            <TabGroup index={selectedChart1} onIndexChange={setSelectedChart1} className="flex justify-end">
                                <TabList variant="solid">
                                    <Tab icon={BarChart4Icon}>Bar</Tab>
                                    <Tab icon={LineChartIcon}>Line</Tab>
                                </TabList>
                            </TabGroup>
                        </Flex>
                        <div className="flex align-end full">
                            <MultiSelect placeholder="Include..." className="max-w-100">
                                <MultiSelectItem value="1" onClick={() => setShowLikes(!showLikes)}>Likes</MultiSelectItem>
                                <MultiSelectItem value="2" onClick={() => setShowComments(!showComments)}>Comments</MultiSelectItem>
                                <MultiSelectItem value="25">Published Content</MultiSelectItem>
                                <MultiSelectItem value="26">User Logins</MultiSelectItem>
                                <MultiSelectItem value="3" onClick={() => setShowUGC(!showUGC)}>UGC Posts</MultiSelectItem>
                                <MultiSelectItem value="4" onClick={() => setShowTotalViews(!showTotalViews)}>Total Views</MultiSelectItem>
                            </MultiSelect>
                            <Select className="ml-2 max-w-100" placeholder="Select Range..">
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
                            categories={data}
                            colors={["indigo", "emerald", "rose", "amber", "violet", "red", "pink"]}
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
                                categories={data}
                                colors={["indigo", "emerald", "rose", "amber", "violet", "red", "pink"]}
                                startEndOnly={false}
                                showLegend={true}
                                curveType={"linear"}
                                showAnimation={true}
                                showGradient={true}
                                onValueChange={() => { console.log('test') }}
                            />
                        </>)}
                </Card>
                <Card className='flex flex-col justify-between'>
                    <Flex className="flex-col align-start items-start">
                        <Flex className="space-x-8 mb-2" justifyContent="between" alignItems="center">
                            <div class="flex w-full">
                                <Title className="w-full">{displayTotals2Label}</Title>
                            </div>
                            <TabGroup index={selectedChart2} onIndexChange={setSelectedChart2} className="flex justify-end">
                                <TabList variant="solid">
                                    <Tab icon={BarChart4Icon}>Bar</Tab>
                                    <Tab icon={LineChartIcon}>Line</Tab>
                                </TabList>
                            </TabGroup>
                        </Flex>
                        <div className="flex align-end full">
                            <MultiSelect placeholder="Include..." className="max-w-100">
                                <MultiSelectItem value="1" onClick={() => setShowLikes2(!showLikes2)}>Likes</MultiSelectItem>
                                <MultiSelectItem value="2" onClick={() => setShowComments2(!showComments2)}>Comments</MultiSelectItem>
                                <MultiSelectItem value="25">Published Content</MultiSelectItem>
                                <MultiSelectItem value="26">User Logins</MultiSelectItem>
                                <MultiSelectItem value="3" onClick={() => setShowUGC2(!showUGC2)}>UGC Posts</MultiSelectItem>
                                <MultiSelectItem value="4" onClick={() => setShowTotalViews2(!showTotalViews2)}>Total Views</MultiSelectItem>
                            </MultiSelect>
                            <Select className="ml-2 max-w-100" placeholder="Select Range..">

                                <SelectItem key="sec1" value="1" onClick={() => handleDateInput2(displayTotals2ToggleHour, 'hour')} className={!displayTotals2ToggleHour ? 'hidden' : ''}>Hourly</SelectItem>
                                <SelectItem key="sec2" value="2" onClick={() => handleDateInput2(displayTotals2ToggleDay, 'day')} className={!displayTotals2ToggleDay ? 'hidden' : ''}>Daily</SelectItem>
                                <SelectItem key="sec3" value="3" onClick={() => handleDateInput2(displayTotals2ToggleWeek, 'week')} className={!displayTotals2ToggleWeek ? 'hidden' : ''}>Weekly</SelectItem>
                                <SelectItem key="sec4" value="4" onClick={() => handleDateInput2(displayTotals2ToggleMonth, 'month')} className={!displayTotals2ToggleMonth ? 'hidden' : ''}>Monthly</SelectItem>
                                <SelectItem key="sec5" value="5" onClick={() => handleDateInput2(displayTotals2ToggleQuarter, 'quarter')} className={!displayTotals2ToggleQuarter ? 'hidden' : ''}>Quarterly</SelectItem>
                                <SelectItem key="sec6" value="6" onClick={() => handleDateInput2(displayTotals2ToggleYear, 'year')} className={!displayTotals2ToggleYear ? 'hidden' : ''}>Yearly</SelectItem>

                                {/* {displayTotals1ToggleHour ? <SelectItem key="1" value="1" onClick={() => handleDateInput(displayTotals1ToggleHour, 'hour')}>Hourly</SelectItem> : ''}
                                {displayTotals1ToggleDay ? <SelectItem key="2" value="2" onClick={() => handleDateInput(displayTotals1ToggleDay, 'day')}>Daily</SelectItem> : ''}
                                {displayTotals1ToggleWeek ? <SelectItem key="3" value="3" onClick={() => handleDateInput(displayTotals1ToggleWeek, 'week')}>Weekly</SelectItem> : ''}
                                {displayTotals1ToggleMonth ? <SelectItem key="4" value="4" onClick={() => handleDateInput(displayTotals1ToggleMonth, 'month')}>Monthly</SelectItem> : ''}
                                {displayTotals1ToggleQuarter ? <SelectItem key="5" value="5" onClick={() => handleDateInput(displayTotals1ToggleQuarter, 'quarter')}>Quarterly</SelectItem> : ''}
                                {displayTotals1ToggleYear ? <SelectItem key="6" value="6" onClick={() => handleDateInput(displayTotals1ToggleYear, 'year')}>Yearly</SelectItem> : ''} */}
                            </Select>
                            <div class="flex content-center ml-3">
                                <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                                <label for="hs-default-checkbox" class="text-sm text-gray-500 ml-1 dark:text-gray-400 self-center">Mimic</label>
                            </div>
                        </div>
                    </Flex>
                    {/* <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex> */}
                    {selectedChart2 === 0 ? (
                        <BarChart
                            className=" mt-4"
                            data={displayTotals2}
                            index={displayTotals2Index}
                            categories={data2}
                            colors={["indigo", "emerald", "rose", "amber", "violet", "red", "pink"]}
                            startEndOnly={false}
                            showLegend={true}
                            // curveType={"linear"}
                            showAnimation={true}
                            onValueChange={() => { console.log('test') }}
                        />) : (
                        <>
                            <AreaChart
                                className=" mt-4"
                                data={displayTotals2}
                                index={displayTotals2Index}
                                categories={data2}
                                colors={["indigo", "emerald", "rose", "amber", "violet", "red", "pink"]}
                                startEndOnly={false}
                                showLegend={true}
                                curveType={"linear"}
                                showAnimation={true}
                                showGradient={true}
                                onValueChange={() => { console.log('test') }}
                            />
                        </>)}
                </Card>

                {/* <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={totalsWeekHour}
                        index="hour"
                        // categories={["This Year", "Last Year"]}
                        categories={["Views", "Likes", "Comments"]}
                        colors={["indigo", "red", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                        autoMinValue={true}
                        connectNulls={true}
                    // yAxisWidth={70}
                    />
                </Card> */}

                {/* <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={totalsMonthWeek}
                        index="week"
                        categories={["Views"]}
                        // categories={["Views", "Views2"]}
                        colors={["indigo", "red", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                    // yAxisWidth={70}
                    />
                </Card> */}

            </Grid>

            {/* <Grid numItemsMd={1} numItemsLg={2} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={totalsQuarterHour}
                        index="hour"
                        // categories={["This Year", "Last Year"]}
                        categories={["Views", "Likes", "Comments"]}
                        colors={["indigo", "red", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                        autoMinValue={true}
                        connectNulls={true}
                    // yAxisWidth={70}
                    />
                </Card>

                <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={totalsQuarterDay}
                        index="day"
                        categories={["Views"]}
                        // categories={["Views", "Views2"]}
                        colors={["indigo", "red", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                    // yAxisWidth={70}
                    />
                </Card>

            </Grid>

            <Grid numItemsMd={1} numItemsLg={2} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={totalsMonthHour}
                        index="hour"
                        // categories={["This Year", "Last Year"]}
                        categories={["Views"]}
                        colors={["indigo", "red", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                        autoMinValue={true}
                        connectNulls={true}
                    // yAxisWidth={70}
                    />
                </Card>

                <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={totalsMonthDay}
                        index="day"
                        categories={["Views"]}
                        // categories={["Views", "Views2"]}
                        colors={["indigo", "red", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                    // yAxisWidth={70}
                    />
                </Card>

            </Grid>

            <Grid numItemsMd={1} numItemsLg={2} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={totalsWeekHour}
                        index="hour"
                        // categories={["This Year", "Last Year"]}
                        categories={["Views", "Likes", "Comments"]}
                        colors={["indigo", "red", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                        autoMinValue={true}
                        connectNulls={true}
                    // yAxisWidth={70}
                    />
                </Card>

                <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={totalsWeekDay}
                        index="day"
                        categories={["Views", "Likes", "Comments"]}
                        // categories={["Views", "Views2"]}
                        colors={["indigo", "red", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                    // yAxisWidth={70}
                    />
                </Card>

            </Grid>

            <Grid numItemsMd={1} numItemsLg={1} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={totalsDayHour}
                        index="hour"
                        // categories={["This Year", "Last Year"]}
                        categories={["Views"]}
                        colors={["indigo", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                    // yAxisWidth={70}
                    />
                </Card>

                <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={totalsDayDay}
                        index="day"
                        categories={["Views"]}
                        // categories={["Views", "Views2"]}
                        colors={["indigo", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                    // yAxisWidth={70}
                    />
                </Card>

            </Grid>

            <Grid numItemsMd={1} numItemsLg={1} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <BarChart
                        className=" mt-4"
                        data={viewsDay}
                        index="hour"
                        // categories={["This Year", "Last Year"]}
                        categories={["Views", "Views2"]}
                        colors={["indigo", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                    // yAxisWidth={70}
                    />
                </Card>

                <Card className='flex flex-col justify-between'>
                    <Flex className="space-x-8 justify-between">
                        <Text className="mb-2"><Bold>Content Views</Bold></Text>
                        <div>
                            <Select value="1">
                                <SelectItem key="1" value="1">Hour</SelectItem>
                                <SelectItem key="2" value="2">Day</SelectItem>
                                <SelectItem key="3" value="3">Week</SelectItem>
                                <SelectItem key="4" value="4">Month</SelectItem>
                                <SelectItem key="5" value="5">Quarter</SelectItem>
                                <SelectItem key="6" value="6">Year</SelectItem>
                            </Select>
                        </div>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                        <Metric>{week ? 1568 : 369}</Metric>
                    </Flex>
                    <AreaChart
                        className=" mt-4"
                        data={viewsYTD}
                        index="month"
                        categories={["This Year", "Last Year"]}
                        // categories={["Views", "Views2"]}
                        colors={["indigo", "cyan"]}
                        startEndOnly={week ? false : true}
                        showLegend={true}
                        curveType={"linear"}
                        showAnimation={true}
                        // onClickLegendItem={true}
                        onValueChange={() => { console.log('test') }}
                    // yAxisWidth={70}
                    />
                </Card>

            </Grid> */}

            <Grid numItemsSm={2} numItemsLg={4} className="gap-6 mt-6">
                {blocks.map((item) => (
                    <Card key={item.title} onClick={() => setIsModal(!isModal)} className="cursor-pointer">
                        <Flex alignItems="start">
                            <Text className="mb-2">{item.title}</Text>
                        </Flex>
                        <Flex className="space-x-3 truncate mb-4" justifyContent="start" alignItems="baseline">
                            <Icon icon={item.icon} variant="light" size="xs" color="neutral" tooltip="Up 20" className="bg-opacity-10 hover:bg-opacity-5" />
                            <Metric>{item.metric}</Metric>
                            <Text>vs. <Bold>{item.metricPrev}</Bold></Text>
                        </Flex>
                        <Flex alignItems="start">
                            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
                            <AreaChart
                                className="h-7 opacity-30 hover:opacity-100 overflow-hidden"
                                data={blocksViewsDay}
                                index={"hour"}
                                categories={["This Period", "Previous Period"]}
                                colors={['lime', 'indigo']}
                                // startEndOnly={true}
                                showLegend={false}
                                showXAxis={false}
                                showYAxis={false}
                                showGridLines={false}
                                curveType="natural"
                                showAnimation={true}
                                showTooltip={false}
                            />
                        </Flex>
                    </Card>
                ))}
            </Grid>

            {isModal ? <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsModal(!isModal)}></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
                            <div className="bg-white p-6">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center sm:mt-0 sm:text-left">
                                        <div className="flex flex-shrink-0 items-center justify-between rounded-t-md mb-4">
                                            <Title>Likes</Title>
                                            <button
                                                type="button"
                                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                                data-te-modal-dismiss
                                                aria-label="Close"
                                                onClick={() => setIsModal(!isModal)}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <Flex className="space-x-3 truncate mb-4" justifyContent="start" alignItems="baseline">
                                            {/* <Icon icon={item.icon} variant="light" size="xs" color="neutral" tooltip="Up 20" /> */}
                                            <span className="tremor-Icon-root inline-flex flex-shrink-0 items-center bg-neutral-100 text-neutral-500 rounded-tremor-default px-1.5 py-1.5"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.08404 2.57991C5.84727 2.26299 6.66554 2.09985 7.49195 2.09985C8.31836 2.09985 9.13663 2.26299 9.89986 2.57991C10.6631 2.89682 11.3562 3.36129 11.9396 3.94666L11.9428 3.94994L12.0001 4.00793L12.0573 3.94994L12.0606 3.94666C12.6439 3.36129 13.3371 2.89682 14.1003 2.57991C14.8635 2.26299 15.6818 2.09985 16.5082 2.09985C17.3346 2.09985 18.1529 2.26299 18.9161 2.57991C19.6791 2.89671 20.372 3.36097 20.9552 3.94606C23.4521 6.44364 23.5077 10.5732 20.549 13.5874L20.5426 13.5938L12.6938 21.4426C12.5098 21.6266 12.2603 21.73 12.0001 21.73C11.7399 21.73 11.4903 21.6266 11.3063 21.4426L3.45115 13.5874C0.492464 10.5733 0.548014 6.44363 3.04493 3.94605C3.62814 3.36096 4.32108 2.89671 5.08404 2.57991Z" fill="#D12E3C"></path></svg></span>
                                            <Metric>9734</Metric>
                                            <Text>vs. <Bold>2734</Bold></Text>
                                        </Flex>
                                        <div className="mt-2">
                                            <Grid numItemsMd={1} numItemsLg={1} className="gap-6 mt-6">
                                                <Card className='flex flex-col justify-between' style={{ width: 960 }}>
                                                    <Flex className="flex-col align-start items-start">

                                                        <Flex className="flex-row items-center items-start mb-4">
                                                            <Title className="grow"><Bold className="break-normal">{displayTotals1Label} vs {displayTotals2Label}</Bold></Title>
                                                            <div className="flex align-end full">
                                                                <Select className="ml-2 max-w-100">
                                                                    <SelectItem key="1" value="1" className={!displayTotals1ToggleHour ? 'hidden' : ''}>Hourly</SelectItem>
                                                                    <SelectItem key="2" value="2" className={!displayTotals1ToggleDay ? 'hidden' : ''}>Daily</SelectItem>
                                                                    <SelectItem key="3" value="3" className={!displayTotals1ToggleWeek ? 'hidden' : ''}>Weekly</SelectItem>
                                                                    <SelectItem key="4" value="4" className={!displayTotals1ToggleMonth ? 'hidden' : ''}>Monthly</SelectItem>
                                                                    <SelectItem key="5" value="5" className={!displayTotals1ToggleQuarter ? 'hidden' : ''}>Quarterly</SelectItem>
                                                                    <SelectItem key="6" value="6" className={!displayTotals1ToggleYear ? 'hidden' : ''}>Yearly</SelectItem>
                                                                </Select>
                                                            </div>
                                                        </Flex>

                                                        <Grid numItemsMd={2} numItemsLg={2} className="gap-6 pb-4">

                                                            <div className='flex items-center'>
                                                                <Text className='mr-2 flex-none'>Show Insights for</Text>

                                                                <DateRangePicker
                                                                    className="max-w-md mx-auto"
                                                                    value={value}
                                                                    onValueChange={setValue}
                                                                    selectPlaceholder="Select"
                                                                    color="rose"
                                                                >

                                                                    <DateRangePickerItem key="today" value="today" from={new Date()} to={new Date()} onClick={() => handleDateInput(totalsDayHour, 'hour')}>
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
                                                                    <DateRangePickerItem key="ytd" value="ytd" from={new Date(2024, 0, 1)} onClick={() => handleDateInput(totalsYearMonth, 'month')}>
                                                                        Year to date
                                                                    </DateRangePickerItem>
                                                                </DateRangePicker>

                                                            </div>
                                                            <div className='flex items-center'>
                                                                <Text className='mr-2 flex-none'>Compare Against:</Text>

                                                                <DateRangePicker
                                                                    className="max-w-md mx-auto"
                                                                    value={value2}
                                                                    onValueChange={setValue2}
                                                                    selectPlaceholder="Select"
                                                                    color="rose"
                                                                >

                                                                    {/* <DateRangePickerItem key="today" value="today" from={new Date()} to={new Date()} onClick={() => handleDateInput2(totalsDayHour, 'hour')}>
                            Today
                        </DateRangePickerItem> */}
                                                                    <DateRangePickerItem key="yesterday2" value="yesterday2" from={new Date(yyyy, mm - 1, dd - 1)} to={new Date(yyyy, mm - 1, dd)} onClick={() => handleDateInput2(totalsDayHour, 'hour')}>
                                                                        Yesterday (11/10/23)
                                                                    </DateRangePickerItem>
                                                                    <DateRangePickerItem key="7days2" value="7days2" from={new Date(yyyy, mm - 1, dd - 7)} onClick={() => handleDateInput2(totalsWeekDay, 'day')}>
                                                                        Previous 7 Days (27/09/23 - 04/10/23)
                                                                    </DateRangePickerItem>
                                                                    <DateRangePickerItem
                                                                        key="mtd2"
                                                                        value="mtd2"
                                                                        from={new Date(yyyy, mm - 1, 1)}
                                                                        to={new Date(yyyy, mm - 1, dd)}
                                                                        onClick={() => handleDateInput2(totalsMonthWeek, 'week')}
                                                                    >
                                                                        Last Month (September)
                                                                    </DateRangePickerItem>
                                                                    <DateRangePickerItem
                                                                        key="half2"
                                                                        value="half2"
                                                                        from={new Date(2024, 3, 1)}
                                                                        to={new Date(2024, 6, 31)}
                                                                        onClick={() => handleDateInput2(totalsQuarterMonth, 'month')}
                                                                    >
                                                                        Last Quarter (Q2)
                                                                    </DateRangePickerItem>
                                                                    <DateRangePickerItem key="ytd2" value="ytd2" from={new Date(2024, 0, 1)} onClick={() => handleDateInput2(totalsYearQuarter, 'quarter')}>
                                                                        Last Year (2022)
                                                                    </DateRangePickerItem>
                                                                </DateRangePicker>

                                                            </div>

                                                        </Grid>
                                                    </Flex>
                                                    <AreaChart
                                                        className=" mt-4"
                                                        data={blocksViewsDay}
                                                        index={"hour"}
                                                        categories={["This Period", "Previous Period"]}
                                                        colors={["indigo", "emerald", "rose", "amber", "violet", "red", "pink"]}
                                                        startEndOnly={false}
                                                        showLegend={true}
                                                        curveType={"monotone"}
                                                        showAnimation={true}
                                                        onValueChange={() => { console.log('test') }}
                                                    />
                                                </Card>
                                            </Grid>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null}
        </>
    );
}