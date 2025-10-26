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
import { Typography, Card, CustomFilledButton } from "@components/atoms";

const contactSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  company: yup.string().required('Company is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().notRequired(),
  service: yup.string().required('Service is required'),
  moleculeType: yup.string().notRequired(),
  developmentPhase: yup.string().notRequired(),
  projectDescription: yup.string().required('Project description is required'),
  howDidYouHear: yup.string().notRequired(),
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

  // If the hook doesn't provide services, use the canonical list
  const serviceOptions = (services && services.length > 0)
    ? services
    : []

  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      moleculeType: '',
      developmentPhase: '',
      projectDescription: '',
      howDidYouHear: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // map new form shape to existing handler shape
    const payload: any = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: data.service,
      budget: undefined,
      message: data.projectDescription,
      moleculeType: data.moleculeType,
      developmentPhase: data.developmentPhase,
      howDidYouHear: data.howDidYouHear,
    };

    await handleSubmit(payload);
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
                      <Grid item xs={12}>
                        <Controller
                          name="firstName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="First Name"
                              fullWidth
                              error={!!errors.firstName}
                              helperText={errors.firstName?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="lastName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Last Name"
                              fullWidth
                              error={!!errors.lastName}
                              helperText={errors.lastName?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="company"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Company"
                              fullWidth
                              error={!!errors.company}
                              helperText={errors.company?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Email"
                              type="email"
                              fullWidth
                              error={!!errors.email}
                              helperText={errors.email?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
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

                      <Grid item xs={12}>
                        <Controller
                          name="service"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              select
                              label="Service of Interest"
                              fullWidth
                              error={!!errors.service}
                              helperText={errors.service?.message}
                            >
                              {serviceOptions.map((service) => (
                                <MenuItem key={service.value} value={service.value}>
                                  {service.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="moleculeType"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              select
                              label="Molecule Type"
                              fullWidth
                            >
                              <MenuItem value="Small Molecule">Small Molecule</MenuItem>
                              <MenuItem value="Biologic/Protein">Biologic/Protein</MenuItem>
                              <MenuItem value="Advanced Therapeutic">Advanced Therapeutic</MenuItem>
                              <MenuItem value="Medical Device">Medical Device</MenuItem>
                              <MenuItem value="Other">Other</MenuItem>
                            </TextField>
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="developmentPhase"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              select
                              label="Development Phase"
                              fullWidth
                            >
                              <MenuItem value="Pre-clinical">Pre-clinical</MenuItem>
                              <MenuItem value="Phase I">Phase I</MenuItem>
                              <MenuItem value="Phase II">Phase II</MenuItem>
                              <MenuItem value="Phase III">Phase III</MenuItem>
                              <MenuItem value="Commercial">Commercial</MenuItem>
                              <MenuItem value="Other">Other</MenuItem>
                            </TextField>
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="projectDescription"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Project Description"
                              multiline
                              rows={5}
                              fullWidth
                              error={!!errors.projectDescription}
                              helperText={errors.projectDescription?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="howDidYouHear"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="How did you hear about us?"
                              fullWidth
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <CustomFilledButton
                          type="submit"
                          size="large"
                          loading={isSubmitting}
                          fullWidth
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </CustomFilledButton>
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
