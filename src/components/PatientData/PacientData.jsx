// rgb: 248, 181, 197
//#region Imports
import { Checkbox, Container, Typography } from "@mui/material";
import * as styles from "./PacientDataStyles";
import * as placeHolder from "./Placeholders";

// #endregion

export const PacientData = () => {
  return (
    <>
      <div style={{ height: "64px" }}></div>
      <div style={styles.background}>
        <Container maxWidth="md" sx={styles.columnContainer}>
          <div style={styles.columnaUno}>
            <img
              style={styles.avatar}
              src="https://via.placeholder.com/180"
              alt=""
            />
            <div style={styles.gridContainer}>
              <div style={styles.gridUno}>
                <Typography align="center" sx={styles.typoPrimary}>
                  Ultimas
                </Typography>
                <Typography align="center" sx={styles.typoPrimary}>
                  Consultas
                </Typography>
              </div>
              <div style={styles.gridDos}>
                <Typography align="center" sx={styles.typoPrimary}>
                  Paga
                </Typography>
              </div>
              <div style={styles.gridTres}>
                <ul style={styles.ulStyle}>
                  <li style={styles.removeBullet}>
                    <Typography sx={styles.typoNormal}>11/22/33</Typography>
                  </li>
                  <li style={styles.removeBullet}>
                    <Typography sx={styles.typoNormal}>22/33/44</Typography>
                  </li>
                  <li style={styles.removeBullet}>
                    <Typography sx={styles.typoNormal}>33/44/55</Typography>
                  </li>
                </ul>
              </div>
              <div style={styles.gridCuatro}>
                <Checkbox sx={styles.checkBox} />
                <Checkbox sx={styles.checkBox} />
                <Checkbox sx={styles.checkBox} />
              </div>
            </div>
          </div>

          <div style={styles.columnaDos}>
            <Typography
              sx={{
                fontSize: 34,
                fontWeight: 700,
                display: "inline",
                color: "rgb(221, 108, 142)",
              }}
            >
              {placeHolder._nombre}
            </Typography>
            <Typography
              sx={{
                fontSize: 34,
                display: "inline",
                color: "rgb(221, 108, 142)",
                marginLeft: 1,
              }}
            >
              {placeHolder._apellido}
            </Typography>
            <Typography>{placeHolder._ocupacion}</Typography>
            <Typography>{placeHolder._dni}</Typography>
            <Typography>{placeHolder._celular}</Typography>
            <Typography>{placeHolder._mail}</Typography>
            <Typography>{placeHolder._historiaClinica}</Typography>
            <Typography>{placeHolder._notaUno}</Typography>
            <Typography>{placeHolder._fechaUno}</Typography>
            <Typography>{placeHolder._fechaDos}</Typography>
            <Typography>{placeHolder._notaDos}</Typography>
          </div>
        </Container>
      </div>
    </>
  );
};
