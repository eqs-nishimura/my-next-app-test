import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';

interface ButtonWithLinkProps extends ButtonProps {
  text: string;
  href: string;
  isRound?: boolean;
}

const FCButton: React.FC<ButtonWithLinkProps> = ({ text, href, isRound, ...props }) => {
  const roundStyles = isRound ? { borderRadius: '9999px' } : {};

  return (
    <Link href={href}>
      <Button size="large" {...props} style={roundStyles} >
        {text}
      </Button>
    </Link>
  );
}

export default FCButton;