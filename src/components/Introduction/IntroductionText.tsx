import { Box, Button, Typography } from "@mui/material";

interface IntroductionTextProps {
  onStart: () => void;
}

export default function IntroductionText({ onStart }: IntroductionTextProps) {
  return (
    <Box component="section">
      <Typography
        variant="h6"
        align="left"
        sx={{ marginTop: 2 }}
        fontWeight="normal"
        paragraph
      >
        Haz clic en {'"'}Comenzar{'"'} para familiarizarte con las reglas
      </Typography>
      <Button variant="contained" color="primary" onClick={onStart}>
        Comenzar
      </Button>
    </Box>
  );
}
