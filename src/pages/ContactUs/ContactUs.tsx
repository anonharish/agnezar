import React from 'react';
import { Container, Grid, Box, TextField, MenuItem, Alert } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContactUs } from './ContactUs.hook';
import { StyledContactUs } from './ContactUs.style';
import { Typography, Button, Card } from '@components/atoms';

const contactSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  company: yup.string().required('Company is required'),
  service: yup.string().required('Service is required'),
  budget: yup.string().required('Budget is required'),
  message: yup.string().required('Message is required'),
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
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
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
      {/* Hero Section */}
      <Box sx={{ py: 8, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ mb: 3 }}>
              {heroConfig.title}
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 800, mx: 'auto' }}>
              {heroConfig.description}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Form & Info */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 4 }}>
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
                              <MenuItem key={service.value} value={service.value}>
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
                              <MenuItem key={budget.value} value={budget.value}>
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
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  Contact Information
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                  {contactInfo.description}
                </Typography>
              </Box>

              {contactInfo.details.map((detail, index) => (
                <Card key={index} sx={{ p: 3, mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      {detail.icon}
                    </Box>
                    <Typography variant="h6">
                      {detail.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {detail.value}
                  </Typography>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </StyledContactUs>
  );
};
