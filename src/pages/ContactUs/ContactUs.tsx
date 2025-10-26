import React from "react";
import { Container, Grid, Box, TextField, MenuItem, Alert } from "@mui/material";
import { useState, useEffect } from 'react';
import { useContactUs } from "./ContactUs.hook";
import UnParalleled from "@components/molecules/UnParalleled/UnParalleled";
import { StyledContactUs } from "./ContactUs.style";
import { Typography, Card, CustomFilledButton } from "@components/atoms";

// Manual form state + validation (we avoid react-hook-form per request)

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
  const serviceOptions = (services && services.length > 0) ? services : [];

  // Local form state (single-column layout) with manual validation
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyField, setCompanyField] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceField, setServiceField] = useState('');
  const [moleculeType, setMoleculeType] = useState('');
  const [developmentPhase, setDevelopmentPhase] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [howDidYouHear, setHowDidYouHear] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // clear errors when submitSuccess becomes true
    if (submitSuccess) {
      setFirstName('');
      setLastName('');
      setCompanyField('');
      setEmail('');
      setPhone('');
      setServiceField('');
      setMoleculeType('');
      setDevelopmentPhase('');
      setProjectDescription('');
      setHowDidYouHear('');
      setErrors({});
    }
  }, [submitSuccess]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = 'First name is required';
    if (!lastName.trim()) e.lastName = 'Last name is required';
    if (!companyField.trim()) e.company = 'Company is required';
    if (!email.trim()) e.email = 'Email is required';
    else {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
      if (!re.test(email)) e.email = 'Invalid email';
    }
    if (!serviceField) e.service = 'Service is required';
    if (!projectDescription.trim()) e.projectDescription = 'Project description is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async () => {
    if (!validate()) return;

    const payload: any = {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      company: companyField,
      service: serviceField,
      budget: undefined,
      message: projectDescription,
      moleculeType,
      developmentPhase,
      howDidYouHear,
    };

    await handleSubmit(payload);
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

                  <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          label="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          fullWidth
                          size="small"
                          error={!!errors.firstName}
                          helperText={errors.firstName}
                          InputLabelProps={{ sx: { fontSize: '0.875rem' } }}
                          inputProps={{ sx: { fontSize: '0.95rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          fullWidth
                          size="small"
                          error={!!errors.lastName}
                          helperText={errors.lastName}
                          InputLabelProps={{ sx: { fontSize: '0.875rem' } }}
                          inputProps={{ sx: { fontSize: '0.95rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Company"
                          value={companyField}
                          onChange={(e) => setCompanyField(e.target.value)}
                          fullWidth
                          size="small"
                          error={!!errors.company}
                          helperText={errors.company}
                          InputLabelProps={{ sx: { fontSize: '0.875rem' } }}
                          inputProps={{ sx: { fontSize: '0.95rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          fullWidth
                          size="small"
                          error={!!errors.email}
                          helperText={errors.email}
                          InputLabelProps={{ sx: { fontSize: '0.875rem' } }}
                          inputProps={{ sx: { fontSize: '0.95rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          fullWidth
                          size="small"
                          InputLabelProps={{ sx: { fontSize: '0.875rem' } }}
                          inputProps={{ sx: { fontSize: '0.95rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          select
                          label="Service of Interest"
                          value={serviceField}
                          onChange={(e) => setServiceField(e.target.value)}
                          fullWidth
                          size="small"
                          error={!!errors.service}
                          helperText={errors.service}
                          InputLabelProps={{ sx: { fontSize: '0.875rem' } }}
                        >
                          {serviceOptions.map((service) => (
                            <MenuItem key={service.value} value={service.value}>
                              {service.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          select
                          label="Molecule Type"
                          value={moleculeType}
                          onChange={(e) => setMoleculeType(e.target.value)}
                          fullWidth
                          size="small"
                          InputLabelProps={{ sx: { fontSize: '0.875rem' } }}
                        >
                          <MenuItem value="Small Molecule">Small Molecule</MenuItem>
                          <MenuItem value="Biologic/Protein">Biologic/Protein</MenuItem>
                          <MenuItem value="Advanced Therapeutic">Advanced Therapeutic</MenuItem>
                          <MenuItem value="Medical Device">Medical Device</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          select
                          label="Development Phase"
                          value={developmentPhase}
                          onChange={(e) => setDevelopmentPhase(e.target.value)}
                          fullWidth
                          size="small"
                          InputLabelProps={{ sx: { fontSize: '0.875rem' } }}
                        >
                          <MenuItem value="Pre-clinical">Pre-clinical</MenuItem>
                          <MenuItem value="Phase I">Phase I</MenuItem>
                          <MenuItem value="Phase II">Phase II</MenuItem>
                          <MenuItem value="Phase III">Phase III</MenuItem>
                          <MenuItem value="Commercial">Commercial</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Project Description"
                          multiline
                          rows={5}
                          value={projectDescription}
                          onChange={(e) => setProjectDescription(e.target.value)}
                          fullWidth
                          size="small"
                          error={!!errors.projectDescription}
                          helperText={errors.projectDescription}
                          InputLabelProps={{ sx: { fontSize: '0.875rem' } }}
                          inputProps={{ sx: { fontSize: '0.95rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="How did you hear about us?"
                          value={howDidYouHear}
                          onChange={(e) => setHowDidYouHear(e.target.value)}
                          fullWidth
                          size="small"
                          InputLabelProps={{ sx: { fontSize: '0.875rem' } }}
                          inputProps={{ sx: { fontSize: '0.95rem' } }}
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
