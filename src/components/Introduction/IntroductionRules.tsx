import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";

const RULES = [
  <>
    Solo tendras{" "}
    <Typography variant="body1" fontWeight="bold" component="span">
      12 segundos
    </Typography>{" "}
    para responder cada pregunta
  </>,
  "Una vez que selecciones tu respuesta, no se puede deshacer",
  "No puedes seleccionar ninguna opción una vez que se acaba el tiempo",
  "Obtendras puntos con base en tus respuestas correctas",
];

interface IntroductionRulesProps {
  onCancel: () => void;
}

export default function IntroductionRules({
  onCancel,
}: IntroductionRulesProps) {
  return (
    <Box component="section" mt={2}>
      <Typography variant="h5" component="h2" fontWeight="bold">
        Reglas
      </Typography>
      <List component="ol">
        {RULES.map((rule, index) => (
          <ListItem key={index} sx={{ listStyleType: "upper-roman" }}>
            <ListItemText
              primary={
                <>
                  {index + 1}.- {rule}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <Box component="section" display="flex" gap={2} sx={{ marginTop: 2 }}>
        <Button variant="text" color="error" onClick={onCancel}>
          Salir
        </Button>
        <Link href="/questions" passHref>
          <Button variant="contained" color="primary">
            Continuar
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
