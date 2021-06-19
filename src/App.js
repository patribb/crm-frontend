import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import TicketLists from './pages/ticket-listin/TicketLists';
//import Dashboard from './pages/dashboard/Dashboard';
//import AddTicket from './pages/new-ticket/AddTicket';
//import Entry from "./pages/entry/Entry";


function App() {
  return (
    <div>
  {/* <Entry /> */}
  <DefaultLayout>
    {/* <Dashboard /> */}
    {/* <AddTicket /> */}
    <TicketLists />
  </DefaultLayout>
    </div>
  );
}

export default App;
