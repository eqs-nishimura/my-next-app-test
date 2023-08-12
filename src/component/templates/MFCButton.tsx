import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';

interface ButtonWithLinkProps extends ButtonProps {
  isRound?: boolean;
}

const MFCButton: React.FC<ButtonWithLinkProps> = ({ isRound, style, href, ...buttonProps }) => {
  const roundStyles = isRound ? { borderRadius: '9999px' } : {};
  const combinedStyles = { ...roundStyles, ...style };

  const buttonComponent = <Button size="large" {...buttonProps} style={combinedStyles} />;

  if (href) {
    return (
      <Link href={href} passHref>
        {buttonComponent}
      </Link>
    );
  }

  return buttonComponent;
}

export default MFCButton;