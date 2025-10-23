import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { colors } from '@theme/colors';
import { typography as appTypography } from '@theme/typography';

export const StyledTopBar = styled(Box)(({ theme }) => {
  // Prefer values from theme.palette if available at runtime, fallback to our colors exports
  const topBarBg = (theme.palette as any).topBar?.main ?? colors.topBar.main;
  const topBarText = (theme.palette as any).topBar?.contrastText ?? colors.topBar.contrastText ?? colors.text.primary;
  const iconColor = (theme.palette as any).text?.secondary ?? colors.text.secondary;
  const borderColor = (theme.palette as any).divider ?? colors.neutral[700];

  const topbarTypography = (theme.typography as any)?.topBar ?? appTypography.topBar;

  return {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: topBarBg,
    color: topBarText,
    borderBottom: `1px solid ${borderColor}`,
    zIndex: (theme.zIndex as any)?.appBar ? (theme.zIndex as any).appBar + 10 : 1300,

    '& .MuiTypography-root': {
      color: topBarText,
      fontSize: topbarTypography.fontSize,
      fontWeight: topbarTypography.fontWeight,
      lineHeight: topbarTypography.lineHeight,
      letterSpacing: topbarTypography.letterSpacing,
    },

    '& .MuiIconButton-root': {
      color: iconColor,
      '&:hover': {
        color: (theme.palette as any).primary?.main ?? colors.primary.main,
      },
    },

    [theme.breakpoints.down('md')]: {
      '& .MuiContainer-root': {
        padding: '0 16px',
      },
    },
  };
});
