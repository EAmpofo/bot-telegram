export interface buttonProps {
  text: string;
  onClick: () => void;
  className: string;
  icon?: string;
}

export interface alienCardProps {
  image: string;
  className: string;
  content: JSX.Element;
}

export interface iconBoxProps {
  icon: JSX.Element;
  className: string;
}

export interface buttonWithBgProps {
  text: string;
  description?: string;
  onClick: () => void;
  className: string;
  image: string;
}

export interface patternProps {
  className: string;
  image: string;
}

export interface confirmModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  isOpen: boolean;
}

export interface userState {
  currentUsername: null;
  userCountry: null;
  tutorialFinished: boolean,
  reward: number;
}

export interface iconButtonProps {
  icon: JSX.Element;
  onClick: () => void;
  label: string;
  flexClass: string;
  bgColor?: string;
  borderColor?: string;
  textColor: string;
  borderWidth?: string;
}

export interface SvgProps {
  className?: string;
  width?: string;
  height?: string;
}
export interface levelUpProps{
    closeIcon: JSX.Element;
    imageIcon: JSX.Element;
    title: string;
    energy: string;
    energyValue: string;
    multitap: string;
    multitapValue: string;
    className: string;
    onClose?: () => void;

}