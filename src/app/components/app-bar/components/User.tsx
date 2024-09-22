import { Listbox, ListboxItem, Popover, PopoverContent, PopoverTrigger, User as ReactUser } from "@nextui-org/react"
import { Box } from "../../Box"

export const User = () => {
    return (
        <>
            <Popover showArrow placement="bottom-end">
                <PopoverTrigger>
                    <ReactUser
                        as="button"
                        name="Nombre"
                        description="Rol"
                        className="transition-transform"
                        avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <Box style={{width: '200px'}}>
                        <Listbox
                            aria-label="Actions"
                            onAction={(key) => alert(key)}
                        >
                            <ListboxItem key="new">New file</ListboxItem>
                            <ListboxItem key="copy">Copy link</ListboxItem>
                            <ListboxItem key="edit">Edit file</ListboxItem>
                            <ListboxItem key="delete" className="text-danger" color="danger">
                                Cerrar sesion
                            </ListboxItem>
                        </Listbox>
                    </Box>
                </PopoverContent>
            </Popover>
        </>
    )
}
