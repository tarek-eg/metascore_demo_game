import { metascore_demo_game } from "../../declarations/metascore_demo_game";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with metascore_demo_game actor, calling the greet method
  const greeting = await metascore_demo_game.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
