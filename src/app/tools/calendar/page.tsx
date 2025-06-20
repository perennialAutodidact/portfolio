"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  Box,
  Container,
  Icon,
  Stack,
  Grid,
  GridItem,
  List,
  Heading,
  For,
  CheckboxCard,
  Flex,
} from "@chakra-ui/react";
import { FaMinus } from "react-icons/fa6";
import DragDropUploader from "@/app/components/DragDropUploader";
import Login from "./Login";
import { useCalendarStore } from "./store";

const Events: React.FunctionComponent = () => {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const session = useSession();

  const { addReminder, deleteReminder, reminders } = useCalendarStore();

  console.log({ reminders });

  useEffect(() => {
    if (!window) return;

    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <Container
      fluid={true}
      padding={{ sm: 10, md: 10 }}
      backgroundColor={"gray.700"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Grid
        width={{
          sm: "100%",
          lg: "60%",
        }}
        gap={10}
        padding={10}
        backgroundColor={"teal.700"}
        borderRadius={8}
        gridTemplate={{
          md: `
            "dropzone dropzone reminders"
            "dropzone dropzone ."
          `,
          sm: `
            "dropzone"
            "reminders"
          `,
        }}
        gridTemplateColumns={{
          md: "1fr 1fr 1fr",
          sm: `1fr`,
        }}
        maxHeight={windowHeight - 100}
      >
        <GridItem gridArea="dropzone">
          {session.status === "unauthenticated" ? (
            <Login />
          ) : (
            <DragDropUploader />
          )}
        </GridItem>
        {session.status === "authenticated" ? (
          <GridItem
            width={"100%"}
            p={5}
            backgroundColor={"teal"}
            borderRadius={"md"}
            flexDir={"column"}
            gridArea={"reminders"}
            height="fit-content"
          >
            <Heading
              fontFamily={"heading"}
              size={"lg"}
              colorPalette={"teal"}
              color={"purple.100"}
              mb={3}
            >
              Current reminders
            </Heading>
            <List.Root
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              gap={3}
            >
              <For each={reminders}>
                {(reminder, index) => (
                  <List.Item
                    key={reminder.label}
                    backgroundColor={"purple.200"}
                    borderColor={"purple.500"}
                    borderWidth={1}
                    borderRadius={"5px"}
                    listStyle={"none"}
                    px={3}
                    py={2}
                    display={"flex"}
                  >
                    <Flex
                      width={"100%"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Box>{reminder.label}</Box>
                      <Box
                        color={"red.500"}
                        _hover={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          deleteReminder(reminder.id);
                        }}
                      >
                        <FaMinus />
                      </Box>
                    </Flex>
                  </List.Item>
                )}
              </For>
            </List.Root>
          </GridItem>
        ) : null}
      </Grid>
    </Container>
  );
};

export default Events;
