//#region imports

import { PersonSearch } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Dropdown } from "../../components/DropDown";
import { ApiContext } from "../../context/apiContext";
import { filters } from "./filters";
import * as styles from "./QueryPacientStyles";

//#endregion

export const QueryPacient = () => {
  const { searchPacient } = useContext(ApiContext);

  const SearchSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchUser = {
      filter: data.get("filter"),
      data: data.get("data"),
    };
    searchPacient(searchUser);
  };

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
            onSubmit={SearchSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Dropdown
                  valueByDefault={filter.value}
                  handleChange={handleChange}
                  options={filters}
                  id="filter"
                  label="Buscar por"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label={filter.data}
                  type={filter.type}
                  size="small"
                  id="dni"
                  name="data"
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
