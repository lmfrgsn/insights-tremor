import {
  TabGroup, Tab, TabList, TabPanel, TabPanels
} from "@tremor/react";
import Header from "./components/Header"
import Overview from "./tabs/Overview";
import Compare from "./tabs/Compare";
import Users from "./tabs/Users";
// import Search from "./tabs/Search";
import Reports from "./tabs/Reports";
import './App.css';

function App() {

  return (
    <div className="App">

      <Header />

      <div className="container mx-auto px-4">
        <TabGroup>
          <TabList className="mt-8">
            <Tab>Overview</Tab>
            <Tab>Compare</Tab>
            <Tab>Users</Tab>
            <Tab>Reports</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Overview />
            </TabPanel>
            <TabPanel>
              <Compare />
            </TabPanel>
            <TabPanel>
              <Users />
            </TabPanel>
            <TabPanel>
              <Reports />
            </TabPanel>
            <TabPanel>
              {/* <Search /> */}
            </TabPanel>
            <TabPanel>
              {/* Notifcations */}
            </TabPanel>
            <TabPanel>
              {/* Activity Feed */}
            </TabPanel>
          </TabPanels>
        </TabGroup>
        <div className="my-16 flex justify-center text-sm text-gray-400">
          <p>© 2024 Thrive.App Ltd.</p>
          <p className="mx-12">Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default App;
