import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';

interface ButtonWithLinkProps extends ButtonProps {
  isRound?: boolean;
}

const MFCButton: React.FC<ButtonWithLinkProps> = ({ isRound, style, href, ...buttonProps }) => {
  const roundStyles = isRound ? { borderRadius: '9999px', textDecoration: 'none' } : { textDecoration: 'none' };
  const combinedStyles = { ...roundStyles, ...style };

  return (
    <Button component={Link} href={href} size="large" {...buttonProps} style={combinedStyles} />
  );
}

export default MFCButton;