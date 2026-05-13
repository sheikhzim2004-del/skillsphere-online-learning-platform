"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

import {  User } from "lucide-react";

export function UpdateUserModal() {

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    console.log(name, image);

    await authClient.updateUser({
      name,
      image,
    })


  }


  return (
    <Modal>
      <Button variant="secondary">Update Profile</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>
              <Modal.Icon className="bg-teal-500/20 text-teal-400">
                <User className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Update User</Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-muted-foreground">
                Fill out the form below and we'll get back to you.
              </p>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                  <TextField name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField name="image" type="text">
                    <Label>Photo</Label>
                    <Input placeholder="Photo URL" />
                  </TextField>


                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit" slot="close" className="bg-teal-500 text-black hover:bg-teal-400">
                      Update Profile
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>

            {/* Footer */}

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}