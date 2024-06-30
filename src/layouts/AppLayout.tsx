import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      component="section"
      display="grid"
      gridTemplateRows="auto 1fr"
      sx={{ height: "100%" }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Examen App</Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
