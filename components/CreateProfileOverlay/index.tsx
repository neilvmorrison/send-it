import { Drawer } from "@mantine/core";

interface ICreateProfileOverlay {
  opened: boolean;
  onClose: () => void;
}

function CreateProfileOverlay({ opened, onClose }: ICreateProfileOverlay) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title="Create Profile"
      position="right"
    >
      <h1>Fuck you</h1>
    </Drawer>
  );
}

export default CreateProfileOverlay;
