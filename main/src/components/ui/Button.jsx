const variantClasses = {
  primary: 'primary-button',
  secondary: 'secondary-button',
  ghost: 'text-link',
  mini: 'mini-button',
}

export function Button({
  children,
  variant = 'primary',
  as: Component = 'button',
  className = '',
  type,
  ...props
}) {
  const classes = [variantClasses[variant] || variantClasses.primary, className].filter(Boolean).join(' ')

  return (
    <Component className={classes} type={Component === 'button' ? type || 'button' : undefined} {...props}>
      {children}
    </Component>
  )
}
