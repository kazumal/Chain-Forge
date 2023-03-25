// src/components/Sidebar.js
import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const items = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Chain Template Selection", path: "/chain-template" },
  { label: "Custom Module Creation", path: "/custom-module" },
  { label: "ASC Management", path: "/asc-management" },
  { label: "Validator Management", path: "/validator-management" },
  { label: "RPC Node Management", path: "/rpc-node-management" },
  { label: "Monitoring and Analytics", path: "/monitoring-analytics" },
  { label: "Billing and Subscription", path: "/billing-subscription" },
  { label: "User Settings and Profile", path: "/user-settings-profile" },
  { label: "Documentation and Support", path: "/documentation-support" }
];

const Sidebar = () => (
  <List>
    {items.map((item, index) => (
      <React.Fragment key={item.label}>
        <Link to={item.path}>
          <ListItem button>
            <ListItemText primary={item.label} />
          </ListItem>
        </Link>
        {index < items.length - 1 && <Divider />}
      </React.Fragment>
    ))}
  </List>
);

export default Sidebar;