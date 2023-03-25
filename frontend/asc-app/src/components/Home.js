// src/components/Home.js
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Route, Routes, Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import ChainTemplateSelection from "./ChainTemplateSelection";
import CustomModuleCreation from "./CustomModuleCreation";
import ASCManagement from "./ASCManagement";
import ValidatorManagement from "./ValidatorManagement";
import RPCNodeManagement from "./RPCNodeManagement";
import MonitoringAnalytics from "./MonitoringAnalytics";
import BillingSubscription from "./BillingSubscription";
import UserSettingsProfile from "./UserSettingsProfile";
import DocumentationSupport from "./DocumentationSupport";

function Home() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <Box>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/chain-template" element={<ChainTemplateSelection />} />
                <Route path="/custom-module" component={CustomModuleCreation} />
                <Route path="/asc-management" component={ASCManagement} />
                <Route path="/validator-management" component={ValidatorManagement} />
                <Route path="/rpc-node-management" component={RPCNodeManagement} />
                <Route path="/monitoring-analytics" component={MonitoringAnalytics} />
                <Route path="/billing-subscription" component={BillingSubscription} />
                <Route path="/user-settings-profile" component={UserSettingsProfile} />
                <Route path="/documentation-support" component={DocumentationSupport} />
              </Routes>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default Home;