import { Box, Container, Stack } from "@mui/material";
import IntroductionContainer from "@/components/Introduction/IntroductionContainer";
import Image from "next/image";

export default function Home() {
  return (
    <Stack
      component="article"
      direction="row"
      width="100%"
      height="100%"
      alignItems="center"
    >
      <Box component="section" display={{ xs: "none", sm: "flex" }}>
        <Image
          src="/main-banner.svg"
          alt="Banner"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={281}
        />
      </Box>
      <IntroductionContainer />
    </Stack>
  );
}
