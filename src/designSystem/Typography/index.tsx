import { Typography } from '@mui/material';

type TypographyType = {
  children: React.ReactNode;
  textColor?: string;
};

export function H1({ children }: TypographyType) {
  return (
    <Typography variant='h1' gutterBottom>
      {children}
    </Typography>
  );
}

export function H2({ children }: TypographyType) {
  return (
    <Typography variant='h2' gutterBottom>
      {children}
    </Typography>
  );
}

export function H3({ children }: TypographyType) {
  return (
    <Typography variant='h3' gutterBottom>
      {children}
    </Typography>
  );
}

export function H4({ children }: TypographyType) {
  return (
    <Typography variant='h4' gutterBottom noWrap>
      {children}
    </Typography>
  );
}

export function H5({ children }: TypographyType) {
  return (
    <Typography variant='h5' gutterBottom noWrap>
      {children}
    </Typography>
  );
}

export function H6({ children }: TypographyType) {
  return (
    <Typography variant='h6' gutterBottom noWrap>
      {children}
    </Typography>
  );
}

export function Subtitle1({ children }: TypographyType) {
  return (
    <Typography variant='subtitle1' gutterBottom noWrap>
      {children}
    </Typography>
  );
}
export function Subtitle2({ children }: TypographyType) {
  return (
    <Typography variant='subtitle2' gutterBottom noWrap>
      {children}
    </Typography>
  );
}

export function Body1({ children }: TypographyType) {
  return (
    <Typography variant='body1' paragraph>
      {children}
    </Typography>
  );
}

export function Body2({ children, textColor }: TypographyType) {
  return (
    <Typography variant='body2' color={textColor} paragraph>
      {children}
    </Typography>
  );
}
