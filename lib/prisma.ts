import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const connectionString = process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL;

if (!connectionString) {
    console.error("No database connection string found. Please set TURSO_DATABASE_URL or DATABASE_URL.");
}

const libsql = createClient({
    url: connectionString || "file:./dev.db", // Fallback to avoid crash during build if env is missing, though runtime will fail if not set
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
