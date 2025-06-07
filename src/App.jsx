import Button from "@mui/material/Button";
import { AccessAlarm, Mp, ThreeDRotation } from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme();
//   return (
//     <Button
//       onClick={() => {
//         setMode(mode === "light" ? "dark" : "light");
//       }}
//     >
//       {mode === "light" ? "Turn dark" : "Turn light"}
//     </Button>
//   );
// }

// function App() {
//   return (
//     <>
//       <ModeToggle />
//       <hr />
//       <div>dcmm con cho suc vat</div>
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>
//       <AccessAlarm />
//       <ThreeDRotation />
//     </>
//   );
// }
//

function Welcome(props) {
  return <h1>Xin chào, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Quang" />
      <Welcome name="Cảnh" />
    </div>
  );
}

export default App;
