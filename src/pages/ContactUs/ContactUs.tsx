import React from "react";
import {
  Container,
  Grid,
  Box,
  TextField,
  MenuItem,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContactUs } from "./ContactUs.hook";
import UnParalleled from "@components/molecules/UnParalleled/UnParalleled";
import { StyledContactUs } from "./ContactUs.style";
import { Typography, Button, Card } from "@components/atoms";

const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  company: yup.string().required("Company is required"),
  service: yup.string().required("Service is required"),
  budget: yup.string().required("Budget is required"),
  message: yup.string().required("Message is required"),
});

type ContactFormData = yup.InferType<typeof contactSchema>;

export const ContactUs: React.FC = () => {
  const {
    heroConfig,
    contactInfo,
    services,
    budgetRanges,
    handleSubmit,
    isSubmitting,
    submitError,
    submitSuccess,
  } = useContactUs();

  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await handleSubmit(data);
    if (submitSuccess) {
      reset();
    }
  };

  return (
    <StyledContactUs>
      {/* Intro Section (UnParalleled) */}
      <Box sx={{ py: 6 }}>
        <UnParalleled
          smallText="Contact"
          mainHeading="Let's Start a Conversation About Your Project Goals"
          description={`We are ready to learn about your unique challenges and discuss how our next-generation analytical services can help you achieve your objectives. Whether you have a well-defined project or are seeking initial strategic guidance, our team of experts is here to help.`}
        />
      </Box>

      {/* Contact Form & Info */}
      <Box sx={{ py: 8, position: "relative" }}>
        {/* full-width stacked backgrounds (dark top + red bottom) behind content */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 240,
            backgroundColor: "secondary.main",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 240,
            left: 0,
            right: 0,
            height: 360,
            backgroundColor: "primary.main",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container>
            {/* Left column: content shown on top of the stacked backgrounds */}
            <Grid item xs={12} md={6}>
              <Box sx={{ color: "white", pt: 6, px: { xs: 3, md: 6 } }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                  Get in touch!
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 520 }}>
                  We appreciate your interest in our company. Please fill out
                  the form, and we'll get back to you promptly.
                </Typography>

                <Box sx={{ mt: 6 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                    Call Us At: {contactInfo?.phone ?? "+1 (555) 123–4567"}
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Write To Us
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <li>
                      <Typography variant="body2">
                        {contactInfo?.address ??
                          "6789 Elm Street Suite 300 Anytown, CA 91234"}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        {contactInfo?.email ?? "support@example.com"}
                      </Typography>
                    </li>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right column: form card (overlaps stacked background) */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Card
                  sx={{
                    width: { xs: "100%", md: 520 },
                    mt: { xs: 2, md: -8 },
                    boxShadow: 6,
                    p: 4,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 4 }}>
                    Get In Touch
                  </Typography>

                  {submitError && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      {submitError}
                    </Alert>
                  )}

                  {submitSuccess && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                      Thank you for your message! We'll get back to you soon.
                    </Alert>
                  )}

                  <form onSubmit={handleFormSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="name"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Full Name"
                              fullWidth
                              error={!!errors.name}
                              helperText={errors.name?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Email Address"
                              type="email"
                              fullWidth
                              error={!!errors.email}
                              helperText={errors.email?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Phone Number"
                              fullWidth
                              error={!!errors.phone}
                              helperText={errors.phone?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="company"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Company Name"
                              fullWidth
                              error={!!errors.company}
                              helperText={errors.company?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="service"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              select
                              label="Service Interested In"
                              fullWidth
                              error={!!errors.service}
                              helperText={errors.service?.message}
                            >
                              {services.map((service) => (
                                <MenuItem
                                  key={service.value}
                                  value={service.value}
                                >
                                  {service.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          )}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="budget"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              select
                              label="Project Budget"
                              fullWidth
                              error={!!errors.budget}
                              helperText={errors.budget?.message}
                            >
                              {budgetRanges.map((budget) => (
                                <MenuItem
                                  key={budget.value}
                                  value={budget.value}
                                >
                                  {budget.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="message"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Project Details"
                              multiline
                              rows={4}
                              fullWidth
                              error={!!errors.message}
                              helperText={errors.message?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="primary"
                          size="large"
                          loading={isSubmitting}
                          fullWidth
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </StyledContactUs>
  );
};
