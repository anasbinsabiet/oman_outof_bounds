import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const baseurl = "http://127.0.0.1:5000";
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState("");

  const columnsIp = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "IP Address",
      dataIndex: "ip",
      key: "ip",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
  ];
  const dataSourceIp = [
    {
      key: '1',
      email: 'mike@gmail.com',
      ip: '32.76.09.01',
      country: 'Oman',
    },
    {
      key: '2',
      email: 'sam@gmail.com',
      ip: '55.02.01.01',
      country: 'Oman',
    },
    {
      key: '3',
      email: 'john@gmail.com',
      ip: '11.76.09.02',
      country: 'Oman',
    },
    {
      key: '4',
      email: 'doe@gmail.com',
      ip: '33.11.19.03',
      country: 'Oman',
    },
    {
      key: '5',
      email: 'lusi@gmail.com',
      ip: '66.76.02.08',
      country: 'Oman',
    },
  ];
  
  const logoutAction = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${baseurl}/get_content`)
      .then((r) => {
        setDataSource(r?.data?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="dbody">
      <div className="Side-bar">
        <div className="Box-logo">Admin_Panel</div>
        <div className="Box-menu">
          <ul className="ul-menu" style={{ paddingLeft: "0px" }}>
            <li className="li-mneu Active-menu">
              <svg
                className="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width={512}
                height={512}
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                  dangerouslySetInnerHTML={{ __html: "" }}
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                  dangerouslySetInnerHTML={{ __html: "" }}
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                  dangerouslySetInnerHTML={{ __html: "" }}
                />
                <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
                <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
                <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
              </svg>
              <div className="title-menu">Dashboard</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="Page">
        <div className="Box-header">
          <div className="box-alert-infomation">
            <div className="box-infomation">
              <button
                type="button"
                className="info-name"
                style={{
                  border: "none",
                  padding: "0px 15px",
                  cursor: "pointer",
                }}
                onClick={() => logoutAction()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="Box-elements">
          <div className="box-element-flex">
            <div className="transction">
              <div className="title-element">Visitor IP Address</div>
              <br />
              <div class="table-responsive">
                <Table rowKey="id" dataSource={dataSourceIp} columns={columnsIp} />
              </div>
            </div>
          </div>
          <div className="box-element-flex">
            <div className="transction">
              <div className="title-element">List of users</div>
              <br />
              <div class="table-responsive">
                <Table rowKey="id" dataSource={dataSource} columns={columns} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
