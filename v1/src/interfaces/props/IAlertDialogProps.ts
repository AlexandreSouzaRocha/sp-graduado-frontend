export default interface IAlertDialogProps {
  open: boolean;
  titleText: string;
  textContent: string;
  buttonText: string;
  onClose: () => any;
}
