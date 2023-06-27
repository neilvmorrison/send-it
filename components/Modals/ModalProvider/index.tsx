import { LoginModal } from "@/components";
import { ModalsProvider as MantineModalsProvider } from "@mantine/modals";

export interface IModalsProvider {
  children: React.ReactNode | React.ReactNode[];
}

function ModalProvider({ children }: IModalsProvider) {
  return <MantineModalsProvider>{children}</MantineModalsProvider>;
}

export default ModalProvider;
