import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Dropdown } from "./DropDown";
import { ApiContext } from "../context/apiContext";
import { filters } from "../Layouts/QueryPacient/filters";
import * as styles from "./QueryPacientFormStyles";

export const QueryPacientForm = () => {
  const { searchPacient } = useContext(ApiContext);
  const [filter, setFilter] = useState(filters[1]);

  const SearchSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchUser = {
      filter: data.get("filter"),
      data: data.get("data"),
    };
    searchPacient(searchUser);
  };

  const handleChange = (event) => {
    const result = filters.find(
      (element) => element.value === event.target.value
    );
    setFilter(result);
  };

  return (
    <>
      <Typography component="h1" variant="h5" sx={styles.AddPacientText}>
        Consultar Datos Paciente
      </Typography>
      <Box component="form" noValidate onSubmit={SearchSubmit} sx={{ mt: 3 }}>
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
        <Button type="submit" fullWidth variant="contained" sx={styles.Button}>
          Consultar Paciente
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item sx={{ marginBottom: "0.5rem" }}></Grid>
        </Grid>
      </Box>
    </>
  );
};
