
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis eius quibusdam fugiat quae quidem quos minus eos cum laborum minima ad qui nobis enim, quisquam explicabo, aut expedita dignissimos sequi.</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {opacity: 0.9, backgroundColor: 'error.main'},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  )
}
