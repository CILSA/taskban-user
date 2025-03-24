// import express from "express";
// import cors from "cors";
// import { fetchUsers, addUser, fetchUserById, fetchUserByUID, updateUserById, deleteUserById } from "./controllers/userController.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 4006;
// const router = express.Router();

// // Rutas de usuarios
// router.get("/users", fetchUsers); // Obtener usuarios por teamId
// router.get("/users/:userId", fetchUserById); // Obtener un usuario por ID
// router.get("/users/uid/:UID", fetchUserByUID); // Obtener un usuario por UID
// router.post("/users", addUser); // Crear un nuevo usuario
// router.put("/users/:userId", updateUserById); // Actualizar un usuario por ID
// router.delete("/users/:userId", deleteUserById); // Eliminar un usuario por ID

// // Usa las rutas para tareas
// app.use('/api', router);

// // Servidor local para tareas
// app.listen(port, () => {
//     console.log(`Tasks Service is running on http://localhost:${port}`);
// });
