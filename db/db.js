import Sequelize from "sequelize";
// import PostModel from "./Post.js";
import UserModel from "./User.js";

const db = new Sequelize("postgres://kalai@localhost:5432/capstone", {
  logging: false,
});
// const Post = PostModel(db);
const User = UserModel(db);

const connectToDB = async () => {
  try {
    await db.authenticate();
    console.log("Connected to DB successfully");

    db.sync({ force: false });
  } catch (error) {
    console.error(error);
    console.error("PANIC! DB POBLEM!");
  }

  //   Post.belongsTo(User, { foreignKey: "userID" });
};

connectToDB();

export { db, User };
