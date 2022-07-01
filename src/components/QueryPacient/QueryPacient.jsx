//#region imports

import { PersonAddAlt, PersonSearch } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { ApiContext } from "../../context/apiContext";
import * as styles from "./QueryPacientStyles";

//#endregion

export const QueryPacient = () => {
  const { createPacient } = useContext(ApiContext);

  const SignUpSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      cell: data.get("cell"),
      dni: data.get("dni"),
    };
    console.log(newUser);
    createPacient(newUser);
  };

  const filters = [
    {
      value: "cell",
      label: "Celular",
      data: "Numero",
      type: "tel",
    },
    {
      value: "dni",
      label: "DNI",
      data: "Numero",
      type: "tel",
    },
    {
      value: "lastName",
      label: "Apellido",
      data: "Texto",
      type: "text",
    },
  ];

  const [filter, setFilter] = useState(filters[1]);

  const handleChange = (event) => {
    const result = filters.find(
      (element) => element.value === event.target.value
    );
    setFilter(result);
  };

  return (
    <Grid item xs={false} sm={4} md={7} sx={styles.background}>
      <Container component="main" maxWidth="sm" sx={styles.Container}>
        <CssBaseline />
        <Box sx={styles.Box}>
          <Avatar sx={styles.Avatar}>
            <PersonSearch color="primary" />
          </Avatar>
          <Typography component="h1" variant="h5" sx={styles.AddPacientText}>
            Consultar Datos Paciente
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={SignUpSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="filter"
                  fullWidth
                  select
                  label="Buscar por"
                  value={filter.value}
                  onChange={handleChange}
                  size="small"
                >
                  {filters.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label={filter.data}
                  type={filter.type}
                  id="dni"
                  size="small"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={styles.Button}
            >
              Consultar Paciente
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item sx={{ marginBottom: "0.5rem" }}></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
};
