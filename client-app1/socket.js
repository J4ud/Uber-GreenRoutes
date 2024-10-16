const socket = io("http://localhost:5055", { path: "/real-time" }); // Update this to your server URL

socket.on("startProccess", () => {
  console.log("Connected to Socket.IO server");
});

socket.on("showsQR", () => {
  console.log("Connected to Socket.IO server");
});

socket.on("CameraScreen", () => {
  console.log("Connected to Socket.IO server");
});

export default socket;
