import { PrismaClient, User } from "@prisma/client";
const prismaClient = new PrismaClient();

interface CreateUserInput {
  email: string;
  name?: string;
  bio: string;
  posts: {
    title: string;
    content: string;
    published?: boolean;
    categories: {
      name: string;
    }[];
  }[];
}

interface updatePostInput {
  id: number;
  title: string;
  content: string;
  published?: boolean;
  categories: {
    name: string;
  }[];
}

export const getUser = async (id: number): Promise<User | null> => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: id,
    },
    include: {
      posts: true,
    },
  });

  return user;
};

export const getUsers = async (): Promise<User[] | null> => {
  const customers = await prismaClient.user.findMany({
    include: {
      posts: true,
    },
  });

  return customers;
};

export const createUser = async (input: CreateUserInput): Promise<User> => {
  const { name, email, bio, posts } = input;

  const user = await prismaClient.user.create({
    data: {
      name: name,
      email: email,
      profile: {
        create: {
          bio: bio,
        },
      },
      posts: {
        create: posts.map((post) => ({
          title: post.title,
          content: post.content,
          published: post.published || false,
          categories: {
            create: post.categories.map((category) => ({
              name: category.name,
            })),
          },
        })),
      },
    },
    include: {
      posts: {
        include: {
          categories: true,
        },
      },
      profile: true,
    },
  });

  return user;
};

export const updateUser = async (
  id: number,
  posts: updatePostInput[],
): Promise<User | null> => {
  const result = await prismaClient.user.update({
    where: {
      id: id,
    },
    data: {
      posts: {
        updateMany: posts.map((post) => ({
          where: {
            id: post.id,
          },
          data: {
            title: post.title,
            content: post.content,
            published: post.published || false,
          },
        })),
      },
    },
  });

  return result;
};

export const deleteUser = async (id: number): Promise<User | null> => {
  await prismaClient.post.deleteMany({
    where: {
      authorId: id,
    },
  });

  await prismaClient.profile.deleteMany({
    where: {
      userId: id,
    },
  });

  const customer = await prismaClient.user.delete({
    where: {
      id: id,
    },
    include: {
      posts: {
        include: {
          categories: true,
        },
      },
      profile: true,
    },
  });

  return customer;
};
