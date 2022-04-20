import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

// mui material ui
import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

// icons
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function AlertForm() {
  // instances
  const dispatch = useDispatch();
  const alertList = useSelector((state) => state.alertList.items);

  // states
  const [alertType, setAlertType] = React.useState("success");

  // functions
  // get value from the form and call dispatch
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newAlert = {
      alertId: data.get("alertId"),
      alertType: alertType,
      alertTitle: data.get("alertTitle"),
      text: data.get("text"),
      timeLimit: parseFloat(data.get("timeLimit")) * 1000,
      link: data.get("link"),
    };

    // check there is no duplicate alertId
    var already_exist_numbers = alertList.map((item) => item.alertId);

    // if alertId is already existed, windows will alert to fill another alertID if not call the dispatch function
    if (already_exist_numbers.includes(newAlert.alertId)) {
      alert("The Alert ID already exists");
    } else {
      dispatch({
        type: "ADD_TO_ALERT_LIST",
        payloads: {
          newAlert: newAlert,
        },
      });
    }
  };

  return (
    <Container>
      <CssBaseline />
      <Box
        fullWidth
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <NotificationsActiveIcon />
        </Avatar>

        <Typography component="h1" variant="body1" sx={{ fontWeight: "500" }}>
          .ALERTS.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 3, width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                autoFocus
                type={"number"}
                variant="filled"
                id="alertId"
                name="alertId"
                label="ID"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl variant="filled" fullWidth>
                <InputLabel id="alertType">Alert Type</InputLabel>
                <Select
                  labelId="alertType"
                  id="alertType"
                  name="alertType"
                  value={alertType}
                  label="Alert Type"
                  onChange={(e) => {
                    setAlertType(e.target.value);
                  }}
                >
                  <MenuItem value={"info"}>Info</MenuItem>
                  <MenuItem value={"success"}>Success</MenuItem>
                  <MenuItem value={"warning"}>Warning</MenuItem>
                  <MenuItem value={"error"}>Error</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="filled"
                id="alertTitle"
                name="alertTitle"
                label="Title"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type={"number"}
                variant="filled"
                id="timeLimit"
                name="timeLimit"
                label="Time Limit (in seconds)"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="filled"
                id="text"
                name="text"
                label="Text"
                multiline
                rows={3}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="filled"
                id="link"
                name="link"
                label="Link"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            type={"submit"}
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Create new alert
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
