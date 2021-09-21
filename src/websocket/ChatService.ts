import { container } from "tsyringe";
import { io } from "../http";

import { CreateChatRoomService } from "../services/CreateChatRoomService";
import { CreateUserService } from "../services/CreateUserService";
import { GetAllUsersService } from "../services/GetAllUsersService";
import { GetUserBySocketIdService } from "../services/GetUserBySocketIdService";
import { GetChatRoomByUserService } from "../services/GetChatRoomByUserService";

io.on("connect", (socket) => {
  socket.on("start", async (data) => {
    const { email, name, avatar } = data;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      email,
      name,
      avatar,
      socket_id: socket.id,
    });

    socket.broadcast.emit("new_users", user);
  });

  socket.on("get_users", async (callback) => {
    const getAllUsersService = container.resolve(GetAllUsersService);
    const users = await getAllUsersService.execute();

    callback(users);
  });

  socket.on("start_chat", async (data, callback) => {
    const createChatRoomService = container.resolve(CreateChatRoomService);
    const getChatRoomByUsersService = container.resolve(
      GetChatRoomByUserService
    );
    const getUserBySocketIdService = container.resolve(
      GetUserBySocketIdService
    );

    const userLogged = await getUserBySocketIdService.execute(socket.id);

    let room = await getChatRoomByUsersService.execute([
      data.idUser,
      userLogged?._id,
    ]);

    if (!room) {
      room = await createChatRoomService.execute([
        data.idUser,
        userLogged?._id,
      ]);
    }

    callback(room);
  });
});
