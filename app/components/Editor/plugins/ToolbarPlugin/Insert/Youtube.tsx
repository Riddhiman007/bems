"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { YouTube } from "@mui/icons-material";
import React, { useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import MotionMuiButton from "@/components/Motion/MotionMuiButton";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { INSERT_YOUTUBE_VIDEO } from "../../YoutubePlugin";

const formProps = z.object({
  ytLink: z.string({ required_error: "Please enter a youtube link." }),
});
type FormProps = z.infer<typeof formProps>;

export default function Youtube() {
  const [editor] = useLexicalComposerContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { control, handleSubmit, clearErrors, reset } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(formProps),
  });

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    clearErrors("root");
    reset();
  };

  const onSubmit: SubmitHandler<FormProps> = ({ ytLink }) => {
    editor.dispatchCommand(INSERT_YOUTUBE_VIDEO, {
      className: { base: "", focus: "" },
      videoId: ytLink,
    });
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal open={isModalOpen} component="div">
        <Container className="h-dvh">
          <Card className="mx-auto mt-4 w-[24rem] bg-slate-900 lg:mt-14">
            <CardContent className="mx-3 my-4 flex flex-col gap-4">
              <Typography variant="h5">Please insert a YouTube link</Typography>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Controller
                  control={control}
                  name="ytLink"
                  render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                    <TextField
                      error={Boolean(error)}
                      label="Youtube Link"
                      inputRef={ref}
                      placeholder="Please insert a YouTube link"
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <YouTube />
                          </InputAdornment>
                        ),
                      }}
                      helperText={
                        error && (
                          <Typography variant="body1" className="text-xs">
                            {error.message}
                          </Typography>
                        )
                      }
                      {...rest}
                    />
                  )}
                />

                <Box className="flex flex-row justify-between">
                  <MotionMuiButton
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    onClick={handleModalClose}
                    variant="outlined"
                    color="error"
                    className="border-red-700 px-4 py-2 text-red-500"
                  >
                    Cancel
                  </MotionMuiButton>
                  <MotionMuiButton
                    type="submit"
                    whileHover={{ scale: 1.2 }}
                    variant="contained"
                    color="success"
                    className="bg-green-700 px-4 py-2 text-green-50"
                  >
                    Insert
                  </MotionMuiButton>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Modal>
      <Button className="flex flex-col gap-2" onClick={handleModalOpen}>
        <YouTube className="h-10 w-10 dark:text-slate-50" />
        <Typography className="text-xs dark:text-slate-100" autoCapitalize="off">
          Youtube
        </Typography>
      </Button>
    </>
  );
}
