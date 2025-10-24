import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import { Layout } from './components/organisms';
import {
  Home,
  AboutUs,
  OurServices,
  Industries,
  WhyAgnezar,
  ContactUs,
} from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/why-agnezar" element={<WhyAgnezar />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
