const Button = ({
  children,
  variant = "primary",
  color = "red",
  className = "",
  ...props
}) => {
  const classes = `btn btn--${variant} btn--${color} ${className}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
