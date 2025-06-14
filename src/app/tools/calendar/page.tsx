"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import {
  Box,
  Container,
  Icon,
  Stack,
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
  const session = useSession();

  const { addReminder, toggleReminder, reminders } = useCalendarStore();

  return (
    <Container
      margin={"auto"}
      height={"100vh"}
      fluid={true}
      padding={50}
      backgroundColor={"gray.100"}
      display={"flex"}
      alignItems={"center"}
      gap={10}
    >
      <Flex
        backgroundColor={"teal.800"}
        borderRadius={8}
        gap={16}
        padding={"20"}
        width={"100%"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        height={"90vh"}
      >
        <Flex>
          {session.status === "unauthenticated" ? (
            <Login />
          ) : (
            <DragDropUploader />
          )}
        </Flex>
        <Flex
          padding={30}
          backgroundColor={"teal"}
          borderRadius={"md"}
          flexDir={"column"}
        >
          <Heading
            // marginBottom={"1.5"}
            size={"lg"}
            colorPalette={"teal"}
            color={"purple.100"}
          >
            Current reminders
          </Heading>
          <Stack colorPalette={"purple"} height={"max-content"}>
            <For each={reminders}>
              {(reminder, index) => (
                <CheckboxCard.Root
                  checked={reminder.checked}
                  variant={reminder.checked ? "subtle" : "outline"}
                  key={reminder.label}
                  borderWidth={1}
                  borderColor={"purple.400"}
                >
                  <CheckboxCard.HiddenInput />
                  <CheckboxCard.Control
                    padding="2"
                    display={"flex"}
                    justifyContent={"space-between"}
                    onClick={() => toggleReminder(reminder.id)}
                  >
                    <CheckboxCard.Label>{reminder.label}</CheckboxCard.Label>
                    <Flex>
                      <CheckboxCard.Addon border={"none"}>
                        <Box backgroundColor={"purple.100"} _hover={{}}>
                          <Icon color={"red.500"}>
                            <FaMinus />
                          </Icon>
                        </Box>
                      </CheckboxCard.Addon>
                      <CheckboxCard.Indicator color={"teal.600"} />
                    </Flex>
                  </CheckboxCard.Control>
                </CheckboxCard.Root>
              )}
            </For>
          </Stack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Events;
