export default interface IDrawerContext {
  openDrawer: boolean;
  currentContent: number;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentContent: React.Dispatch<React.SetStateAction<number>>;
}
