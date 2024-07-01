import ResultIndicator from "@/components/Results/ResultIndicator";
import ResultLayout from "@/layouts/ResultLayout";
import { Box, Typography } from "@mui/material";

export default function Result() {
  return (
    <ResultLayout>
      <Box component="section" sx={{ p: 2 }}>
        <Typography variant="h1" component="p" align="center" fontWeight="bold">
          👑
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          fontWeight="bold"
        >
          Haz finalizado tu examen
        </Typography>
        <ResultIndicator />
      </Box>
    </ResultLayout>
  );
}
