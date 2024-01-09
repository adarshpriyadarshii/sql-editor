import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";

function Editor({ sqlCode, setSqlCode, handleRun, handleSave }) {
  return (
    <>
      <Grid item sx={{ margin: "1%" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "cursive",
            fontWeight: 800,
            textAlign: "start",
          }}
        >
          Editor
        </Typography>
        <AceEditor
          mode="mysql"
          theme="monokai"
          name="editor"
          fontSize={14}
          minLines={15}
          maxLines={18}
          width="100%"
          showPrintMargin={false}
          showGutter
          placeholder="Write your SQL Query Here!"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={sqlCode}
          onChange={(e) => setSqlCode(e)}
          showLineNumbers
        />
      </Grid>
      <Grid
        container
        justifyContent="flex-end"
        padding="1.5%"
        direction="row"
        spacing={1}
      >
        <Grid item>
          <Button
            onClick={handleRun}
            startIcon={<PlayCircleFilledRoundedIcon />}
            variant="contained"
            size="small"
            sx={{ fontFamily: "cursive", fontWeight: 600 }}
          >
            Run
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={handleSave}
            startIcon={<PlaylistAddRoundedIcon />}
            variant="contained"
            size="small"
            sx={{ fontFamily: "cursive", fontWeight: 600 }}
          >
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setSqlCode("")}
            startIcon={<ClearRoundedIcon />}
            variant="contained"
            size="small"
            sx={{ fontFamily: "cursive", fontWeight: 600 }}
          >
            Clean
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Editor;
