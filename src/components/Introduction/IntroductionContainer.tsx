"use client";

import { Box, Typography } from "@mui/material";
import IntroductionRules from "./IntroductionRules";
import { useState } from "react";
import IntroductionText from "./IntroductionText";
import { useAppContext } from "@/hooks/useAppContext";

export default function IntroductionContainer() {
  const { started, handleStart, handleCancel } = useAppContext();

  return (
    <Box component="section" sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" align="center" fontWeight="bold">
        ¡Bienvenido a la aplicación para examenes web!
      </Typography>
      {!started && <IntroductionText onStart={handleStart} />}
      {started && <IntroductionRules onCancel={handleCancel} />}
    </Box>
  );
}
