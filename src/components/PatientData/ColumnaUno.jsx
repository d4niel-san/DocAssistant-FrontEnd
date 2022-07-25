import { Checkbox, Typography } from "@mui/material";
import * as styles from "./ColumnaUnoStyles";

export const ColumnaUno = () => {
  return (
    <div style={styles.columnaUno}>
      <img style={styles.avatar} src="https://via.placeholder.com/180" alt="" />
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
  );
};
