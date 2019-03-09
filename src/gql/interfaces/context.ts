import { Prisma } from "../../db/generated/prisma-client";
import { ContextParameters } from "graphql-yoga/dist/types";


export interface Context {
    prisma: Prisma,
    req: ContextParameters
}