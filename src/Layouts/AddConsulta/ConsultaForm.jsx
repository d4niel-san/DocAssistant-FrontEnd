import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const ConsultaForm = () => {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField size="small" helperText="Día" type="date" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField size="small" helperText="Hora" type="time" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField size="small" helperText="Enlace de Reunion" fullWidth />
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Grid item sx={{ marginBottom: "0.5rem" }}></Grid>
      </Grid>
    </Box>
  );
};
