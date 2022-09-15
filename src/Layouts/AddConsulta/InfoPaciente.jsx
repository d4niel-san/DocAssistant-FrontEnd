import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";

export const InfoPaciente = () => {
  const { pacienteBuscado } = useContext(ApiContext);

  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      {console.log(pacienteBuscado)}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            disabled
            fullWidth
            defaultValue={pacienteBuscado.FirstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            disabled
            fullWidth
            defaultValue={pacienteBuscado.LastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            disabled
            fullWidth
            defaultValue={pacienteBuscado.Ocupacion}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            disabled
            fullWidth
            defaultValue={pacienteBuscado.Email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            disabled
            fullWidth
            defaultValue={pacienteBuscado.Cell}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            disabled
            fullWidth
            defaultValue={pacienteBuscado.DNI}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Grid item sx={{ marginBottom: "0.5rem" }}></Grid>
      </Grid>
    </Box>
  );
};
