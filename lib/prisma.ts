import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const connectionString = process.env.TURSO_DATABASE_URL;

const libsql = createClient({
    url: connectionString!,
    // authToken is already in the URL query param
});

// Cast to any to bypass strict type check if generated client doesn't fully sync yet
const adapter = new PrismaLibSql(libsql as any);

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
        log: ['query'],
    } as any);

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
