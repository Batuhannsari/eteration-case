import { createTheme, ThemeProvider } from "@mui/material/styles";

const CustomThemeProvider = ({ children }: any) => {
    const theme = createTheme(
        {
            palette: {
                /*  primary: {
                     main: "#4D4D4D",
                     contrastText: "#FFFFFF",
                 },
                 secondary: {
                     main: "#D05515",
                     contrastText: "#FFFFFF",
                 },
                 text: {
                     primary: "#4D4D4D",
                 },
                 background: {
                     default: "#F5F5F5",
                 }, */
            },
            components: {
                MuiButton: {
                    defaultProps: {
                        disableElevation: true,
                    },
                    styleOverrides: {
                        root: {
                            height: "40px",
                            backgroundColor: "var(--blue)"
                        }
                    }
                },
                MuiInputBase: {
                    styleOverrides: {
                        root: {
                            height: "40px",
                            backgroundColor: "white",
                            borderRadius: 0
                        },
                        inputAdornedEnd: {
                            marginTop: -6
                        }
                    }
                },
                MuiRadio: {
                    styleOverrides: {
                        root: {
                            height: "20px",
                            width: "20px",
                            color: "var(--blue)"
                        }
                    }
                },
                /*  MuiCheckbox: {
                     styleOverrides: {
                         root: {
                             color: "var(--blue)"
                         }
                     }
                 }, */
                MuiSvgIcon: {
                    styleOverrides: {
                        root: {
                            color: "var(--blue)",
                        }
                    }
                },
                MuiFormControlLabel: {
                    styleOverrides: {
                        root: {
                            margin: 0,
                            gap: 9
                        }
                    }
                },
                MuiOutlinedInput: {
                    styleOverrides: {
                        root: {
                            height: "40px",
                            borderRadius: 0,
                        },
                    }
                },
                /*  MuiFormControl: {
                     styleOverrides: {
                         root: {
                             backgroundColor: "red !important"
                         },
                     }
                 }, */
                MuiInputLabel: {
                    defaultProps: {
                    },
                    styleOverrides: {
                        root: {
                            marginTop: 8,
                        }
                    },
                },
                MuiAutocomplete: {
                    defaultProps: {
                        color: "secondary"
                    },
                    styleOverrides: {
                        root: {
                            height: "40px",
                        }
                    },
                },
                MuiTextField: {
                    defaultProps: {
                        color: "secondary"
                    },
                    styleOverrides: {
                        root: {
                            borderRadius: 0,
                            height: "40px",
                        }
                    }
                },
            },
            shape: {
            },
            typography: {
                fontFamily: "inherit",
                htmlFontSize: 18,
                button: {
                    textTransform: "none",
                },
            },
        },
    );

    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>;
};

export default CustomThemeProvider;
