/// <reference types="react-scripts" />

declare module '@mui/icons-material/*';

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
  