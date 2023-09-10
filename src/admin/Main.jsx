import React from 'react';
import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Main() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  return (
    <div className="grid-container">
      {/* Header */}
      <header className="header bg-pink-200 py-4 px-6 flex justify-between items-center">
        <div className="header-left">
          <span className="material-icons-outlined">search</span>
        </div>
        <div className="header-right space-x-4">
          <span className="material-icons-outlined">notifications</span>
          <span className="material-icons-outlined">email</span>
          <span className="material-icons-outlined">account_circle</span>
        </div>
      </header>

      {/* Sidebar */}
      <aside id="sidebar" className='h-screen bg-pink-900 py-4 px-2 w-64' >
        <div className="sidebar-title text-xl flex justify-between items-center px-5">
          <div className="sidebar-brand flex items-center space-x-2 text-white">
           Admin Dashboard
          </div>
        </div>
        <ul className="sidebar-list mt-5">
          <li className="sidebar-list-item p-3">
            <span className="material-icons-outlined">dashboard</span>Dashboard
          </li>
          <li className="sidebar-list-item p-3">
            <span className="material-icons-outlined">person</span>Users
          </li>
          <li className="sidebar-list-item p-3">
            <span className="material-icons-outlined">money</span>Donations
          </li>
          <li className="sidebar-list-item p-3">
            <span className="material-icons-outlined">add_shopping_cart</span>Hospitals
          </li>
          <li className="sidebar-list-item p-3">
            <span className="material-icons-outlined">shopping_cart</span>Sales Orders
          </li> 
        </ul>
      </aside>

      {/* Main */}
     {/* Main */}
     <main className="main-container">
          <div className="main-title">
            <p className="font-bold">DASHBOARD</p>
          </div>
          <div className="main-cards justify-between items-center">
          <div className="card">
            <div className="card-inner">
              <p className="text-primary">USERS</p>
              <span className="material-icons-outlined text-blue">person</span>
            </div>
            <span className="text-primary font-bold">249</span>
          </div>
          <div className="card">
            <div className="card-inner">
              <p className="text-primary">DONATIONS</p>
              <span className="material-icons-outlined text-orange">money</span>
            </div>
            <span className="text-primary font-bold">83</span>
          </div>
          <div className="card">
            <div className="card-inner">
              <p className="text-primary">SALES ORDERS</p>
              <span className="material-icons-outlined text-green">shopping_cart</span>
            </div>
            <span className="text-primary font-bold">79</span>
          </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
      </main>
    </div>
  );
}

export default Main;