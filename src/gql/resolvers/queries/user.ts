import { Context } from "../../interfaces/context";

const allUsers = (parent, args, ctx: Context, info) => {
    console.log(ctx);
}

export default {
    allUsers
}